'use client'
import { NavBar } from "@/app/dashboard/_components/nav-bar";
import CartsContainer from "./_components/carts-container";
import { getUserDataAndCarts } from "@/lib/api";
import type { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import type { GetUserCartReponseType, GetUserDataAndCartResponseType } from "@/context/auth-context";
import FinalizeCart from "./_components/finalize-cart";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import CalculateShip from "./_components/calculate-ship";

const UserCartsPage = (context: GetServerSidePropsContext) => {
  const [carts, setCarts] = useState<GetUserCartReponseType[]>();
  
  console.log("IJQweijeqwe");

  const getData = async() => {
    const response =  await getUserDataAndCarts(context);
    
    if(response){
      setCarts(response.cartData); 
    }
  }

  useEffect(()=> {
    getData();
  },[])

  return (
  <>
    <NavBar/>


    <div className="w-full flex justify-center">
      <div className="flex w-[80%] bg-zinc-900 rounded-xl items-center  text-zinc-300 flex-col">
        <h1 className="font-bold mt-10 text-[30px]">Meu carrinho</h1>
          
          <div className="shadow-sm mt-5 pb-5 px-5  rounded shadow-zinc-600 ">
            <div className="flex text-sm font-bold items-center gap-32 justify-between mt-5 ">
            <h1>produto</h1>
            <h1>quantidade</h1>
            <h1>entrega</h1>
            <h1>preço</h1>
          </div>
      
      </div>
          {carts ? (
          <>
            {carts.map((c) => (
              <ul className="flex flex-col items-center  w-full h-full mt-5">
                <li key={c.cartId.toString()} className="flex justify-center w-[70%] h-[80%]">
                <CartsContainer cartId={c.cartId} itemsQuantity={c.itemsQuantity} totalPrice={c.totalPrice}/>
                </li>
              </ul>
            ))}

            <CalculateShip/>

            <FinalizeCart cartId={carts[0].cartId} totalPrice={carts[0].totalPrice} itemsQuantity={carts[0].totalPrice} />    
          </>
          ): (
          <p>Carregando seus carrinhos...</p>
        )
        }
        </div>
    </div>
  </>
  ) 
}
export default UserCartsPage;