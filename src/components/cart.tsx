import { Product, add, remove, removeAll } from "@/redux/features/cartReducer";
import { useDispatch } from "react-redux";
import { AppDispatch, UseAppSelector } from "@/redux/store";
import Image from "next/image";
import { cn } from "@/utils";

export default function Cart() {
    const cartItems = UseAppSelector(state => state.cartReducer.value.items);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className={cn("fixed z-50 top-10 left-0 bg-accents p-10 w-[90vw]")}>
            <h1>Your shopping cart</h1>
            {cartItems.map((item, key) => {
                return (<div key={key}>
                    <Image src={item.imageURL} alt={item.name} width={30} height={30}/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <div>
                        <button onClick={() => dispatch(remove(item))}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => dispatch(add(item))}>+</button>
                    </div>
                </div>)
            })}
        </div>
    )
}