import { Disc3, HomeIcon, LogOutIcon, MenuIcon, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    return ( 
        <div>
            <Card>
                <CardContent className="flex flex-row item-center justify-between p-3">
                    <Image alt="LiveMix" src="/Logo-LiveMix.png" width="48" height="0" className="h-auto"/>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold text-blue-400">Notebook LiveMix</h1>
                        <p className="font-extralight">Seu Caderninho virtual</p>                  
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="py-5 border-b border-solid flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src="https://images.unsplash.com/photo-1648090327161-7be068ca3790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.
                                                            // 3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DQ"/>
                                </Avatar>
                                <div>
                                    <p className="font-bold">Osvaldo Torquati</p>
                                    <p className="text-xs">torquati.osvaldo@gmail.com</p>   
                                </div>
                            </div>
                            <div className="p-5 flex flex-col gap-4 border-b border-solid" >
                                <SheetClose asChild>
                                <Button className="justify-start gap-2" variant="ghost" asChild>
                                    <Link href="/">
                                        <HomeIcon size={18}/>
                                        Início
                                    </Link>
                                </Button>
                                </SheetClose>
                            </div>
                            <div className="p-5 flex flex-col gap-4 border-b border-solid">
                                <Button className="justify-start gap-2" variant="outline">
                                    <Disc3 size={18}/>
                                    Playlists
                                </Button>
                                <Button className="justify-start gap-2" variant="outline">
                                    <StarIcon size={18}/>
                                    Favoritas
                                </Button>
                             </div>
                             <div className="p-5 flex flex-col gap-4 border-b border-solid">
                             <Button className="justify-start gap-2" variant="ghost">
                                    <LogOutIcon size={18} />
                                    Sair da Conta
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                </CardContent>
            </Card>
        </div>
     );
}
 
export default Header
