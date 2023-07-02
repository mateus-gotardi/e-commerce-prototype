import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { sticker } from "./commonStyle";
import { StarFilled } from "./svgs";

export default function ProductCard(props: {
    product: { imageURL: string, name: string, temperature: string, rating: string, price: string }
}) {
    let temperatureTag = "text-base border-2 rounded-md px-3 py-0.5 font-semibold"
    let temperatureTagFalse = temperatureTag + " text-lowprimary border-lowprimary"
    let temperatureTagTrue = temperatureTag + " text-primary border-primary"
    let nameAndPrice = "text-2xl text-secondary font-semibold"
    return (
        <div className={cn("h-[24rem] w-[22rem] bg-glass rounded-[0.8rem] flex flex-col items-center justify-between px-5 py-6 relative top-[-19.5rem] shadow-2xl outline outline-glass/60 outline-[6px]")}>
            <div className={cn("w-[19rem] h-[19rem] bg-primary overflow-hidden rounded-[0.8rem]")}>
                <Image src={props.product.imageURL} alt={props.product.name}
                    width={350} height={350} className={cn("rounded-[0.8rem] aspect-auto object-fill h-full")} />
                <span className={cn(sticker, "flex items-center gap-1 justify-center text-sm font-semibold outline-[4px] px-3 py-1 top-9 left-10")}>4.8 <StarFilled size='14' /></span>
            </div>

            <div className={cn("flex w-full h-fit items-center justify-around px-3 flex-col gap-4 py-4")}>

                <div className={cn("flex w-full items-center justify-between px-3")}>
                    <h1 className={cn(nameAndPrice)}>{props.product.name}</h1>
                    <h1 className={cn(nameAndPrice)}>{props.product.price}</h1>
                </div>
                <div className={cn("flex items-start justify-between w-full px-3")}>
                    <div className={cn("w-full flex items-center justify-start gap-2")}>
                        <span className={cn(props.product.temperature.toLowerCase() === "hot" ? temperatureTagTrue : temperatureTagFalse)}>Hot</span>
                        <span className={cn(props.product.temperature.toLowerCase() === "cold" ? temperatureTagTrue : temperatureTagFalse)}>Cold</span>
                    </div>
                    <a className={"cursor-pointer"}>
                        <Image src="/images/cart.png" alt="cart" width={43} height={43} />
                    </a>
                </div>
            </div>
        </div>
    )
}