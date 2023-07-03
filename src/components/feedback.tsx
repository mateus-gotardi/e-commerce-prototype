import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";
import Carousel from "./carousel";

export default function Feedback() {
    return (
        <section className={cn("w-screen flex justify-between items-center mb-28")}>
            <div className={cn("w-[65vw] h-[30rem] rounded-2xl bg-hero-pattern flex items-start pr-36 pl-20 justify-center flex-col")}>
                <h2 className={cn(subtitle, "mb-6")}>What they say about us</h2>
                <h3 className={cn(shytext, "pr-32")}>We always provide the best service and always maintain the quality of coffee</h3>
            </div>
            <Carousel />
        </section>
    )
}