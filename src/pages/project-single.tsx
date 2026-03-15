import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";

const ProjectDetails = () => {
  return (
    <Layout
      title="Project Details | Zenvix Digital"
      description="Explore a detailed case study from Zenvix Digital — how we approached the design and development of this web project from start to finish."
    >
      <CmnBanner
        title="Brand Identity"
        navigation="Brand Identity"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectDetailsMain />
      <UxProcess />
    </Layout>
  );
};

export default ProjectDetails;
