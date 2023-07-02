import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";

export default function Popular() {
    const products = [{
        imageURL: "/images/latte.png",
        name: 'Vanilla Latte',
        temperature: 'Hot',
        rating: '4.9',
        price: '21 K'
    }, {
        imageURL: "/images/espresso.png",
        name: 'Espresso',
        temperature: '',
        rating: '4.8',
        price: '12 K'
    },
    {
        imageURL: "/images/hazelnutlatte.png",
        name: 'Hazelnut Latte',
        temperature: '',
        rating: '4.8',
        price: '23 K'
    }
    ]
    return (
        <div className={cn("w-full flex items-center justify-center mb-[-6rem]")}>
            <div className={cn("w-fit")}>
                <h2 className={cn("relative top-[-18rem] mb-5 ml-12", subtitle)}>Popular <span className={cn(underlined)}>Now</span></h2>
                <div className={cn("bg-accents h-28 w-[95vw] rounded-t-[3rem] relative top-[-6rem] left-[4px]")}></div>
                <div className={cn("bg-accents h-32 w-[94vw] rounded-t-[4rem] rotate-[4deg] origin-bottom-right relative top-[-11rem]")}>
                </div>
                <div className={cn("bg-accents h-52 w-[95vw] rounded-b-[4rem] relative top-[-14rem] left-[4px] p-10 flex items-start justify-around")}>
                    {products.map((product, index) => {
                        return <ProductCard key={index} product={product} type='popular' />
                    })}

                </div>
            </div>
        </div>
    )
}