import { ChangeEvent, Dispatch, HtmlHTMLAttributes, SetStateAction, SyntheticEvent, useState } from "react";

type DonationForm = {
    device
}

export default function Donate(props: any) {
    const [deviceModel, setDeviceModel] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [damageDescription, setDamageDescription] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNum, setPhoneNm] = useState<string>("");
    
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = fetch("localhost:8080/api/sjl")

    }
    
    return(
        <>
            <form action="#">
                <label>Device model: </label><input type="text" onChange={(e) => setDeviceModel(e.target.value)} value={deviceModel} /> <br/>
                <label>Category: </label><input type="text" onChange={(e) => setCategory(e.target.value)} value={category} /><br/>
                <label>Description: </label><input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /><br/>
                <label>Address: </label><input type="text" onChange={(e) => setAddress(e.target.value)} value={address} /><br/>
                <label>Damage description: </label><input type="text" onChange={(e) => setDamageDescription(e.target.value)} value={damageDescription} /><br/>
                <label>Full name: </label><input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} /><br/>
                <label>Phone number: </label><input type="text" onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum} /><br/>
                <input type="submit" value="Donate" onSubmit={handleSubmit} />
            </form>
        </>
    );
}