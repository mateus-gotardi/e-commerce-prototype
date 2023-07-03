import React from "react";
import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";
import { UseAppSelector } from "@/redux/store";

export default function Special() {
    const allProducts = UseAppSelector(state => state.productsReducer.value.products);
    const products = allProducts.slice(0, -3);
    return (
        <div className="flex flex-col items-start justify-center w-[98vw] gap-8 mb-28" id="products">
            <h2 className={cn(subtitle, "ml-20")}>Special menu <span className={cn(underlined)}>for you</span></h2>
            <div className="w-full flex justify-center items-start gap-10 flex-wrap">
                {products.map((product, index) => {
                    return <ProductCard key={index} product={product} type='special' />
                })}
            </div>


        </div>
    )
}