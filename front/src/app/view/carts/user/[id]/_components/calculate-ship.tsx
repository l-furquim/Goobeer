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

              const response = await fetch('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate', {
                method: "POST",
                headers: {
                  "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODM0ODEzYWI3MDMzN2E2Njc0ZmY0ZjcwY2IyZTljNTkxMGE4OGRiY2NkOTk0MGQxMjNmZWU4MjJhNDYxM2E5MWQyNmEzZmVmNjNmNjM4ZmYiLCJpYXQiOjE3MjkzMDI1OTMuNjg3MDk0LCJuYmYiOjE3MjkzMDI1OTMuNjg3MDk2LCJleHAiOjE3NjA4Mzg1OTMuNjczNzA3LCJzdWIiOiI5ZDQ3NzRhYi04MmM2LTQzZjctOTMwOC04MWIwYjUxYTQ2NjUiLCJzY29wZXMiOlsiY2FydC1yZWFkIiwiY2FydC13cml0ZSIsImNvbXBhbmllcy1yZWFkIiwiY29tcGFuaWVzLXdyaXRlIiwiY291cG9ucy1yZWFkIiwiY291cG9ucy13cml0ZSIsIm5vdGlmaWNhdGlvbnMtcmVhZCIsIm9yZGVycy1yZWFkIiwicHJvZHVjdHMtcmVhZCIsInByb2R1Y3RzLWRlc3Ryb3kiLCJwcm9kdWN0cy13cml0ZSIsInB1cmNoYXNlcy1yZWFkIiwic2hpcHBpbmctY2FsY3VsYXRlIiwic2hpcHBpbmctY2FuY2VsIiwic2hpcHBpbmctY2hlY2tvdXQiLCJzaGlwcGluZy1jb21wYW5pZXMiLCJzaGlwcGluZy1nZW5lcmF0ZSIsInNoaXBwaW5nLXByZXZpZXciLCJzaGlwcGluZy1wcmludCIsInNoaXBwaW5nLXNoYXJlIiwic2hpcHBpbmctdHJhY2tpbmciLCJlY29tbWVyY2Utc2hpcHBpbmciLCJ0cmFuc2FjdGlvbnMtcmVhZCIsInVzZXJzLXJlYWQiLCJ1c2Vycy13cml0ZSIsIndlYmhvb2tzLXJlYWQiLCJ3ZWJob29rcy13cml0ZSIsIndlYmhvb2tzLWRlbGV0ZSIsInRkZWFsZXItd2ViaG9vayJdfQ.jekBoM9V2UwfQQws2C1hwNotyMHEZwPeiO-IUkQsNVuOOoB27IIPUIn0YYVDK__EjDWaCRMHNYEXhOHIRk8_exlraq0XhoMGEJ0LlK8nqXHTJznQXeIUWBJeBeC0SwqBCs6sP4M05m9QRTQ9wEWQcZq7BHLbmF9goRwRDhSxUfaJzC9K2F0ecPPGmPPb79CbKvNogxpyBkZ2gB6e5muGQNp-dX2vLS0abQkg71R-0hk5qY-Oa48UUtZQAEhHR2po2uT5jey2CeUd5s5ZtHGDJJhy8FzQ4mv6M302cQpi9uUxGk0uDqgHI-637Td1v9XZeTjU4fryBGeVRyLaP4wfm7kuc6vxyYrEShOdHJr4gQW8au7U9IW5GPhgKGhfgIno4A3aAexpw2q2YqxCB4z59L1Tez_g4T2F4cntc1asfQw9N_tO4RQ2Io6-VR3RMd4JrNF-dt_RIuUkjwce35LqTxDQsuOIefsuJjlYyzByl_dw6IGboVTCfNupCFPVZyfWhC0TcboKuI7Gz4CE5fQuIEgfe5nLrySa3rDzVCQhvWnePOOzxYDqT9_HO5F92Rqb_s2o6LwexFYvyWSuyOh4cwnS7qGNnP1Z-9oBbGQ5eI-57urxKZrGjS5uRnbbKC3EAZv3gGuJndJEWwGDoe2x87F7tDgzrQ6Bm0qx4kQYuYs`,
                  "Content-type": "application/json",
                  "User-agent": "Aplicação goober-commerce.gmail.com"
                },
                body: JsonData
              });

              const data = await response.json();
              console.log(data);
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