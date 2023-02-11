import Link from "next/link";
import { useEffect, useState } from "react";

export default function Button({ children, href, fill = true, grow = false }: any) {
    const [buttonFill, setButtonFill] = useState("");
    const [buttonGrow, setButtonGrow] = useState("");

    useEffect(() => {
        if (fill) {
            setButtonFill("bg-blue-600 text-white");
        } else {
            setButtonFill("text-blue-600")
        }

        if (grow) {
           setButtonGrow("grow"); 
        } else {
            setButtonGrow("p-2");
        }
    }, []);

    return (
        <Link 
            href={href} 
            className={`border-2 flex ${buttonGrow} justify-center rounded-md shadow-lg border-blue-600 ` + buttonFill}>
            {children}
        </Link>
    );
}