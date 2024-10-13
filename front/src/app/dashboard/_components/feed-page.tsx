'use client'

import { CustomAlert, CustomAlertType } from "@/components/alert/Alert";
import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";


export type ProductProps = {
    productId: String,
    productName: String
    productPrice: String,
    productCategorie: String,
    productDescription: String,
    productImages: String
};
export type AnnouncementProps = {
    announcementId: String,
    announcementName: String,
    announcementPrice: Number,
    announcementLikes: Number,
    announcementQuestions: Number,
    announcerName: String,
    productImages: String,
    products: ProductProps[],
    announcementStreet: String,
    announcementNumber: String,
    announcementState: String,
    announcementDistrict: String
};
export type GetAllAnnouncementsResponse = {
    announces: AnnouncementProps[]
};


const FeedPage = () => {


    const [announcement, setAnnouncements] = useState<AnnouncementProps[]>([]);
    const [message, setMessage] = useState(<></>);
    const userCookie = getCookie("goober-auth");

    useEffect(() => {
        const GetAnnouncements  = async() => {
            try{
                
                const response = await backEndApi.get("announcement/find/all", {
                    headers: {
                        'Authorization': `Bearer ${userCookie}`
                    }
                });    
                if(response.data){
                    const announcements = response.data as GetAllAnnouncementsResponse;
                    setAnnouncements(announcements.announces);
                    
                }
            }catch(e){
                const axiosError = e as AxiosError;
                setMessage(<CustomAlert type={CustomAlertType.ERROR} title={"Erro !"} msg={axiosError.message}/>)
            }
        }
        GetAnnouncements()

    }, [userCookie])

    return (
        <div className="container flex flex-wrap justify-center ml-10 mt-10 bg-zinc-950  w-full gap-10 h-fit">

            {announcement.map((ann) => (
            <ul
                key={ann.announcementId.toString()}
                className="flex h-fit w-1/4 mt-20 max-w-[calc(100%/3-10px)]
                rounded-xl bg-zinc-900 border border-zinc-950 border-muted-foreground list-none
                hover:border-gray-500 transition duration-400"
            >
                <div>
                    
                   {ann.products ? (
                     <Link href={`/view/product/id/${ann.announcementId}`      
                  }>
                      <li className="p-4 text-zinc-300">
                          {ann.announcementName.substring(0,35)}
                          
                          <div>
                              <Image
                                  width={600} height={300}
                                   src={`http://localhost:8080/announcement/get/images/src/main/resources/static/images/announcement/${encodeURIComponent(ann.announcementName.toString())}`}
                                  
                                  alt="Mouse gamer"
                                  style={{ transform: 'scale(0.6)' }}/>                                                                
                              <p className="text-2xl font-bold">R$ {ann.announcementPrice.toString()}</p>

                          </div>
                      </li>
                  </Link>
                   ): (
                    <p>Anuncio sem produtos disponiveis</p>
                   )}


            
                </div>
            </ul>
                ))}
        </div>
    );

}

export default FeedPage;