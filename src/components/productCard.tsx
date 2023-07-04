import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { sticker } from "./commonStyle";
import { StarFilled } from "./svgs";
import { CartItem, Product, add } from "@/redux/features/cartReducer";
import { useDispatch } from "react-redux";
import { AppDispatch, UseAppSelector } from "@/redux/store";

export default function ProductCard(props: {
    type: "popular" | "special",
    product: { imageURL: string, name: string, quantity?: number, temperature?: string, description?: string, rating: string, price: string }
}) {
    const dispatch = useDispatch<AppDispatch>();
    const addToCart = (product: Product) => {
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
    const product = {
        imageURL: props.product.imageURL,
        name: props.product.name,
        description: props.product.description,
        rating: props.product.rating,
        price: props.product.price,
        temperature: props.product.temperature,
        quantity: props.product.quantity
    } as Product
    const [temperature, setTemperature] = React.useState<string>(product.temperature || "")

    let temperatureTag = "text-base border-2 rounded-md px-3 py-0.5 font-semibold"
    let temperatureTagFalse = temperatureTag + " text-lowprimary border-lowprimary"
    let temperatureTagTrue = temperatureTag + " text-primary border-primary"
    let nameAndPrice = "text-2xl text-secondary"
    let imageContainer = "w-[19rem] h-[19rem] bg-primary overflow-hidden rounded-[0.8rem]"
    let card = "bg-glass rounded-[0.8rem] flex flex-col items-center justify-between px-5 py-6 shadow-xl relative"
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
                <span className={cn(sticker, "flex items-center gap-1 justify-center text-sm font-semibold outline-[4px] px-3 py-1 top-9 left-9 absolute")}>4.8 <StarFilled size='14' /></span>
            </div>

            <div className={cn("flex w-full h-fit items-center justify-around px-3 flex-col gap-4 pt-4")}>

                <div className={cn("flex w-full items-center justify-between px-3")}>
                    <h1 className={cn(nameAndPrice, "font-semibold")}>{product.name}</h1>
                    <h1 className={cn(nameAndPrice, "font-bold")}>{product.price}</h1>
                </div>
                <div className={cn("flex items-start justify-between w-full px-3 gap-4")}>
                    <div className={cn("w-full flex items-center justify-start gap-2")}>
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