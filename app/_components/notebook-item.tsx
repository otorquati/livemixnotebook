import { Notebook } from "@prisma/client"
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
interface NotebookItemsProps {
   notebook : Notebook
}
const NotebookItem = ({ notebook }: NotebookItemsProps) => {
    return (
        <Card className="min-w-[159px] rounded-2xl">
          <CardContent className="p-1 flex">
                {/* Esquerda Imagem */}
                <div className="relative h-[126px] w-full">
                    <Image 
                        alt="capa" 
                        src="/Logo-LiveMix.png" 
                        fill 
                        className="rounded-2xl object" 
                    />
                    <Badge className="absolute left-1 top-1" variant="secondary">
                        <StarIcon size={12} />
                    </Badge>
                </div>
                {/* Direita Artista e Título */}
                <div className="relative h-full w-full py-2 pl-5 border-solid border-l-2">
                    <h1 className="font-semibold text-yellow-600">{notebook.id}</h1>
                    <p>Alok</p>
                    <p>Forever Young</p>
                </div>
            </CardContent>
        </Card>
)
}
 
export default NotebookItem;