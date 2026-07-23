import React from "react";
import PostPage from "@/screens/Post";
import { getPostContent } from "@/lib/posts";

export default async function Post({ params }) {
  const slug = params.slug;
  const { contentHtml, ...frontmatter } = await getPostContent(slug);

  return <PostPage frontmatter={frontmatter} contentHtml={contentHtml} />;
}
