"use client"
import { Disc3, FileMusicIcon, HomeIcon, LogInIcon, LogOutIcon, StarIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image"  
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
const SideBarSheet = () => {
    const {data} = useSession()
    const handleLoginWithGoogleClick = () => signIn("google") 
    const handleLogoutClick = () => signOut()
    return ( 
        <SheetContent className="overflow-y-auto">
        <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
            {data?.user ? (
                <div className="flex items-center gap-2">
                        <Avatar>
                        <AvatarImage src={data?.user?.image ?? ''}/>
                    </Avatar>
                    <div>
                        <p className="font-bold">{data.user.name}</p>
                        <p className="text-xs">{data.user.email}</p>   
                    </div>
                </div>
            ):(
                <>
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
                    <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
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
                </div>
                </>
            )}
            
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
         <Button className="justify-start gap-2" variant="ghost" onClick={handleLogoutClick}>
                <LogOutIcon size={18} />
                Sair da Conta / logout
            </Button>
        </div> 
    </SheetContent>
     );
}
 
export default SideBarSheet;