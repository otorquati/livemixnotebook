import { Disc3, FileMusicIcon, HomeIcon, LogInIcon, LogOutIcon, StarIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet";
{/*import { Avatar, AvatarImage } from "./ui/avatar";*/}
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image"  
const SideBarSheet = () => {
    return ( 
        <SheetContent className="overflow-y-auto">
        <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-5 border-b border-solid flex items-center justify-between igap-3">
            <h2 className="text-lg font-bold">Faça seu login</h2>
            <Dialog>
                 <DialogTrigger asChild>
                    <Button size="icon"> 
                        <LogInIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                    <DialogHeader>
                        <DialogTitle>Faça seu login na plataforma</DialogTitle>
                        <DialogDescription>
                            Conecte-se usando sua conta do Google.
                        </DialogDescription>
                    </DialogHeader>
                    <Button variant="outline" className="gap-1 font-bold">
                        <Image 
                            alt="Fazer login com google" 
                            src="/Google.svg" 
                            width={18} 
                            height={18} 
                        />
                        Google
                    </Button>
                </DialogContent>
            </Dialog>
            {/*<Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1648090327161-7be068ca3790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.
                                        // 3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DQ"/>
            </Avatar>
            <div>
                <p className="font-bold">Osvaldo Torquati</p>
                <p className="text-xs">torquati.osvaldo@gmail.com</p>   
            </div>*/}
        </div>
        {/* Botão Iniciar */}
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
        <div className="p-5 flex flex-col gap-2 border-b border-solid">
            {/* Botão Songs / Músicas */}
            <Button className="justify-start gap-2" variant="outline">
                <Link href="/musics">
                    <FileMusicIcon size={18}/>
                    Músicas / Songs
                </Link>
            </Button>
            {/* Botão Playlist / Edições */}
            <Button className="justify-start gap-2" variant="outline">
                <Link href="/playlist">
                    <Disc3 size={18}/>
                    Playlists
                </Link>
            </Button>
            {/* Botão Favoritas / Favorites */}
            <Button className="justify-start gap-2" variant="outline">
                <Link href="/notebook">
                    <StarIcon size={18}/>
                    Favoritas / Favorites
                </Link>
            </Button>
         </div>
         <div className="p-5 flex flex-col gap-4 border-b border-solid">
        {/* Botão Sair da Conta */}
         <Button className="justify-start gap-2" variant="ghost">
                <LogOutIcon size={18} />
                Sair da Conta / logout
            </Button>
        </div>
    </SheetContent>
     );
}
 
export default SideBarSheet;