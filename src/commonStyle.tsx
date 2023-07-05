import { cn } from "./utils";

export const subtitle = "font-semibold text-3xl text-secondary";
export const subtitleSM = "font-semibold md:text-2xl text-xl text-secondary";
export const textNormal = "md:text-lg text-sm text-secondary text-center"
export const shytext = "text-light text-lg w-3/4 mb-5";
export const underlined = "underline decoration-primary underline-offset-8 decoration-4"
export const sticker = "bg-glass text-secondary shadow-xl outline outline-glass/60 rounded-full font-semibold cursor-default";
export const title = "text-3xl lg:text-5xl text-left w-full font-semibold text-secondary mb-5 lg:text-left text-center"
export const bigSticker = sticker + "outline-[6px] py-1.5 absolute"
export const flex = (i?: string, j?: string) => {
    let items = "start"
    let justify = "start"
    switch (i) {
        case "c":
            items = "center"
            break;
        case "e":
            items = "end"
            break;
        case "s":
            items = "start"
    }
    switch (j) {
        case "c":
            justify = "center"
            break;
        case "b":
            justify = "between"
            break;
        case "a":
            justify = "around"
            break;
        case "ev":
            justify = "evenly"
            break;
        case "e":
            justify = "end"
            break;
        case "s":
            justify = "start"
    }
    return (`flex items-${items} justify-${justify}`)
}
export const flexCol = (items: string, justify: string) => { return (cn(flex(items, justify), "flex-col")) }
export const flexRow = (items: string, justify: string) => { return (cn(flex(items, justify), "flex-row")) }