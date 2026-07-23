// productService.js

import { products } from "@/mocks/products";

export function fetchProductByTitle(title) {
  const product = products.find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );

  return product;
}
