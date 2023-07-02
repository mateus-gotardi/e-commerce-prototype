import { cn } from "@/utils";
import { Box, BuyMe, Cappuccino, Header, Popular, Delivery } from "@/components";

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
      <Delivery />
    </main>
  );
}
