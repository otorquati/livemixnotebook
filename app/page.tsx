import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Calendar } from "./_components/ui/calendar";
import { Input } from "./_components/ui/input";
import { db } from "./_lib/prisma";
import PlayListItem from "./_components/playlist-items";
import NotebookItem from "./_components/notebook-item";
import { Card, CardContent } from "./_components/ui/card";

const Home = async() => {
  // Chama o banco de dados
  const playlist = await db.playlist.findMany({})
  const notebook = await db.notebook.findMany({})
  console.log({playlist})
  return ( 
    <>
    <Header />
    {/* Welcome Message */}
    <div className="flex flex-col p-5">
      <h2 className="font-bold text-xl text-cyan-400">Olá, Osvaldo DJ Thor</h2>
      <p>Seja bem vindo ao seu caderninho virtual</p>
      <p>Segunda-feira, 13 de janeiro.</p>
      <div className="mt-4 flex items-center gap-2">
        <Input placeholder="Busque a sua track preferida" />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </div>

    {/* CALENDÁRIO DAS PLAYLISTS */ }
    <div className="p-2 flex flex-col items-center">
      <h2 className="font-bold">Escolha a data da Playlist</h2>
      <Calendar></Calendar>
    </div>

    {/* PLAYLIST DA ÚLTIMA EDIÇÃO */}
    <h2 className="p-2 mb-2 mt-2
     text-xs font-bold uppercase text-yellow-400">Última Edição: 10/01/2025</h2>
     <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
      {playlist.map(playlist => (<PlayListItem key={playlist.id} playlist={playlist}/>))}
     </div>

    {/* PREFERIDAS DO OUVITNE */ }
    <h2 className="p-2 mb-2 mt-2
     text-xs font-bold uppercase text-yellow-400">Suas Preferidas: 10/01/2025</h2>
     <div className="flex gap-2 overflow-auto">
      {notebook.map(notebook => (<NotebookItem key={notebook.id} notebook={notebook}/>))}
     </div>

    <footer>
      <Card>
        <CardContent className="px-5 py-6 flex justify-center">
          <p className="font-extralight text-sm text-gray-400">
          (c) Copyright -
            <span className="font-bold">  T4WEB
            </span>
            </p>
        </CardContent>
      </Card>
    </footer>
    </>    
   );
}
 
export default Home;