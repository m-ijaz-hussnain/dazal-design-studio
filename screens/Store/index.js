import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import Features from "./Features";

export default function StorePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
}
