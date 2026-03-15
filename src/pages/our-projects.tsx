import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurProjects = () => {
  return (
    <Layout
      title="Our Projects | Zenvix Digital"
      description="Browse Zenvix Digital's portfolio of completed web projects — from landing pages to full e-commerce solutions built for real businesses."
    >
      <CmnBanner title="Our Projects" navigation="Our Projects" />
      <ProjectMain />
      <WorkStepsProject />
      <CtaTwo />
    </Layout>
  );
};

export default OurProjects;
