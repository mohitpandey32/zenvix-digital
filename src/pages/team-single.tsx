import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout
      title="Team Member | Zenvix Digital"
      description="Meet one of Zenvix Digital's talented team members — learn about their expertise and role in building outstanding websites."
    >
      <CmnBanner
        title="SANA P. LESH"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
