import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { flexCol } from "@/commonStyle";

export default function Box(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className={cn(flexCol("c", "s"),"bg-accents-2 h-fit pb-10 lg:h-[140vh] flex-wrap w-screen lg:pt-0")}>
    <div
      className={cn(flexCol("c", "s"),
        "h-fit lg:h-screen w-screen inset-0 lg:justify-center gap-10 lg:flex-row"
      )}
    >
      <Image
        className={cn("z-0 absolute md:top-[-4rem] md:right-[-8rem] lg:top-[-1.8rem] lg:right-0 hidden md:block")}
        src="/images/coffeegrains.png"
        alt="coffee grains"
        width={450}
        height={450}
      />
      <Image
        className={cn("z-0 absolute md:bottom-[-18rem] md:left-[-18rem] lg:bottom-[-18rem] lg:left-[-3rem] hidden md:block")}
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
