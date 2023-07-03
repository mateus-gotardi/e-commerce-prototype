"use client";
import React, { useEffect } from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";

export default function Carousel() {
    let largura = window.screen.width
    console.log(largura)
    let passo = 3
    if (largura < 1024) {
        passo = 2
    } else if (largura < 768) {
        passo = 1
    }
    const [current, setCurrent] = React.useState(0);
    const [selection, setSelection] = React.useState([{ img: "", name: "", testemony: "" }]);
    useEffect(() => {
        setSelection(testemonys.slice(current, current + passo))
    }, [current]);
    const testemonys = [
        {
            img: "https://images.unsplash.com/photo-1520445740767-c2fc76e6b5a1",
            name: "Naura",
            testemony: "The taste is good, the service is also good",
        },
        {
            img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
            name: "Yessica Christy",
            testemony: "I like it this coffee is the best for me",
        },
        {
            img: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65",
            name: "John",
            testemony: "This is the real taste of coffee",
        },
        {
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
            name: "Garry M",
            testemony: "It's delicious, I want to buy it again",
        },
        {
            img: "https://images.unsplash.com/photo-1548142813-c348350df52b",
            name: "Koko",
            testemony: "This is really a coffee shop. Awesome!",
        },
        {
            img: "https://images.unsplash.com/photo-1567195433112-a890bf087b3a",
            name: "Mely",
            testemony: "I really like the latte that was just launched",
        },
        {
            img: "https://images.unsplash.com/photo-1519733833087-3b1ceb8d56c5",
            name: "Thais Pholano",
            testemony: "it's different from the usual coffee",
        },
        {
            name: "Sitiru Tuxiora",
            testemony: "Never regret buying this coffee",
            img: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5",
        }
    ]
    let button = "p2 rounded-full w-2 h-2 cursor-pointer"
    return (
        <section className={cn("w-[62vw] flex flex-col justify-between items-start xl:ml-[-30rem] right-0")}>
            <div className={cn("mt-[-5rem] lg:mt-0 flex gap-6 justify-center xl:justify-between items-start w-full flex-wrap lg:flex-nowrap")}>
                {selection.map((testemony, index) => {
                    return (
                        <div key={index} className={cn("w-[16.5rem] flex flex-col h-[17.5rem]")}>
                            <Image src={testemony.img} alt={testemony.name} width={203} height={280} className={cn("w-[12.7rem] flex flex-col h-[17.5rem] outline outline-brown-lighter/60 outline-[6px]")} />
                            <div className={cn("relative bg-brown-light px-5 py-2 w-[14rem] h-[5.4rem] rounded-lg left-8 bottom-28 outline outline-brown-lighter/60 outline-[6px]")}>
                                <h3 className={cn("text-lg font-medium")}>{testemony.name}</h3>
                                <p className={cn("text-sm")}>{testemony.testemony}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={cn("flex w-full items-center justify-center gap-3 mt-6")}>
                <button onClick={() => setCurrent(0)} className={cn(button, current === 0 ? "bg-primary" : "bg-accents-2")}></button>
                <button onClick={() => setCurrent(passo)} className={cn(button, current === passo ? "bg-primary" : "bg-accents-2")}></button>
                <button onClick={() => setCurrent(passo * 2)} className={cn(button, current === passo * 2 ? "bg-primary" : "bg-accents-2")}></button>
            </div>
        </section>
    )
}