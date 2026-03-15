import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";

const ClientFeedback = () => {
  return (
    <Layout
      title="Client Feedback | Zenvix Digital"
      description="Read what our clients say about Zenvix Digital — real testimonials from businesses we've helped grow with professional web development services."
    >
      <CmnBanner title="Client's Feedback" navigation="Client's Feedback" />
      <ClientFeedbackMain />
    </Layout>
  );
};

export default ClientFeedback;
