'use client'
import type { GetUserCartReponseType } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";


export default function CartsContainer(cart: GetUserCartReponseType) {
  console.log(cart.itemsQuantity.toString() + cart.totalPrice);
  const [items, setItems] = useState(cart.itemsQuantity.toString());
  const [price, setPrice] = useState(cart.totalPrice.toFixed(2).toString());
  const nome = "QWJEOIQWJEOIQWJEIJWQOIEJWQIOj"


  return (
    <>

      <div className="flex flex-col h-full w-[85%] items-center border-[1px] bg-zinc-800 px-5 pt-4  border-muted-foreground border-zinc-300 rounded-xl">
        <div className="flex w-full  justify-between ">
          <p className="font-normal text-sm">
            {nome.length > 11 ? nome.substring(0,11) + "..." : nome}
          </p>
          <p className="flex gap-3 font-normal">
          <Button  onClick={e => {
              setItems(i => {
                const currentTotalNumber = parseInt(i);
                const finalItem = currentTotalNumber + 1;
                setPrice((aPrice) => {
                  return (parseFloat(cart.totalPrice.toString()) / parseFloat((cart.itemsQuantity).toString()) * finalItem).toFixed(2).toString();
                } 
              );

                return finalItem.toString();

              })
            }} size={"sm"} className="bg-zinc-300 hover:bg-zinc-400 text-black">
              <PlusIcon size={"15px"} />
            </Button>
            <p className=" font-normal text[20px]">{items.toString()}</p>
            <Button onClick={e => {
              setItems(i => {
                const currentTotalNumber = parseInt(i);
                var newTotalNumber = (currentTotalNumber - 1);
                newTotalNumber == 0 ? newTotalNumber = 1 : newTotalNumber;
                
                setPrice((aPrice) => {
                  return (parseFloat(cart.totalPrice.toString()) / parseFloat((cart.itemsQuantity).toString()) * newTotalNumber).toFixed(2).toString();
                } 
              );
                
                return newTotalNumber.toString();
              })
            }} size={"sm"} className="bg-zinc-300 hover:bg-zinc-400 text-black">
              <MinusIcon size={"15px"} />
            </Button>
          </p>
          <p className="font-normal text-muted-foreground">
            919817
          </p>
          <p className=" font-bold text-green-500">
            R$ {price.replace(".",",")}
          </p>
        </div>
      </div>
    </>
  )
}