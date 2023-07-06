"use client";
import React, { useEffect } from "react";
import { cn } from "@/utils";
import Image from "next/image";
import testemonys from "@/data/testemonys.json";
import { flexCol, flexRow } from "@/commonStyle";

export default function Carousel() {

    const [current, setCurrent] = React.useState(0);
    const [selection, setSelection] = React.useState([{ img: "", name: "", testemony: "" }]);
    useEffect(() => {
        let largura = window.innerWidth
        let passo = 3
        if (largura < 1080) {
            passo = 2
        } else if (largura < 768) {
            passo = 0
        }
        setSelection(testemonys.slice(current, current + passo))
    }, [current]);
    const button = "p2 rounded-full w-2 h-2 cursor-pointer"
    return (
        <section className={cn("w-[62vw] lg:ml-[-40rem] z-20 pr-10", flexCol("s", "b"))}>
            <div className={cn(flexRow("s", "c"), "mt-[-5rem] lg:mt-0 gap-6 lg:justify-around w-full flex-wrap lg:flex-nowrap")}>
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
                <button onClick={() => setCurrent(3)} className={cn(button, current === 3 ? "bg-primary" : "bg-accents-2")}></button>
                <button onClick={() => setCurrent(6)} className={cn(button, current === 6 ? "bg-primary" : "bg-accents-2")}></button>
            </div>
        </section>
    )
}