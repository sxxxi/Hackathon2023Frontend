import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Home(props: any) {

  return (
    <>
      <div className="flex flex-row">
        <div>
          <Image 
            src={"/res/img/banan.jpg"}
            alt="doog" 
            width= {400}
            height={200}
            className="object-fill rounded-md"
            />
        </div>
        <div className="flex flex-col p-4 justify-center">
          <h1 className=" font-medium text-xl">Connecting communities,<br></br>empowering tomorrow&apos;s leaders.</h1>
          <p className="text-sm my-4">We&apos;re a non-profit dedicated to bridging the digital gap<br></br> and promoting equal access to technology for all. </p>
        
          <div className="flex flex-row space-x-2">
            <Button href={""} grow={true}>Donate</Button>
            <Button href={""} grow={true}>Request</Button>
            <Button href={""} grow={true}>Learn</Button>
          </div>
        </div>
      </div>

      <h1 className="font-medium text-lg text-center my-8">How can you prepare learners for tomorrow?<br/>Our solution is simple-to connect you with mobile devices.</h1>


      <h1 className="font-medium text-xl mt-4">How it works</h1>
      <h2 className="text-sm text-gray-400 mb-4">DONATIONS</h2>
      <div className="flex flex-row justify-between">
        <StatementCard
          iconSrc={"/res/img/banan.jpg"}
          head={"Choose the devices you wish to donate."}
          body={"Fill out an application"} />

        <StatementCard
          iconSrc={"/res/img/banan.jpg"}
          head={"Choose the device's eligibility."}
          body={"Fill out an application"} />

        <StatementCard
          iconSrc={"/res/img/banan.jpg"}
          head={"Choose the devices you wish to donate."}
          body={"Fill out an application"} />
      </div>
      
    </>

  )
}

function StatementCard({ iconSrc, head, body }: any) {
  return (
    <div className="bg-gray-200 w-60 h-72 rounded-md p-4">
      <Image 
        src={iconSrc}
        width={95}
        height={95}
        alt={"icon"} />
      <h1 className="font-medium text-md">{head}</h1>
      <p>{body}</p>
    </div>
  );
}

