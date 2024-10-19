import { ThemeButton } from "@/components/theme/theme-button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon, ShoppingCartIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {

    return (
        <div className="text-zinc-900 font-bold bg-zinc-300 h-32 flex flex-row items-center gap-8 mt-8 ">
            <div className="ml-10 w-full flex flex-row gap-10">
                <div className="flex flex-row gap-10">
                    <ShoppingCartIcon size={"42px"}/>
                    <span className="mt-3">© 2024  </span>
                    <span className="mt-3">Goober e-commerce</span>
                </div>
            
                <div className="flex ml-auto mr-14 gap-4 mt-3">
                    <Link href="#">
                        Sobre nós
                    </Link>
                
                <div className=" rounded-full border p-1  border-black">
                    <Link href="https://github.com/l-furquim/Goober">
                            <GithubIcon size={22}/>
                    </Link>
                </div>
                
                <div className=" rounded-full border p-1  border-black">
                    <Link href="#">
                        <TwitterIcon size={22}/>
                    </Link>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;