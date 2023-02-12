import Button from "@/components/Button";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "vm";
import { SelectedCardContext } from "@/components/contexts/SelectedCardContext";
import { NamedInput } from "./donate";
// import {GetStaticProps} from 'next';

export type PhoneDonation = {
    id: string
    title: string,
    category: string,
    description: string,
    damage: string,
    address: string,
    name: string,
    phoneNumber: string,
    email: string,
    imageLink: string,
    instructions: string
}

export type PhoneRequest = {
    id: string,
    phoneRequested: string,
    name: string,
    phoneNumber: string,
    address: string
}

export type PhoneId = {
    id: string,
    imageLink: string,
    phoneRequested: string,
    phoneNumber: string
}

// export async function getServerSideProps()  {
//         const data = await fetch(`http://localhost:8080/donate/`, {
//             method: "get",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }})
//             .then(res => res.json())
//         return {props: {phoneRequests: data}};
// }

const backendUrl = "BACKEND_URL"
export default function Receive({phoneRequests}: any) {
    // use phoneId.id
    const [phoneSelected, setPhoneSelected] = useState<PhoneId>();
    const [requesterName, setRequesterName] = useState("");
    const [requesterAddress, setRequesterAddress] = useState("");
    const availablePhones: Array<PhoneId> = []
    // const availablePhones: Array<PhoneId> = phoneRequests.map((i: PhoneDonation) => {
    //     return {
    //         id: i.id,
    //         imageLink: i.imageLink,
    //         phoneRequested: i.title,
    //     }
    // });


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let payload = {
            id: "",
            phoneRequested: "",
            name: "",
            phoneNumber: "",
            address: "",
        }

        if (phoneSelected != null) {
            payload.id = phoneSelected.id;
            payload.phoneRequested = phoneSelected.phoneRequested;
            payload.phoneNumber = phoneSelected.phoneNumber;
        }

        // handle posts here. Ill get back to it.
        const options = {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(payload)
        }

        fetch('localhost:8080/donate', options).then(res=> res.json).then(data=> console.log(data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-blue-600 text-xl">Choose your phone</h1>
            <div className={`flex flex-row space-x-3`}>
                <SelectedCardContext.Provider value={{phoneSelected, setPhoneSelected}}>
                    {availablePhones.map((i: PhoneId) => <SelectableCard key={i.id} phoneId={i} />)}
                </SelectedCardContext.Provider>
            </div>
            
            <NamedInput className="grow"
                fName="Full Name"
                type='text'
                onChange={(e: any) => {setRequesterName(e.target.value)}} value={requesterName} />

            <NamedInput className="grow"
                fName="Address"
                type='text'
                onChange={(e: any) => {setRequesterAddress(e.target.value)}} value={requesterAddress} />
            <div className="m-5 flex justify-end">
                <input type="submit" className="bg-blue-600 text-white rounded-md p-4" value="Submit" />
            </div>                         
        </form>
    )
}

function SelectableCard({phoneId}: any) {
    const [selected, setSelected] = useState(false)
    const [borderStyle, setBorderStyle] = useState("");
    const [phoneSelected, setPhoneSelected] = useState(SelectedCardContext)
    const [imageSrc, setImageSrc ] = useState("/res/img/banan.jpg")

    useEffect(() => {
        if (phoneId.imageLink != null) setImageSrc(phoneId.imageLink);
    }, []);

    useEffect(() => {
        const bs = (phoneSelected == phoneId.id) ? "border-blue-600": "";
        setBorderStyle(bs);
    }, [phoneSelected]);

    const clickHandler = (e: any) => {
        console.log(selected, phoneSelected)
        const bkup = null;
        // point to this when clicked
        if (!selected) {
            setPhoneSelected(phoneId.id)
        } else {
            setPhoneSelected(bkup)
        }
        setSelected(!selected);
    }   

    return (
            <div onClick={clickHandler} className={`relative border-2 rounded-md ${borderStyle} flex flex-col grow-0 w-max-150`}> 
                {/* <Image src={phoneId.imageLink} */}
                <div className="absolute w-full h-full hover:border-blue-300" id={phoneId.id}></div>
                {/* image wrapper */}
                <div className="flex flex-col grow">
                    <Image src={imageSrc} className="object-fit"
                    width={150} height={100} alt={phoneId.phoneRequested} />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-center">{phoneId.phoneRequested}</h2>
                </div>
            </div>
    );
} 

