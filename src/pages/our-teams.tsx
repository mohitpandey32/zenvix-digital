import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamMain from "@/components/containers/TeamMain";

const OurTeams = () => {
  return (
    <Layout
      title="Our Team | Zenvix Digital"
      description="Meet the talented team at Zenvix Digital — designers, developers, and strategists dedicated to building outstanding websites for your business."
    >
      <CmnBanner title="Awesome Teams" navigation="Our Teams" />
      <TeamMain />
    </Layout>
  );
};

export default OurTeams;
