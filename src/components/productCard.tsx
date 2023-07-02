import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { sticker } from "./commonStyle";
import { StarFilled } from "./svgs";

export default function ProductCard(props: {
    product: { imageURL: string, name: string, temperature: string, rating: string, price: string }
}) {
    let temperatureTag = "text-xs border-2 rounded-md px-3 py-0.5 font-semibold"
    let temperatureTagFalse = temperatureTag + " text-lowprimary border-lowprimary"
    let temperatureTagTrue = temperatureTag + " text-primary border-primary"
    return (
        <div className={cn("h-[18rem] w-[16rem] bg-glass rounded-lg flex flex-col items-center justify-between p-4 relative top-[-16rem] shadow-lg outline outline-glass/50 outline-[3px]")}>
            <Image src={props.product.imageURL} alt={props.product.name}
                width={300} height={300} object-fit="cover" className={cn("rounded-lg")} />
            <span className={cn(sticker, "flex items-center gap-1 justify-center px-4 text-xs outline-[3px] py-0.5 top-6 left-6")}>4.8 <StarFilled size='12' /></span>
            <div className={cn("flex w-full items-center justify-between px-3")}>
                <h1 className={cn("text-md font-semibold")}>{props.product.name}</h1>
                <h1 className={cn("text-md font-semibold")}>{props.product.price}</h1>
            </div>
            <div className={cn("flex items-start justify-between w-full px-3")}>
                <div className={cn("flex items-center justify-start gap-2")}>
                    <span className={cn(props.product.temperature.toLowerCase() === "hot" ? temperatureTagTrue : temperatureTagFalse)}>Hot</span>
                    <span className={cn(props.product.temperature.toLowerCase() === "cold" ? temperatureTagTrue : temperatureTagFalse)}>Cold</span>
                </div>
                <a className={"cursor-pointer"}>
                    <Image src="/images/cart.png" alt="cart" width={30} height={30} />
                </a>
            </div>
        </div>
    )
}