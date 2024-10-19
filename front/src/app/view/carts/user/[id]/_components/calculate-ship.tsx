import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const calculateSchema = z.object({
  cep: z.string().min(8, {message: "CEP inválido"})
});

type calculateType = z.infer<typeof calculateSchema>;

export default function CalculateShip(){
  const { handleSubmit, register, setValue } = useForm<calculateType>({
    resolver: zodResolver(calculateSchema),
    defaultValues: {
        cep: ""
    }
});


  async function handleCalculate({cep}: calculateType){
    const cepSomenteDigitos = cep.replace(/\D/g, "");
        if (cepSomenteDigitos !== "") {
          
          const validacep = /^[0-9]{8}$/;
    
          if (validacep.test(cepSomenteDigitos)) {
            try {
              const JsonData = JSON.stringify({
                  from: {
                    postal_code: "09571300"
                  },
                  to: {
                    postal_code: cepSomenteDigitos
                  },
                  services: [41106, 40010],
                  products: [
                    {
                      weight: 500,
                      width: 10,   
                      height: 15,  
                      length: 20,   
                      quantity: 1 
                    }
                  ]
                
              })
            }catch(e){
              console.log(e);
            }
      }
    }
  }


  return (
    <div className="flex flex-col mr-auto ml-56 my-10">
          <form onSubmit={handleSubmit(handleCalculate)}>
              <Label>calcule o frete</Label>
                <div className="flex gap-4">
                  <Input {...register("cep")} maxLength={8} className="bg-zinc-800 " type="text"/>
                  <Button type="submit">ok</Button>
                </div>
          </form>
    </div>
  )
}