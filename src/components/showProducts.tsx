import { Product } from "@/redux/features/cartReducer";
import ProductCard from "./productCard";

export default function ShowProducts({ products }: { products: Product[] }) {
    return (
        <div className="w-full flex justify-center items-start gap-10 flex-wrap">
            {products.map((product, index) => {
                return <ProductCard key={index} product={product} type='special' />
            })}
        </div>
    )
}