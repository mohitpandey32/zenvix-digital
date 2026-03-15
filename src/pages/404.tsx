import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorMain from "@/components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <Layout
      title="Page Not Found | Zenvix Digital"
      description="Oops! The page you're looking for doesn't exist. Head back to Zenvix Digital's homepage to find what you need."
    >
      <CmnBanner title="Error" navigation="Error" />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
