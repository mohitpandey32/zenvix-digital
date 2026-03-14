import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import OurMission from "@/components/containers/OurMission";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import OurAchievement from "@/components/containers/OurAchievement";

const OurStory = () => {
  return (
    <Layout>
      <CmnBanner title="Our Story" navigation="Our Story" />
      <OurMission />
      <WorkStepsProject />
      <OurAchievement />
    </Layout>
  );
};

export default OurStory;
