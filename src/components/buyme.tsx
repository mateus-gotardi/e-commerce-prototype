import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { flexRow, title } from "../commonStyle";

export default function BuyMe() {
  return (
    <div className={cn("w-screen p-16 lg:p-0 lg:w-1/2 z-10")}>
      <h1 className={cn(title)}>
        Enjoy your <span className={cn('text-primary')}>coffee</span>
        <br />before your activity</h1>
      <h2 className={cn("text-lg text-light my-10 lg:text-left text-center")}>
        Boost your productivity and build your<br />mood with a glass of coffee in the morning
      </h2>
      <div className={cn(flexRow("c", "c"), "w-full gap-8 lg:justify-start")}>
        <a href="#products" className={cn(flexRow("c", "c"), "bg-secondary cursor-pointer border-none text-sm gap-2 text-glass font-semibold shadow-sm rounded-full px-8 py-3")}>
          Order Now <Image src="/images/cart.png" alt="cart" width={25} height={25} />
        </a>
        <a href="#about" className={cn("text-primary cursor-pointer font-bold text-xs p-4 text-center")}>
          More menu
        </a>
      </div>
    </div>
  )
}