import React from "react";
import { cn } from "@/utils";
import Image from "next/image";

export default function Box(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <div className={cn("flex items-center justify-start flex-col bg-accents-2 h-[140vh]")}>
    <div
      className={cn(
        "h-screen w-screen inset-0 flex justify-center gap-10 items-center p-5"
      )}
    >
      <Image
        className={cn("z-0 absolute top-[-1.8rem] right-0 ")}
        src="/images/coffeegrains.png"
        alt="coffee grains"
        width={450}
        height={450}
      />
      <Image
        className={cn("z-0 absolute bottom-[-18rem] left-5 ")}
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
