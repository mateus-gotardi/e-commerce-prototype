import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";
import Carousel from "./carousel";

export default function Feedback() {
    return (
        <section className={cn("w-screen flex justify-between items-center")}>
            <div className={cn("w-[60vw] h-[30rem] rounded-2xl bg-hero-pattern mb-28 flex items-start px-28 justify-center flex-col")}>
                <h2 className={cn(subtitle, "mb-8")}>What they say about us</h2>
                <h3 className={cn(shytext, "pr-20")}>We always provide the best service and always maintain the quality of coffee</h3>
            </div>
            <Carousel />
        </section>
    )
}