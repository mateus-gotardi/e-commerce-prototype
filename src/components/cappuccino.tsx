import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { StarFilled } from "./svgs";

export default function Cappuccino() {
    let card = "bg-glass outline-[5px] shadow-xl outline outline-glass/60 rounded-full py-1.5 absolute font-semibold text-base";
    return (
        <div className={cn("w-80 h-80 rounded-full bg-secondary justify-center items-center flex inset-0 z-10")}>
            <Image
                className={cn("absolute")}
                src="/images/draw.svg"
                alt="coffee cup draw"
                width={350}
                height={232}
                priority
            />
            <Image
                className={cn("relative bottom-5")}
                src="/images/coffee.png"
                alt="coffee cup"
                width={280}
                height={200}
                priority
            />
            <div className={cn("absolute w-96 h-96")}>
                <span className={cn(card, "top-14 left-0 px-12")}>
                    Cappuccino
                </span>
                <span className={cn(card, "top-28 right-0 font-bold flex items-center gap-1 justify-center px-7")}>
                    4.8 <StarFilled />
                </span>
                <span className={cn(card, "bottom-20 left-10 px-8")}>
                    18K
                </span>
            </div>
        </div>
        )
}
