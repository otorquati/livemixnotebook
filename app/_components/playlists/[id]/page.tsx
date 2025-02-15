import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
interface PlaylistPageProps {
    params: {
        id: string
    }
}

const PlaylistPage = async ({params}: PlaylistPageProps) => {
    //Chamar Banco de Dados
    const playlist = await db.playlist.findUnique({ 
        where: {
            id: params.id
        },

    })
    const songs = await db.songs.findUnique({
        where: { 
            id: params.id}
    })    
 
    return ( 
        <div>
            {/*IMAGEM DE CAPA*/}
            <div className="relative w-full h-[180px]">
                <Image
                    alt={songs?.title}
                    src={songs.coverImage} 
                    fill 
                    className="object-cover"
                />
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                >
                 <Link href="/">
                    <ChevronLeftIcon/>
                 </Link>   
                </Button>
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-4 top-4"
                >
                    <MenuIcon/>
                </Button>
            </div> 
            <div  className="">
                {/* Dados da Playlist */}         
                <h1>Edição: {playlist?.editionId}</h1>
                <p>Data: </p>
                <p>Posição: {playlist?.playlistOrder}</p>
            </div>
            <div>
            {/*Forma de Onda e tocador */}

            </div>
                 
        </div>
    );
}
 
export default PlaylistPage;