import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";
import Carousel from "./carousel";

export default function Feedback() {
    return (
        <section className={cn("w-screen flex justify-between items-center mb-28 flex-col lg:flex-row")}>
            <div className={cn("w-screen lg:w-[65vw] h-[30rem] rounded-[2rem] bg-hero-pattern flex items-start lg:pr-36 pl-20 justify-center flex-col")}>
                <h2 className={cn(subtitle, "mb-6")}>What they say about us</h2>
                <h3 className={cn(shytext)}>We always provide the best service<br/>and always maintain the quality of<br/>coffee</h3>
            </div>
            <Carousel />
        </section>
    )
}