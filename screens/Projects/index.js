import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Introduction from "@/components/Introduction";
import Companies from "./Companies";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function ProjectsPage({
  projects,
}) {
  return (
    <Layout>
      <Hero projects={projects} />
      <FAQ />
      <Process />
      <Testimonials />
      <Introduction />
      <Companies />
      <CTA />
    </Layout>
  );
}
