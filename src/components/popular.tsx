import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";

export default function Popular() {
    const product = {
        imageURL: "/images/latte.png",
        name: 'Vanilla Latte',
        temperature: 'Hot',
        rating: '4.5',
        price: '21 K'
    }
    return (
        <div className={cn("")}>
            <h2 className={cn("relative top-[-18rem] ml-9 mb-5", subtitle)}>Popular <span className={cn(underlined)}>Now</span></h2>
            <div className={cn("bg-accents h-28 w-[80vw] rounded-t-[3rem] relative top-[-7rem] left-[2px]")}></div>
            <div className={cn("bg-accents h-28 w-[80vw] rounded-t-[3rem] rotate-[4deg] origin-bottom-right relative top-[-13rem]")}>
            </div>
            <div className={cn("bg-accents h-32 w-[80vw] rounded-b-[3rem] relative top-[-17rem] left-[2px] p-10")}>
                <ProductCard product={product}/>
            </div>
        </div>
    )
}