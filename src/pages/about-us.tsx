import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

const AboutUs = () => {
  return (
    <Layout
      title="About Us | Zenvix Digital"
      description="Learn about Zenvix Digital — who we are, our mission, and the expert team behind every high-converting website we build."
    >
      <CmnBanner title="About Us" navigation="About Us" />
      <Agency />
      <TeamMembers />
      <HomeTestimonial />
    </Layout>
  );
};

export default AboutUs;
