import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Stack from "./Stack";
import Process from "screens/Projects/Process";
import Testimonials from "screens/Projects/Testimonials";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import CTA from "@/components/CTA";

export default function HomePage({ projects = [] }) {
  return (
    <Layout>
      <Hero projects={projects} />
      <Services />
      <Process />
      <Stack />
      <Introduction />      
      <Testimonials />
      <CTA />
    </Layout>
  );
}