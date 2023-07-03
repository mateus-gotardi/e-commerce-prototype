"use client";
import React from "react";
import { cn } from "@/utils";
import { Burger, IconCart, Logo, Lupa, Cross } from "./svgs";
export default function Header() {
    const [burger, setBurger] = React.useState(false);
    let linkStyle = "text-base text-center w-fit text-secondary p-2 cursor-pointer flex flex-row items-center gap-0.5 hover:text-primary transition-all duration-300";
    return (
        <header
            className={cn(
                "absolute top-0 flex flex-row justify-between w-full h-fit items-center py-4 z-50 px-5 lg:px-20"
            )}
        >
            <div className={cn("flex")}>
                <button className={cn("lg:hidden px-4")} onClick={() => setBurger(!burger)}>
                    {burger ? <Cross /> : <Burger />}
                </button>
                <Logo />
            </div>

            <nav className={cn("flex-col lg:flex-row gap-7 lg:flex lg:bg-transparent bg-accents-2 rounded-lg p-4 lg:p-0 absolute lg:static top-16", burger ? "flex" : "hidden")}>
                <div className={cn("flex lg:hidden items-center justify-center gap-2.5 bg-glass rounded-full px-3 py-2 shadow-lg")}>
                    <Lupa />
                    <input className={cn("bg-glass w-46 ml-2 text-sm placeholder-gray-400 border-none focus:outline-none")}
                        type="text z-10" placeholder="Cappuccino">
                    </input>
                </div>
                <a className={cn(linkStyle)} href="#about">
                    About Us
                </a>
                <a className={cn(linkStyle)} href="#products">
                    Our Product
                </a>
                <a className={cn(linkStyle)} href="#delivery">
                    Delivery
                </a>
            </nav>
            <div className={cn("flex items-center justify-end gap-5")}>
                <div className={cn("lg:flex hidden items-center justify-center gap-2.5 bg-glass rounded-full px-3 py-2 shadow-lg")}>
                    <Lupa />
                    <input className={cn("bg-glass w-46 ml-2 text-sm placeholder-gray-400 border-none focus:outline-none")}
                        type="text z-10" placeholder="Cappuccino">
                    </input>
                </div>
                <a className={cn("cursor-pointer")}>
                    <IconCart />
                </a>
            </div>

        </header>
    );
}
