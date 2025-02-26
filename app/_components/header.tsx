import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SideBarSheet from "./sidebar-sheet"

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="item-center flex flex-row justify-between p-3">
          <Image
            alt="LiveMix"
            src="/Logo-LiveMix.png"
            width="48"
            height="48"
            className="h-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-blue-400">
              Notebook LiveMix
            </h1>
            <p className="font-extralight">Seu Caderninho virtual</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SideBarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
