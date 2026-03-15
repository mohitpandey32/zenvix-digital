import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";

const ContactUs = () => {
  return (
    <Layout
      title="Contact Us | Zenvix Digital"
      description="Get in touch with Zenvix Digital. We would love to discuss your project, answer your questions, and help you get a stunning website for your business."
    >
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
