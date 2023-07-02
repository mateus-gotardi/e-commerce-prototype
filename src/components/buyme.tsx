import React from "react";
import { cn } from "@/utils";
import Image from "next/image";

export default function BuyMe() {
    let title = "text-5xl text-left w-fit font-semibold text-secondary mb-5"

    return(
        <div className={cn("w-1/2 z-10")}>
          <h1 className={cn(title)}>
            Enjoy your <span className={cn('text-primary')}>coffee</span>
          </h1>
          <h1 className={cn(title)}>before your activity</h1>
          <h2 className={cn("text-lg text-light my-10")}>
            Boost your productivity and build your<br />mood with a glass of coffee in the morning
          </h2>
          <div className={cn("flex items-center justify-start gap-8")}>
            <a className={cn("bg-secondary cursor-pointer border-none text-sm flex items-center justify-center gap-2 text-glass font-semibold shadow-sm rounded-full px-8 py-3")}>
              Order Now <Image src="/images/cart.png" alt="cart" width={25} height={25} />
            </a>
            <a className={cn("text-primary cursor-pointer font-bold text-xs p-4")}>
              More menu
            </a>
          </div>

        </div>
    )
}