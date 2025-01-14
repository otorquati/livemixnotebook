import { Playlist } from "@prisma/client"
import { Card, CardContent } from "./ui/card";

interface PlayListItemProps {
    playlist: Playlist
}
const PlayListItem = ({ playlist }: PlayListItemProps) => {
    return (
        <Card className="min-w-[159px]">
            <CardContent className="p-1">
                <div className="relative h-[48px] w-full">
                    <h1>{playlist.id}</h1>
                    <p>{playlist.editionId}</p>
                </div>
            </CardContent>
        </Card>
)
}
 
export default PlayListItem;