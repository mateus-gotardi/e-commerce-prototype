import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import productsJson from "./data/products.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProducts() {
  return productsJson;
}