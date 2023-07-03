import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { StarFilled } from "./svgs";
import { sticker } from "./commonStyle";

export default function Cappuccino() {
    let bigSticker = sticker + "outline-[6px] py-1.5 absolute"
    return (
        <div className={cn("w-[26rem] h-[26rem] hidden rounded-full bg-secondary justify-center items-center lg:flex inset-0 z-10")}>
            <Image
                className={cn("absolute")}
                src="/images/draw.svg"
                alt="coffee cup draw"
                width={410}
                height={410}
                priority
            />
            <Image
                className={cn("relative bottom-5")}
                src="/images/coffee.png"
                alt="coffee cup"
                width={350}
                height={350}
                priority
            />
            <div className={cn("absolute w-96 h-96")}>
                <span className={cn(bigSticker, "top-3 left-[-4.5rem] px-14 py-3 text-2xl outline-[6px]")}>
                    Cappuccino
                </span>
                <span className={cn(bigSticker, "top-20 right-[-2.2rem] outline-[9px] font-bold flex items-center gap-1 justify-center px-8 py-3 text-2xl")}>
                    4.8 <StarFilled size='22'/>
                </span>
                <span className={cn(bigSticker, "bottom-4 left-0 px-14 py-3 text-2xl outline-[6px]")}>
                    18K
                </span>
            </div>
        </div>
        )
}
