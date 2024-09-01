'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"


    const LoginFormSchema = z.object({
        email: z.string().email({message: "Email invalido"}),
        password: z.string().min(1,"Senha invalida")
    });

    type loginFormType = z.infer<typeof LoginFormSchema>;

    export default function LoginPage(){

        const [message, setMessage] = useState<React.ReactNode>(<></>);


        const {handleSubmit, register, setValue} = useForm<loginFormType>({
            resolver: zodResolver(LoginFormSchema),   
            defaultValues: {
                email :"",
                password: ""
            }
        });

        const handleLoginSubmit = async(data: loginFormType) =>{

            const {email, password} = data;


        }

        
        return(

            <>
            <nav className="flex-row flex justify-center container gap-4 p-10 mt-5 ml-5 rounded-xl mr-5
            space-x-5 uppercase text-zinc-300 text-xl bg-zinc-900">
                      
                    <span className=" flex items-center">
                        <h1>Goober</h1>
                        
                        <ShoppingCartIcon className="text-zinc-300"/>
                    </span>
           
           </nav>
                   
               <div className="flex items-center justify-center min-h-screen ">
                   
                   <div className="container flex flex-col gap-10 bg-zinc-700 max-w-prose rounded-xl p-10 border-zinc-900 border-solid border-4">

                   <h2 className="font-bold text-xl">Insira seus dados de login:</h2>

                        {message}
       
                       <form className="space-y-2" onSubmit={handleSubmit(handleLoginSubmit)}>
                           
                           <label className="block text-zinc-300">Email: </label>
                               <Input className="border-zinc-900 border-2 bg-zinc-600" {...register("email")} type="text"/>
       
                           <label className="block text-zinc-300">Senha: </label>
                               <Input className="border-zinc-900 border-2 bg-zinc-600" {...register("password")} type="text"/>
       
                           <Button type="submit">Enviar</Button>
       
                       </form>
                   </div>
               </div>

        <Link href={"/"}>
            <footer className="text-right mr-10 mb-10 text-muted-foreground">Sobre nós</footer>
        </Link>
           </>
        )

    }