import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";

export default function Newsletter() {
    return(
        <section className={cn("w-screen px-5 md:px-20 mb-20")}>
            <div className={cn("w-full h-[24.5rem] rounded-[2rem] bg-newsletter bg-cover bg-bottom flex items-center justify-center flex-col")}>
                <h1 className={cn("font-semibold text-center text-3xl mb-5 text-glass px-10 md:px-0")}>Subscribe to get 50% discount price</h1>
                <div className={cn("flex items-center justify-between md:gap-2.5 bg-glass rounded-full px-3 p-1 shadow-lg w-fit md:w-[29rem]")}>
                    <input type='email' placeholder="Email Address" className={cn("bg-glass text-sm w-[8rem] md:w-30 md:w-46 ml-3 md:text-base placeholder-gray-400 border-none focus:outline-none")}></input>
                    <button className={cn("bg-secondary text-glass rounded-full py-1 md:py-3 px-3 md:px-7 md:text-sm text-xs")}>Order Now</button>
                </div>
            </div>
        </section>
    )
}