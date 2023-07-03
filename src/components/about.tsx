import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { subsubtitle, subtitle, underlined } from "./commonStyle";

export default function About() {
    return (
        <section id="about" className={cn("w-screen h-[30rem] bg-accents-2 flex align-center justify-around mb-28")}>
            <div className={cn("w-1/2 flex items-center justify-center")}>
                <div className={cn("relative top-[-5rem] overflow-hidden rounded-lg outline outline-[7px] outline-glass/60 shadow-2xl")}>
                    <Image src="/images/about-coffee.jpg" alt="coffee cup" width={359} height={497} />
                </div>
            </div>
            <div className={cn("w-1/2 flex flex-col items-start justify-center")}>
                <h2 className={cn(subtitle, "mb-10")}>About <span className={cn(underlined)}>us</span></h2>
                <h3 className={cn(subsubtitle, "mb-5")}>We provide quality coffee,<br />and ready to deliver.</h3>
                <p className={cn("text-light text-lg w-3/4 mb-5")}>We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</p>
                <button className={cn("px-7 py-3 bg-secondary cursor-pointer text-tertiary rounded-full text-xs font-semibold")}>Get your coffee</button>
            </div>
        </section>
    )
}