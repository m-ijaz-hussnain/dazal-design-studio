import React from "react";
import { products } from "@/mocks/products";
import ProductPage from "@/screens/Product";

export async function getProduct(title) {
  const product = products.find((p) => p.title === title);
  return product;
}

export default async function Product({ params }) {
  const product = await getProduct(params.product);

  return <ProductPage product={product} />;
}
