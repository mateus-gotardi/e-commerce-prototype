import React from "react";
import { cn } from "@/utils";
import { flexCol, subtitle, underlined } from "../commonStyle";
import { UseAppSelector } from "@/redux/store";
import ShowProducts from "./showProducts";

export default function Special() {
    const allProducts = UseAppSelector(state => state.productsReducer.value.products);
    const products = allProducts.slice(0, -3);
    return (
        <div className={cn(flexCol("s", "c"), "w-[98vw] gap-8 mb-28")} id="products">
            <h2 className={cn(subtitle, "lg:ml-20 lg:pl-2 lg:w-fit w-full")}>Special menu <span className={cn(underlined)}>for you</span></h2>
            <ShowProducts products={products} />
        </div>
    )
}