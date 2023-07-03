import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { shytext, subsubtitle, subtitle, underlined } from "./commonStyle";

export default function Newsletter() {
    return(
        <section className={cn("w-screen px-20 mb-20")}>
            <div className={cn("w-full h-[24.5rem] rounded-[2rem] bg-newsletter bg-cover bg-bottom flex items-center justify-center flex-col")}>
                <h1 className={cn("font-semibold text-3xl mb-5 text-glass")}>Subscribe to get 50% discount price</h1>
                <div className={cn("flex items-center justify-between gap-2.5 bg-glass rounded-full px-3 p-1 shadow-lg w-[29rem]")}>
                    <input placeholder="Email Address" className={cn("bg-glass w-full w-46 ml-3 text-base placeholder-gray-400 border-none focus:outline-none")}></input>
                    <button className={cn("bg-secondary text-glass rounded-full py-3 px-7 text-sm")}>Order Now</button>
                </div>
            </div>
        </section>
    )
}