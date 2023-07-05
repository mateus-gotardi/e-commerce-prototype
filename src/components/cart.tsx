import { Product, add, remove, removeAll, removeItem } from "@/redux/features/cartReducer";
import { useDispatch } from "react-redux";
import { AppDispatch, UseAppSelector } from "@/redux/store";
import Image from "next/image";
import { cn } from "@/utils";
import { subtitleSM, subtitle, underlined, textNormal, flexCol, flexRow } from "../commonStyle";
import { Cross } from "./svgs";

export default function Cart({ close }: { close: () => void }) {
    const cartItems = UseAppSelector(state => state.cartReducer.value.items);
    const dispatch = useDispatch<AppDispatch>();
    const quantityBtn = "flex w-fit justify-between items-center bg-accents-2 px-2 py-1 rounded-2xl text-secondary text-lg font-semibold"
    const getPrice = (price: string, quantity: number) => {
        const numero = parseInt(price.replace(/\D/g, ""));
        return numero * quantity;
    }
    const getTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += getPrice(item.price, item.quantity);
        })
        return total;
    }
    return (
        <div className={cn("absolute z-50 top-20 sm:left-[5vw] left-2 bg-accents md:px-10 px-3 md:pb-10 pt-2 pb-7 w-[90vw] rounded-2xl shadow-2xl")}>
            <div className={cn("flex justify-end items-start")}>
                <button onClick={close} className={cn("p-4 md:p-3")}><Cross size={25} /></button>
            </div>
            <div className={cn("md:flex-row md:mb-0 mb-3", flexCol("c", "b"))}>
                <h1 className={cn(subtitle, "mb-5 sm:text-left text-center")}>Your shopping <span className={cn(underlined)}>cart</span></h1>
                {cartItems.length > 0 &&
                    <button onClick={() => dispatch(removeAll())} className={cn("md:text-lg text-sm text-primary")}>Remove all</button>
                }
            </div>
            <div className={cn("flex flex-col gap-3")}>
                {cartItems.map((item, key) => {
                    return (
                        <div key={key} className={cn("md:flex-row w-full bg-accents-2 px-10 py-2 rounded-2xl", flexCol("c", "b"))}>
                                <Image src={item.imageURL} alt={item.name} width={150} height={150} className={cn("rounded-lg")}/>
                            <p className={cn(textNormal, "min-w-fit md:min-w-[12rem] w-fit")}>{item.name}</p>
                            <p className={cn(textNormal, "min-w-fit md:min-w-[5rem] w-fit")}>{`${getPrice(item.price, item.quantity)} K`}</p>
                            <div className={cn(flexRow("c", "b"), "min-w-36 w-fit gap-3 bg-accents px-2 py-2 rounded-2xl")}>
                                <button onClick={() => dispatch(remove(item))} className={cn(quantityBtn)}>-</button>
                                <p className={cn(textNormal)}>{item.quantity}</p>
                                <button onClick={() => dispatch(add(item))} className={cn(quantityBtn)}>+</button>
                            </div>
                            <button onClick={() => dispatch(removeItem(item))} className={cn("md:text-lg text-sm text-primary")}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div className={cn("flex justify-between items-center mt-10")}>
                {cartItems.length === 0 ? <h2 className={cn(subtitleSM, "sm:text-left text-center w-full")}>Your cart is empty</h2> : <>
                    <h2 className={cn(subtitleSM, "text-base sm:text-xl")}>Total: <span className={cn(underlined)}>{`${getTotal()} K`}</span></h2>
                    <a href="#" onClick={close} className={cn("bg-primary text-secondary sm:px-10 px-3 py-2 rounded-2xl text-lg font-semibold")}>Checkout</a>
                </>
                }
            </div>
        </div>
    )
}