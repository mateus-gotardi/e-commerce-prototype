import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";

export default function Carousel() {

    const testemonys = [
        {
            img: "https://images.unsplash.com/photo-1520445740767-c2fc76e6b5a1",
            name: "Naura",
            testemony: "Wow... I am very happy to drink coffee, the taste is good, the service is also good",
        },
        {
            img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
            name: "Yessica Christy",
            testemony: "I like it because I like to drink coffee and this coffee is the best for me, I will definitely buy it again",
        },
        {
            img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
            name: "John",
            testemony: "This is the real taste of coffee, I will definitely buy it again if it feels like this",
        },
        {
            img: "https://images.unsplash.com/photo-1557862921-37829c790f19",
            name: "Garry M",
            testemony: "It's delicious, I want to buy it again, really good quality, affordable prices, and good service",
        },
        {
            img: "https://images.unsplash.com/photo-1548142813-c348350df52b",
            name: "Koko",
            testemony: "The coffee is good, the service is good. This is really a coffee shop. Awesome!",
        },
        {
            img: "https://images.unsplash.com/photo-1567195433112-a890bf087b3a",
            name: "Mely",
            testemony: "I really like the latte that was just launched, I ordered 1 box, it turns out that my family also likes it",
        },
        {
            img: "https://images.unsplash.com/photo-1475552113915-6fcb52652ba2",
            name: "Thais Pholano",
            testemony: "The coffee is really good and makes you addicted, it's different from the usual coffee",
        },
        {
            name: "Sitiru Tuxiora",
            testemony: "Never regret buying this coffee, I will definitely order again",
            img: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5",
        }
    ]
    return (
        <section className={cn("w-screen flex justify-between items-center")}>
            {testemonys.map((testemony, index) => {
                return (
                    <div key={index} className={cn()}>
                        <Image src={testemony.img} alt={testemony.name} width={359} height={497} />
                        <h3 className={cn(subsubtitle, "mt-5")}>{testemony.name}</h3>
                        <p className={cn(shytext, "mt-2")}>{testemony.testemony}</p>
                    </div>
                )
            })}

        </section>
    )
}