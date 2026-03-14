import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorMain from "@/components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <Layout>
      <CmnBanner title="Error" navigation="Error" />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
