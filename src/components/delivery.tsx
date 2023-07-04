import React from 'react';
import { cn } from '@/utils';
import { subtitle, underlined } from './commonStyle';
import Image from 'next/image';

export default function Delivery() {
    let stepClass = "flex flex-col items-center justify-center"
    let text1 = "text-2xl font-semibold text-secondary mb-3 lg:text-left text-center"
    let text2 = "text-lg text-light text-secondary lg:text-left text-center"
    return (
        <div className={cn("flex items-start justify-start w-screen lg:w-[95vw] flex-col mb-32 lg:mb-40 p-12")} id="delivery">
            <h2 className={cn(subtitle, 'lg:ml-12 w-full mb-14 lg:text-left text-center')}>How to use delivery <span className={cn(underlined)}>service</span></h2>
            <div className={cn("flex w-full items-center justify-around flex-wrap gap-4")}>
                <div className={cn(stepClass)}>
                    <Image src="/images/hand-coffee.png" alt="latte" width={159} height={159} />
                    <h2 className={cn(text1)}>Choose your coffee</h2>
                    <h3 className={cn(text2)}>There are 20+ coffees for you</h3>
                </div>
                <div className={cn(stepClass)}>
                    <Image src="/images/food-truck.png" alt="latte" width={159} height={159} />
                    <h2 className={cn(text1)}>We delivery it to you</h2>
                    <h3 className={cn(text2)}>Choose delivery service</h3>
                </div>
                <div className={cn(stepClass)}>
                    <Image src="/images/coffee-cup.png" alt="latte" width={159} height={159} />
                    <h2 className={cn(text1)}>Enjoy your coffee</h2>
                    <h3 className={cn(text2)}>Receive your coffee at home</h3>
                </div>
            </div>
        </div>
    )
}