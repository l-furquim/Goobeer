import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import type { GetUserCartReponseType } from "@/context/auth-context";
import { MinusIcon, PackageCheckIcon, PlusIcon, ShoppingBasketIcon, TrashIcon } from "lucide-react";
import { useState } from "react";

export default function FinalizeCart(cart: GetUserCartReponseType) {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
     <Sheet>
        <SheetTrigger>
          <Button className="bg-zinc-300 hover:bg-zinc-400 text-black">
                Finalizar carrinho <ShoppingBasketIcon className="text-black" />  
          </Button>
        </SheetTrigger>
      <ScrollArea className="h-80 overflow-auto">
        <SheetContent>
          <SheetHeader>Resumo do carrinho
          <SheetDescription className="flex flex-col gap-5 mt-4">
            <div className="flex justify-between">
              <p>1 produto</p>
              <p>R$ 32,30</p>
            </div>
            <div  className="flex justify-between">
              <p>frete</p>
              <p>R$ 120,20</p>
            </div>

            <Separator orientation="horizontal" className="bg-zinc-300 bg-opacity-30"/>
          </SheetDescription>
          </SheetHeader>
            <div className="flex justify-self-start flex-col gap-10 mb-10">
                    <div className="w-full h-full shadow-md rounded-md flex flex-col gap-2 p-5">
                      <div className="flex items-center justify-between w-full">
                        <h1>total</h1>
                        <div className="flex mt-2 flex-col">
                          <p className="text-[15px] font-extrabold text-green-500">R$ 152,40</p>
                          <p className="text-xs text-muted-foreground">em até 12x sem juros</p>
                        </div>
                      </div>
                      
                      <p className="w-[80%] mt-5 mb-5 text-muted-foreground">
                        Um mouse super gamer qwoejoi ejqwoiejqwejqwoie jqoeqjeo qjeqweqwoij
                      </p>
                      
                      <Separator orientation="horizontal" className="w-full bg-zinc-300 bg-opacity-30"/>
                    </div>
                   
            </div>
          <SheetFooter className="w-full flex justify-center">
            <SheetClose asChild>
              <Button className="w-[50%] flex gap-4">
                Finalizar <PackageCheckIcon/>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
          </ScrollArea>      
     </Sheet>
    </>
  )
}