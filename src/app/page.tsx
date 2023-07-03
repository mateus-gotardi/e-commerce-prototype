import { cn } from "@/utils";
import { Box, BuyMe, Cappuccino, Header, Popular, Delivery, About, Special, Feedback, Newsletter } from "@/components";

export default function Home() {
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
