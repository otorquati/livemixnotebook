import { Playlist } from "@prisma/client"
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface PlayListItemProps {
    playlist: Playlist
}

const PlayListItem = ({ playlist }: PlayListItemProps) => {
    return (
        <Card className="min-w-[256px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1 flex justify-center text-center">
                    <h1 className="font-semibold text-cyan-300">{playlist.id}</h1>
                {/* Esquerda Imagem */}
                <div className="relative h-[126px] w-full">
                    <Image 
                        alt="capa" 
                        src="/Logo-LiveMix.png" 
                        fill 
                        className="rounded-2xl object-center"
                    />
                </div>
                {/* Direita Artista e Título */}
                <div className="relative h-full w-full py-2 pl-5 border-solid border-l-2">
                    <p>David Guetta</p>
                    <p>Forever Young</p>
                    <Button className="mt-3 w-full" variant="secondary">Selecionar</Button>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default PlayListItem;