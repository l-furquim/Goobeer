'use client'
import Link from "next/link"
import { SearchBar } from "./search-bar"
import { UserData } from "./user-label"
import { ShoppingCartIcon } from "lucide-react"
import NewAnnouncement from "./new-announcement"
import React, { useEffect, useState } from "react"
import { getUserData } from "@/lib/api"
import type { GetServerSidePropsContext } from "next"
import type { GetUserDataResponseType } from "@/app/view/user/[user]/page"

export const NavBar = (context: GetServerSidePropsContext) => {   
    const [userData, setUserData] = useState<GetUserDataResponseType>();
    

    useEffect(()=> {    
        const fetchUser = async() => {
            try{
                const response = await getUserData(context);
                
                if(response){
                    setUserData(response);
                }
            }catch(e){
                console.log(e);
            }
        }
        fetchUser();
    },[])
    
    

    return (
        <>
       {userData ? (
         <div className="w-screen flex flex-row items-center justify-center">
         <nav className="flex w-screen items-center justify-center gap-20 m-5 pb-14 rounded-xl text-zinc-300 text-xl bg-zinc-950 border border-muted-foreground">
             
             <Link href="/dashboard/home">
                 <div className="flex ml-10 gap-3 mt-9 hover:opacity-75 transition">
                     <h1 className="uppercase">Goober</h1>
                     <ShoppingCartIcon />
                 </div>
             </Link>
 
             <div className="mt-8 flex flex-grow justify-center mr-32">
                 <SearchBar />
             </div>

 
             <div className="flex flex-col mr-8 absolute right-14 gap-4 mt-10">
                 <UserData userEmail={userData.userEmail} userId={userData.userId} userImagePath={userData.userImagePath} userName={userData.userName}/>
                 <NewAnnouncement />
             </div>
         </nav>
     </div>
       ): (
        <p>Carregando seus dados...</p>
       )}
    
    </>
    
    
    )

}