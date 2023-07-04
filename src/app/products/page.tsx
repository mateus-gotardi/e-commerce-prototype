"use client";
import { Header, ShowProducts } from "@/components";
import { register } from "@/redux/features/productsReducer";
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { cn, getProducts } from "@/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Products() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(register(getProducts()));
    }, []);
    const allProducts = UseAppSelector(state => state.productsReducer.value.products);
    const search = UseAppSelector(state => state.searchReducer.value.search);
    const searchProducts = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <main className={cn("bg-accents-2 min-w-screen min-h-screen py-24")}>
            <Header />
            {search === '' ?
                <ShowProducts products={allProducts} /> :
                <ShowProducts products={searchProducts} />
            }
        </main>
    );
}
