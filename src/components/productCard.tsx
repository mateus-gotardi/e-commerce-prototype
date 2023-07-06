import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { flexCol, flexRow, sticker } from "../commonStyle";
import { StarFilled } from "./svgs";
import { CartItem, Product, add } from "@/redux/features/cartReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function ProductCard(props: {
    type: "popular" | "special",
    product: { imageURL: string, name: string, quantity?: number, temperature?: string, description?: string, rating: string, price: string }
}) {
    const dispatch = useDispatch<AppDispatch>();
    function addToCart(product: Product) {
        let prod = {
            imageURL: product.imageURL,
            name: product.name,
            description: product.description,
            rating: product.rating,
            price: product.price,
            temperature: product.temperature,
            quantity: 1
        } as CartItem
        dispatch(add(prod));
    }

    const { product } = props
    const [temperature, setTemperature] = React.useState<string>(product.temperature || "")

    const temperatureTag = "text-base border-2 rounded-md px-3 py-0.5 font-semibold"
    const temperatureTagFalse = temperatureTag + " text-lowprimary border-lowprimary"
    const temperatureTagTrue = temperatureTag + " text-primary border-primary"
    const nameAndPrice = "md:text-2xl text-xl text-secondary"
    const imageContainer = "w-[19rem] h-[19rem] bg-primary overflow-hidden rounded-[0.8rem]"
    const card = cn(flexCol("c", "b"),"bg-glass rounded-[0.8rem] px-5 py-6 shadow-xl relative")
    const changeTemperature = (temp: string) => {
        if (product.temperature === temp) {
            product.temperature = ""
            setTemperature("")
        } else {
            switch (temp) {
                case "hot":
                    product.temperature = "hot"
                    setTemperature("hot")
                    break;
                case "cold":
                    product.temperature = "cold"
                    setTemperature("cold")
                    break;
            }
        }
    }

    return (
        <div className={props.type.toLocaleLowerCase() === "popular" ? cn(card, "h-[24rem] w-[22rem] lg:top-[-19.5rem] outline outline-glass/60 outline-[6px]") : cn(card, 'mb-3 h-[26rem] w-[22rem]')}>
            <div className={cn(imageContainer)}>
                <Image src={product.imageURL} alt={product.name}
                    width={350} height={350} className={cn("rounded-[0.8rem] aspect-auto object-cover h-full w-full")} />
                <span className={cn(sticker,flexRow("c", "c"), "gap-1 text-sm font-semibold outline-[4px] px-3 py-1 top-9 left-9 absolute")}>4.8 <StarFilled size='14' /></span>
            </div>

            <div className={cn(flexCol("c", "a"), "w-full h-fit px-3 gap-4 pt-4")}>

                <div className={cn(flexRow("c", "b"), "w-full px-3")}>
                    <h1 className={cn(nameAndPrice, "font-semibold")}>{product.name}</h1>
                    <h1 className={cn(nameAndPrice, "font-bold")}>{product.price}</h1>
                </div>
                <div className={cn(flexRow("s", "b"), "w-full px-3 gap-4")}>
                    <div className={cn(flexRow("c", "s"), "w-full gap-2")}>
                        {props.type.toLowerCase() === "popular" ? <>
                            <button className={cn(temperature.toLowerCase() === "hot" ? temperatureTagTrue : temperatureTagFalse)} onClick={() => changeTemperature("hot")}>Hot</button>
                            <button className={cn(temperature.toLowerCase() === "cold" ? temperatureTagTrue : temperatureTagFalse)} onClick={() => changeTemperature("cold")}>Cold</button>
                        </> : <>
                            <h3 className={cn("text-light font-semibold text-sm w-3/4 mb-2")}>
                                {product.description}
                            </h3>
                        </>}
                    </div>
                    <button onClick={() => addToCart(product)} className={"cursor-pointer"}>
                        <Image src="/images/cart.png" alt="cart" width={46} height={46} />
                    </button>
                </div>
            </div>
        </div>
    )
}