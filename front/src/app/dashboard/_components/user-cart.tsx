import type { GetUserDataResponseType } from "@/app/view/user/[user]/page";
import { Button } from "@/components/ui/button";
import { ShoppingBasketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
type goToUserCartProps = {
  userName: String
}

export default function UserCart({userName}: goToUserCartProps) {
  const router = useRouter();
  const goToUserCart = () => {
    router.push(`/view/carts/user/${userName}`)
  }

  return (
    <div>
      <Button onClick={goToUserCart} className="bg-zinc-300 text-black hover:cursor-pointer flex gap-1 hover:bg-zinc-400">
        <ShoppingBasketIcon size={15}/>
        Carrinho
      </Button>
    </div>
  )
}