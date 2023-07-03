import { cn } from "@/utils";
import { subtitle, underlined } from "./commonStyle";
import ProductCard from "./productCard";

export default function Popular() {
    const products = [{
        imageURL: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
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