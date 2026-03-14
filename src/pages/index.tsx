import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsorLight from "@/components/containers/home/HomeSponsorLight";
import NextPageLight from "@/components/containers/home/NextPageLight";

const Home = () => {
  return (
    <Layout video={true}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeOffer />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsorLight />
      <NextPageLight />
    </Layout>
  );
};

export default Home;
