"use client";
import { cn, getProducts } from "@/utils";
import { Box, BuyMe, Cappuccino, Header, Popular, Delivery, About, Special, Feedback, Newsletter } from "@/components";
import { register } from "@/redux/features/productsReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "@/redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(register(getProducts()));
  }, []);
  return (
    <main
      className={cn("flex min-h-screen flex-col items-center justify-between overflow-x-hidden")}
    >
      <Header />
      <Box>
        <BuyMe />
        <Cappuccino />
      </Box>
      <Popular />
      <Delivery />
      <About />
      <Special />
      <Feedback />
      <Newsletter />
    </main>
  );
}
