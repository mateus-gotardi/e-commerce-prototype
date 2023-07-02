import { cn } from "@/utils";
import Image from "next/image";
import { Box, BuyMe, Cappuccino, Header, Popular } from "@/components";

export default function Home() {
  return (
    <main
      className={cn("flex min-h-screen flex-col items-center justify-between")}
    >
      <Header page="home" />
      <Box>
        <BuyMe />
        <Cappuccino />
      </Box>

      <Popular />

    </main>
  );
}
