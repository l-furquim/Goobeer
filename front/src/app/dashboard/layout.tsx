import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Goober-Início",
    description: "Inicio da pagina goober",
  };

const dashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (

        <div>
            {children}
        </div>

    );
};

export default dashboardLayout;