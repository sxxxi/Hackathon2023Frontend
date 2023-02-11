import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

//
// login, contact us, donate, logo
export default function Navbar(props: any) {
    return (
        // <nav className="flex flex-row justify-around border-b h-20 py-6 space-x-24 pl-8 pr-8">
        <nav className="grid grid-cols-3 h-20 py-5 border-b">
            <Link href={"/"} className="flex justify-center">
                <Image
                    src={"/res/img/createchangelogo.png"}
                    alt={"site logo"}
                    width={250}
                    height={100} />
            </Link>
            {/* <div className="flex w-80 font-extrabold justify-center text-xl">CreateChange</div> */}
            {/* middle area */}

            <div className="flex flex-row align-middle justify-around grow">
                <NavButton href={"/"}>Donate</NavButton>
                <NavButton href={"/"}>Request</NavButton>
                <NavButton href={"/"}>Learn</NavButton>
                <NavButton href={"/"}>About us</NavButton>
            </div>    
            <div className="flex flex-row justify-center space-x-2 grow">
                <Button href={"/"}>Login</Button>
                <Button href={"/"} fill={false}>Contact Us</Button>
            </div>    
        </nav>
    );
}

function NavButton({href, children}: any) {
    return (
        <Link href={href} className="text-blue-600 text-lg p-2">{children}</Link>
    );
} 

