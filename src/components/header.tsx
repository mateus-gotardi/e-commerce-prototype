"use client";
import React from "react";
import { cn } from "@/utils";
import { Burger, IconCart, Logo, Lupa, Cross } from "./svgs";
import { AppDispatch, UseAppSelector } from "@/redux/store";
import Cart from "./cart";
import { useDispatch } from "react-redux";
import { changeValue } from "@/redux/features/search";
import { useRouter } from 'next/navigation';
import { flexRow } from "@/commonStyle";

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [burger, setBurger] = React.useState(false);
    const linkStyle = cn(flexRow("center", "center"), "text-base text-center w-fit text-secondary p-2 cursor-pointer gap-0.5 hover:text-primary transition-all duration-300");
    const [cart, setCart] = React.useState(false);
    const cartItems = UseAppSelector(state => state.cartReducer.value.items);
    const search = UseAppSelector(state => state.searchReducer.value.search);
    return (
        <header
            className={cn(flexRow("c", "b"),
                "lg:absolute lg:bg-transparent bg-accents-2 top-0 w-full h-fit py-4 z-50 px-5 lg:px-20"
            )}
        >
            <div className={cn("flex")}>
                <button className={cn("lg:hidden px-4")} onClick={() => setBurger(!burger)}>
                    {burger ? <Cross size={20} /> : <Burger size={20} />}
                </button>
                <a href="/">
                    <Logo />
                </a>
            </div>

            <nav className={cn("flex-col lg:flex-row gap-7 lg:flex lg:bg-transparent bg-accents-2 rounded-lg p-4 lg:p-0 absolute lg:static top-16", burger ? "flex" : "hidden")}>
                <div className={cn(flexRow("c", "c"), "lg:hidden gap-2.5 bg-glass rounded-full px-3 py-2 shadow-lg")}>
                    <Lupa />
                    <input className={cn("bg-glass w-46 ml-2 text-sm placeholder-gray-400 border-none focus:outline-none")}
                        type="text z-10" placeholder="Cappuccino">
                    </input>
                </div>
                <a className={cn(linkStyle)} href="/#about">
                    About Us
                </a>
                <a className={cn(linkStyle)} href="/products">
                    Our Product
                </a>
                <a className={cn(linkStyle)} href="/#delivery">
                    Delivery
                </a>
            </nav>
            <div className={cn(flexRow("c", "e"), "gap-5")}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    router.replace("/products")
                }} className={cn("lg:flex hidden items-center justify-center gap-2.5 bg-glass rounded-full px-3 py-2 shadow-lg")}>
                    <Lupa />
                    <input className={cn("bg-glass w-46 ml-2 text-sm placeholder-gray-400 border-none focus:outline-none")}
                        type="text z-10" placeholder="Cappuccino" onChange={(e) => { dispatch(changeValue({ search: e.target.value })) }}
                        value={search}>
                    </input>
                </form>
                <button onClick={() => setCart(!cart)} className={cn("cursor-pointer")}>
                    <IconCart color={cartItems.length > 0 ? "#FF912B" : "#7E7D7A"} />
                </button>
            </div>
            {cart && <Cart close={() => setCart(false)} />}

        </header>
    );
}
