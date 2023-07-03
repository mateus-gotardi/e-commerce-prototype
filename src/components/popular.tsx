import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";
import { UseAppSelector } from "@/redux/store";

export default function Popular() {
    const allProducts = UseAppSelector(state => state.productsReducer.value.products);
    const products = allProducts.slice(-3);
    console.log(products);
    return (
        <div className={cn("w-full flex items-center justify-center lg:mb-[-6rem]")}>
            <div className={cn("w-screen h-fit")}>
                <h2 className={cn("relative top-[-10rem] lg:top-[-18rem] lg:mb-5 ml-12", subtitle)}>Popular <span className={cn(underlined)}>Now</span></h2>
                <div className={cn("bg-accents h-28 w-[95vw] rounded-t-[3rem] relative top-[-6rem] left-[4px] hidden lg:block")}></div>
                <div className={cn("bg-accents h-32 w-[94vw] rounded-t-[4rem] rotate-[4deg] origin-bottom-right relative top-[-11rem] hidden lg:block")}>
                </div>
                <div className={cn("lg:bg-accents h-fit lg:h-52 w-[95vw] rounded-b-[4rem] relative top-[-10rem] lg:top-[-14rem] left-[4px] p-10 flex items-start justify-around flex-wrap lg:flex-nowrap gap-7")}>
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} type='popular' />
                    })}
                </div>
            </div>
        </div>
    )
}