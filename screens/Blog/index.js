import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import Posts from "./Posts";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} />
      <CTA />
    </Layout>
  );
}
