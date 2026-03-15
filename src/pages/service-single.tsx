import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ServiceDetails = () => {
  return (
    <Layout
      title="Service Details | Zenvix Digital"
      description="Get detailed information about Zenvix Digital's web development and design services — tailored solutions for every business size and goal."
    >
      <ServiceDetailsBanner />
      <ServiceDetailsMain />
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
