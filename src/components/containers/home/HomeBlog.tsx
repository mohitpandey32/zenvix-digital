import React from "react";
import Image from "next/image";
import Link from "next/link";
import seoStrategies from "public/images/blog/seo-strategies.png";
import googleAdsRoi from "public/images/blog/google-ads-roi.png";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Digital Marketing Insights
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Latest Marketing Strategies & Tips</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={seoStrategies} alt="SEO Strategies 2024" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    10 SEO Strategies That Actually Work in 2024
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    SEO Tips
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>DECEMBER 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={googleAdsRoi} alt="Google Ads ROI Guide" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    How to Maximize ROI with Google Ads Campaigns
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    PPC Marketing
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>DECEMBER 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
