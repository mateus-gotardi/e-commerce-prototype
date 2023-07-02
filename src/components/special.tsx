import React from "react";
import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";

export default function Special() {
    const products = [{
        imageURL: "/images/sandwich.jpg",
        name: 'Sandwich',
        description: 'Bread with meat and vegetables',
        rating: '4.8',
        price: '12 K'
    }, {
        imageURL: "/images/hot.png",
        name: 'Hot Milk',
        description: 'Hot Milk with less sugar',
        rating: '4.7',
        price: '13 K'
    },
    {
        imageURL: "/images/ice.png",
        name: 'Coffee Ice Cream',
        description: 'special coffee with baunilha ice cream',
        rating: '4.6',
        price: '14 K'
    },
    {
        imageURL: "/images/cappo.png",
        name: 'Cappucino',
        description: 'Hot Cappucino',
        rating: '4.5',
        price: '14 K'
    },
    {
        imageURL: "/images/mocca.png",
        name: 'Moccacinno',
        description: 'Hot Moccacino ',
        rating: '4.4',
        price: '14 K'
    },
    {
        imageURL: "/images/waffles.png",
        name: 'Waffle Ice Crem',
        description: 'Wafle with Ice cream',
        rating: '4.7',
        price: '14 K'
    },
    ]
    return (
        <div className="flex flex-col items-start justify-center w-[95vw]">
            <h2 className={cn(subtitle, "mb-4 ml-12")}>Special menu <span className={cn(underlined)}>for you</span></h2>
            <div className="w-full flex flex-wrap justify-center items-start">
                {products.map((product, index) => {
                    return <ProductCard key={index} product={product} type='special' />
                })}
            </div>


        </div>
    )
}