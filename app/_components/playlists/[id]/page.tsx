import { db } from "@/app/_lib/prisma";
interface PlaylistPageProps {
    params: {
        id: string
    }
}

const PlaylistPage = async ({params}: PlaylistPageProps) => {
    //Chamar Banco de Dados
    const playlist = await db.playlist.findMany({ 
        where: {
            id: params.id
        }
    })
 
    return ( 
        <div>
            <div>
                
                {/* Data da Playlist */} 
                <h1>Edição: </h1>
                <p>Data: </p>
            </div> 
        </div>
    );
}
 
export default PlaylistPage;