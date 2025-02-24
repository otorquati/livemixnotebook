import { Editions } from "@prisma/client"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import PlayListItem from "@/app/_components/playlist-items"
import { db } from "@/app/_lib/prisma"

interface EditionsItemProps {
  editions: Editions
}

const EditionsPage = async ({ editions }: EditionsItemProps) => {
  const playlist = await db.playlist.findMany({
    where: {
      editionId: editions.id,
    },
  })
  return (
    <div>
      <h1>
        Edição n. {editions.editionId} de
        {format(editions.editionDate, "' 'EEEE, dd' de 'LLLL' de 'yyyy", {
          locale: ptBR,
        })}
        {/* Playlist Card */}
        <div className="mt-2 flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {playlist.map((playlist) => (
            <PlayListItem key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </h1>
    </div>
  )
}

export default EditionsPage
