import Button from "@/components/Button";
import Image from "next/image";
import { ChangeEvent, Dispatch, HtmlHTMLAttributes, SetStateAction, SyntheticEvent, useState } from "react";

type DonationRequest = {
    id: string,
    title: string,
    category: string,
    descriptions: string, 
    damage: string,
    address: string,
    name: string,
    phoneNumber: string,
    email: string,
    imageLink: string,
    instructions: string
}

export default function Donate(props: any) {
    const [deviceModel, setDeviceModel] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [damageDescription, setDamageDescription] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNum, setPhoneNum] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // handle posts here. Ill get back to it.
        const options = {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                id: "",
                title: deviceModel,
                category: category,
                description: description,
                damage: damageDescription,
                address: address,
                name: fullName,
                phoneNum: phoneNum,
                email: email,
                imageLink: "",
                instructions: "",
            })
        }

        fetch('localhost:8080/donate', options).then(res=> res.json).then(data=> console.log(data));
    }
    
    return(
        <>
            <h1 className="text-blue-600 text-xl">Make an impact</h1>


            {/* <div className="flex flex-col border-4 border-blue-600 justify-center rounded-md"> */}
            <div className="flex flex-col">
                
                <div className="text-white bg-blue-600 pl-4">Donate</div>

                {/* <div className="flex flex-col p-5 space-y-2"> */}
                <form className="flex flex-col p-5 space-y-2" onSubmit={handleSubmit}>
                    <Image className="flex grow rounded-md" src={"/res/img/family.jpeg"} width={800} height={100} alt='banana' />

                
                    <NamedInput
                        fName="Full Name"
                        type='text'
                        onChange={(e: any) => setFullName(e.target.value)} value={fullName} />


                    <div className="flex flex-row space-x-3">

                        <NamedInput className="grow"
                            fName="Email Address"
                            type='text'
                            onChange={(e: any) => setEmail(e.target.value)} value={email} />

                        <NamedInput className="grow"
                            fName="Phone Number(Optional)"
                            type='text'
                            onChange={(e: any) => setPhoneNum(e.target.value)} value={phoneNum} />
                    </div>

                    <NamedInput className="col-span-2"
                        fName="Address"
                        type='text'
                        onChange={(e: any) => setAddress(e.target.value)} value={address} />
                        
                    <div className="flex flex-row space-x-3">

                        <NamedInput className="grow"
                            fName="Damage"
                            type='text'
                            onChange={(e: any) => {setDamageDescription(e.target.value)}} value={damageDescription} />

                        <NamedInput className="grow"
                            fName="Description"
                            type='text'
                            onChange={(e: any) => {setDescription(e.target.value)}} value={description} />

                        <NamedInput className="grow"
                            fName="Category"
                            type='text'
                            onChange={(e: any) => {setCategory(e.target.value)}} value={category} />
                    </div>
                        

                    {/* <form>
                        <label>Device model: </label><input type="text" onChange={(e) => setDeviceModel(e.target.value)} value={deviceModel} /> <br/>
                        <label>Category: </label><input type="text" onChange={(e) => setCategory(e.target.value)} value={category} /><br/>
                        <label>Description: </label><input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /><br/>
                        <label>Address: </label><input type="text" onChange={(e) => setAddress(e.target.value)} value={address} /><br/>
                        <label>Damage description: </label><input type="text" onChange={(e) => setDamageDescription(e.target.value)} value={damageDescription} /><br/>
                        <label>Full name: </label><input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} /><br/>
                        <label>Phone number: </label><input type="text" onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum} /><br/>
                        <label>Email: </label><input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /><br/>
                        <input type="submit" value="Donate" onSubmit={e => handleSubmit(e)}/>
                    </form> */}

                    <Image className="flex grow rounded-md" src={"/res/img/2bebe.jpg"} width={800} height={100} alt='banana' />
                
                    <div className="flex flex-row space-x-16">
                        <div className="flex flex-col grow space-y-2">
                            <NamedInput
                                fName="Brand of your device"
                                type='text'
                                onChange={(e: any) => setDeviceModel(e.target.value)} value={deviceModel} />
                            
                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>
                            
                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>

                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>


                        </div>
                        <div className="flex flex-col grow space-y-2">
                            <NamedInput
                                fName="Brand of your device"
                                type='text' />
                            

                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>

                            
                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>

                            
                            <QuestionInput fName={"Power"} 
                                q={"Does the device power up and function normally?"}/>
                        </div>
                    </div>
                    <div className="m-5 flex justify-end">
                        <input type="submit" className="bg-blue-600 text-white rounded-md p-4" value="Submit" />
                    </div>
                </form>
                {/* </div> */}




            </div>


            
        </>
    );
}

export function NamedInput({fName, type, className, value = "", onChange}: any) {
    return (
        <div className={className}>
            <label className='text-sm'>{fName}</label><br/>
            <input type={type} value={value} onChange={onChange} className="border rounded-md w-full" />
        </div>
    );
}

function QuestionInput({fName, q, className}: any) {
    return (
        <div className={className}>
            <label className='text-sm'>{fName}</label>
            <div className="border rounded-md p-4 space-y-4">
                <p>{q}</p>
                <div className="flex flex-row justify-center space-x-3">
                    <Button fill={false} grow={false} href={"#"}>Yes</Button>
                    <Button fill={false} grow={false} href={"#"}>No</Button>
                </div>
            </div>
        </div>
    );
}