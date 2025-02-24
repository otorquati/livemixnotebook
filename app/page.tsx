import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { db } from "./_lib/prisma"
import NotebookItem from "./_components/notebook-item"
import MyDatePicker from "./_components/mydatepicker"
import { Card, CardContent } from "./_components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import EditionsPage from "./editions/[id]/page"

const Home = async () => {
  // Chama o banco de dados
  const editions = await db.editions.findMany({})
  // const songsDb = await db.songs.findMany({})
  const notebooks = await db.notebook.findMany({})

  return (
    <>
      <Header />
      {/* Welcome Message */}
      <div className="flex flex-col p-5 sm:p-6">
        <h2 className="text-sm font-bold text-gray-400 md:text-xl md:text-cyan-600">
          Osvaldo Torquati
        </h2>
        <p>Seja bem vindo ao seu caderninho virtual</p>
        <p>{format(new Date(), "EEEE', ' dd 'de' MMMM", { locale: ptBR })}</p>
        <div className="mt-4 flex items-center gap-2">
          <Input placeholder="Busque a sua track preferida" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>

      {/* CALENDÁRIO DAS PLAYLISTS */}
      <div className="flex justify-center">
        <MyDatePicker />
      </div>

      {/* PLAYLIST DA ÚLTIMA EDIÇÃO */}
      <h2 className="p-2 text-xs font-bold uppercase text-gray-400"></h2>
      <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        {editions.map((editions) => (
          <EditionsPage key={editions.id} editions={editions} />
        ))}
      </div>

      {/* PREFERIDAS DO OUVITNE */}
      <h2 className="p-2 text-xs font-bold uppercase text-yellow-400">
        Trilhas Favoritas - Atualizada em 10/01/2025
      </h2>
      <div className="flex gap-2 overflow-auto">
        {notebooks.map((notebook) => (
          <NotebookItem key={notebook.id} notebook={notebook} />
        ))}
      </div>

      <footer>
        <Card>
          <CardContent className="flex justify-center px-5 py-6">
            <p className="text-sm font-extralight text-gray-400">
              (c) Copyright -<span className="font-bold"> T4WEB</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </>
  )
}

export default Home
