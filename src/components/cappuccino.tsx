import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { StarFilled } from "./svgs";
import { sticker } from "./commonStyle";

export default function Cappuccino() {
    let bigSticker = sticker + "outline-[6px] py-1.5"
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
                <span className={cn(bigSticker, "top-14 left-0 px-12 text-base")}>
                    Cappuccino
                </span>
                <span className={cn(bigSticker, "top-28 right-0 font-bold flex items-center gap-1 justify-center px-7 text-base")}>
                    4.8 <StarFilled size='22'/>
                </span>
                <span className={cn(bigSticker, "bottom-20 left-10 px-8 text-base")}>
                    18K
                </span>
            </div>
        </div>
        )
}
