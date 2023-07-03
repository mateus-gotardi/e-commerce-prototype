import { cn } from "@/utils";
import { Box, BuyMe, Cappuccino, Header, Popular, Delivery, About, Special, Feedback } from "@/components";

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
      <About />
      <Special />
      <Feedback />
    </main>
  );
}
