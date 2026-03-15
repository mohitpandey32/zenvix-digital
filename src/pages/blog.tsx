import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";

const BlogPage = () => {
  return (
    <Layout
      title="Blog | Zenvix Digital"
      description="Read the Zenvix Digital blog for tips on web development, SEO, website design, and how to grow your business online."
    >
      <CmnBanner title="Blog Standard" navigation="Blog Standard" />
      <BlogMain />
    </Layout>
  );
};

export default BlogPage;
