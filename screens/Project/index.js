import React from "react";
import Layout from "@/components/Layout";
import Content from "./Content";
import Introduction from "./Introduction";
import Features from "./Features";

export default function ProjectPage({ project }) {
  return (
    <Layout title="project">
      <Content project={project} />
      <Introduction project={project} />
      <Features project={project} />
    </Layout>
  );
}
