import React from "react";
import Layout from "@/components/Layout";
import Content from "./Content";

export default function ProductPage({ product }) {
  return (
    <Layout title="product">
      <Content product={product} />
    </Layout>
  );
}
