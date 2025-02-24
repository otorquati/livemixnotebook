import { Playlist } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { db } from "../_lib/prisma"

interface PlayListItemProps {
  playlist: Playlist
}

const PlayListItem = async ({ playlist }: PlayListItemProps) => {
  const songs = await db.songs.findUnique({
    where: {
      id: playlist.songsId,
    },
  })
  return (
    <Card className="min-w-[159px]">
      <CardContent className="flex justify-center p-0 px-1 pt-1">
        {/* Esquerda Imagem */}
        <div className="relative h-[126px] w-[159]">
          <Image
            alt="capa"
            src="/Logo-LiveMix.png"
            fill
            className="rounded-2xl object-center"
          />
        </div>
        {/* Direita Artista e Título */}
        <div className="relative h-full w-full border-l-2 border-solid py-2 pl-5">
          <h4>{playlist.playlistOrder}</h4>
          <h2>Título: {songs?.title}</h2>
          <p>Artista: {songs?.Artist}</p>
          <p></p>
          <Button className="mt-3 w-full" variant="secondary">
            <Link href={`/editions/${songs?.title}`}>Selecionar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PlayListItem
