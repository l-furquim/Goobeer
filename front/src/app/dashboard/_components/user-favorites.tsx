import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

export default function UserFavorites () {
  return (
    <div>
      <Button className="bg-zinc-300 hover:bg-zinc-400 hover:cursor-pointe flex gap-1 text-black">
        <HeartIcon size={15}/>
        Favoritos 
      </Button>
    </div>
  )
}