import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";

const OurPortfolio = () => {
  return (
    <Layout
      title="Portfolio Gallery | Zenvix Digital"
      description="View Zenvix Digital's portfolio gallery showcasing our best website design and development work for clients across various industries."
    >
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
    </Layout>
  );
};

export default OurPortfolio;
