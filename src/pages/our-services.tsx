import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <UxProcessTwo />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
