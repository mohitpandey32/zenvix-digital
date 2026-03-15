import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout
      title="Our Services | Zenvix Digital"
      description="Explore Zenvix Digital's services: web development, landing pages, e-commerce websites, SEO optimization, and speed performance for your business."
    >
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <UxProcessTwo />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
