import React from "react";
import Layout from "@/components/layout/Layout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsMain from "@/components/containers/blog/BlogDetailsMain";

const BlogSingle = () => {
  return (
    <Layout
      title="Blog Post | Zenvix Digital"
      description="Read in-depth articles from Zenvix Digital on web development, design best practices, SEO tips, and growing your online presence."
    >
      <BlogSingleBanner />
      <BlogDetailsMain />
    </Layout>
  );
};

export default BlogSingle;
