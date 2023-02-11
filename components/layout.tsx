import { AppProps } from "next/app";
import Navbar from "./navbar";


export default function Layout ({ children }: any) {
    return (
        <>
            {/* Navbar here */}
            <Navbar />
            {/* Body */}
            <main className="px-60 pt-8">
                {children}
            </main>
                

            {/* Footer */}
        </>
    );
}
