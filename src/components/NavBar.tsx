import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";



const NavBar = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);


  return (
    <nav>
        <div className="flex-between
        fixed top-0 bg-gradient-to-r from-fuchsia-900 to-[#180c49] border-b border-orange-300 z-30 w-full py-6">
            <div className="flex-between mx-auto w-5/6">
                <div className="flex-between w-full gap-16">
                    <Link href="/">
                    <h1 className="logo">Next Intro</h1>
                    </Link>
                { isAboveMediumScreens ?(<div className="flex-between w-2/5">
                    <Link href='/characters' className="flex items-center gap-3">
                    <p className="text-3xl hover:text-orange-500 font-semibold text">Characters</p>
                    </Link>
                    <Link href='/episodes' className="flex items-center gap-3">
                    <p className="text-3xl hover:text-orange-500 font-semibold text">Episodes</p>
                    </Link> 
                </div>)
                : (
                <button 
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-[30px] w-[30px] text-orange-500"/>
                </button>)}
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40
                 h-full w-[300px] bg-gradient-to-b from-orange-500 to-fuchsia-800 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-8 w-8 icon"/>
                </button>
            </div>
            <div >
            <div className="ml-[20%] flex justify-between mt-10 flex-col gap-10 w-3/5">
                    <Link href='/characters' onClick={()=> setIsMenuToggled(false)} className="flex items-center gap-3">
                    <p className="text-3xl text font-semibold">Characters</p>
                    </Link>
                    <Link href='/episodes' onClick={()=> setIsMenuToggled(false)} className="flex items-center gap-3">
                    <p className="text-3xl font-semibold text">Episodes</p>
                    </Link>
                </div>
            </div>
            </div>
        )}
    </nav>
  )
}

export default NavBar