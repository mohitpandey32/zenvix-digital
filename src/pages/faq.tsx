import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";

const FaqPage = () => {
  return (
    <Layout
      title="FAQ | Zenvix Digital"
      description="Find answers to frequently asked questions about Zenvix Digital's web development services, pricing, timelines, and process."
    >
      <CmnBanner title="Faq" navigation="Faq" />
      <FaqMain />
    </Layout>
  );
};

export default FaqPage;
