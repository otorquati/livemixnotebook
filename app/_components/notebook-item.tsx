import { Notebook } from "@prisma/client"
import { Card, CardContent } from "./ui/card";

interface NotebookItemsProps {
   notebook : Notebook
}
const NotebookItem = ({ notebook }: NotebookItemsProps) => {
    return (
        <Card className="min-w-[159px]">
            <CardContent className="p-1">
                <div className="h-[48px] w-full">
                    <h1>{notebook.id}</h1>
                    <p>{notebook.songId}</p>
                </div>
            </CardContent>
        </Card>
)
}
 
export default NotebookItem;