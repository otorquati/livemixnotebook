import { db } from "@/app/_lib/prisma";

interface PlaylistPageProps {
    params: {
        id: string
    }
}

const PlaylistPage = async ({params}: PlaylistPageProps) => {
    //Chamar Banco de Dados
    const edition = await db.editions.findUnique({
        where: {
            id: params.id,
        }
    })
    return ( 
        {/* Data da Playlist */} 
        <Image 
            alt="Playlist LiveMix"
            src={edition?.date}

    );
}
 
export default PlaylistPage;