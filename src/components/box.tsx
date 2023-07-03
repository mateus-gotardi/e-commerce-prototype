import React from "react";
import { cn } from "@/utils";
import Image from "next/image";

export default function Box(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className={cn("flex items-center justify-start flex-col bg-accents-2 h-[140vh] flex-wrap w-screen pt-20 lg:pt-0")}>
    <div
      className={cn(
        "h-screen w-screen inset-0 flex justify-center gap-10 items-center flex-col lg:flex-row"
      )}
    >
      <Image
        className={cn("z-0 absolute top-[-1.8rem] right-0 hidden lg:block")}
        src="/images/coffeegrains.png"
        alt="coffee grains"
        width={450}
        height={450}
      />
      <Image
        className={cn("z-0 absolute bottom-[-18rem] left-[-3rem] hidden lg:block")}
        src="/images/coffeegrains.png"
        alt="coffee grains"
        width={600}
        height={600}
      />
      {props.children}
    </div>
    </div>
  );
}
