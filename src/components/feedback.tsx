import React from "react";
import { cn } from "@/utils";
import { flexCol, shytext, subtitle } from "../commonStyle";
import Carousel from "./carousel";

export default function Feedback() {
    return (
        <section className={cn("w-screen mb-28 lg:flex-row", flexCol("c", "b"))}>
            <div className={cn(flexCol("c", "c"), "w-screen lg:w-[65vw] h-[30rem] rounded-[2rem] bg-hero-pattern lg:pr-36 lg:pl-20 lg:items-start lg:relative z-0")}>
                <h2 className={cn(subtitle, "mb-6")}>What they say about us</h2>
                <h3 className={cn(shytext)}>We always provide the best service <br /> and always maintain the quality of<br />coffee</h3>
            </div>
            <Carousel />
        </section>
    )
}