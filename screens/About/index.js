import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import Stack from "../Home/Stack";
import Section from "./Section";


export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Section />
      <Stack />
      <CTA />
    </Layout>
  );
}
