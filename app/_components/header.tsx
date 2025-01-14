import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return ( 
        <div>
            <Card>
                <CardContent className="flex flex-row item-center justify-between p-3">
                    <Image alt="LiveMix" src="/Logo-LiveMix.png" height={24} width={40} />
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-blue-400">Notebook LiveMix</h1>
                    <p className="font-extralight">Seu Caderninho virtual</p>                  
                    </div>
                    <Button size="icon" variant="outline">
                       <MenuIcon />
                    </Button>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default Header
