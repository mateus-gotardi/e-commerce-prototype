import React from "react";
import { cn } from "@/utils";
import { IconCart, Logo, Lupa } from "./svgs";
export default function Header(props: { page?: string }) {
    let linkStyle = "text-base text-center w-fit text-secondary p-2 cursor-pointer flex flex-row items-center gap-0.5 hover:text-primary transition-all duration-300";
    return (
        <header
            className={cn(
                "absolute top-0 flex flex-row justify-between w-full h-fit items-center py-4 z-50 px-20"
            )}
        >
            <a className={cn("cursor-pointer")}>
                <Logo />
            </a>
            <nav className={cn("flex flex-row gap-7")}>
                <a className={props.page === 'about' ? cn(linkStyle, 'font-semibold') : cn(linkStyle)} href="#about">
                    About Us
                </a>
                <a className={props.page === 'product' ? cn(linkStyle, 'font-semibold') : cn(linkStyle)} href="#products">
                    Our Product
                </a>
                <a className={props.page === 'delivery' ? cn(linkStyle, 'font-semibold') : cn(linkStyle)} href="#delivery">
                    Delivery
                </a>
            </nav>
            <div className={cn("flex items-center justify-end gap-5")}>
                <div className={cn("flex items-center justify-center gap-2.5 bg-glass rounded-full px-3 py-2 shadow-lg")}>
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
