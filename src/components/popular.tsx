import { cn } from "@/utils";
import { flexRow, subtitle, underlined } from "../commonStyle";
import ProductCard from "./productCard";
import { UseAppSelector } from "@/redux/store";

export default function Popular() {
    const allProducts = UseAppSelector(state => state.productsReducer.value.products);
    const products = allProducts.slice(-3);
    return (
        <div className={cn(flexRow("c", "c"), "w-screen max-w-[1920px] lg:mb-[-6rem] lg:mt-0 mt-12 mb-12")}>
            <div className={cn("max-w-[1920px]")}>
                <h2 className={cn("lg:relative lg:top-[-18rem] lg:mb-5 lg:ml-16 lg:pl-2 w-full text-center lg:text-left", subtitle)}>Popular <span className={cn(underlined)}>Now</span></h2>
                <div className={cn("bg-accents h-28 w-[95vw] max-w-[1920px] rounded-t-[3rem] relative top-[-6rem] left-[4px] hidden lg:block")}></div>
                <div className={cn("bg-accents h-32 w-[94vw] max-w-[1920px] rounded-t-[4rem] rotate-[4deg] origin-bottom-right relative top-[-11rem] hidden lg:block")}>
                </div>
                <div className={cn("lg:bg-accents h-fit lg:h-52 w-[95vw] max-w-[1920px] rounded-b-[4rem] lg:relative top-[-10rem] lg:top-[-14rem] left-[4px] p-10 flex-wrap lg:flex-nowrap gap-7", flexRow("s", "a"))}>
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} type='popular' />
                    })}
                </div>
            </div>
        </div>
    )
}