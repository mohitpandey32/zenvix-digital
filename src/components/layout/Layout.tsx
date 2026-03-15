import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import VideoModal from "./VideoModal";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  video?: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};

const BASE_URL = "https://zenvixdigital.com";

const Layout = ({
  children,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
  title,
  description,
  ogImage,
}: LayoutProps) => {
  const router = useRouter();
  const pageTitle = title ?? "Zenvix Digital | Web Development Agency";
  const pageDescription = description ?? "Zenvix Digital — We build fast, modern, and SEO-optimized websites for startups, small businesses, coaches, and personal brands. Get a high-converting website today.";
  const pageImage = ogImage ?? "/images/og-default.png";
  const pageUrl = `${BASE_URL}${router.asPath}`;

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".topy-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  // Apply light theme to all pages
  const lightThemeClass = "home-light";

  let additionalClasses = " ";

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${openNav ? " body-active" : ""
    } ${lightThemeClass}`;

  // fade animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // appear down
  useEffect(() => {
    if (typeof window === "undefined") return;

    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      new SplitType(".title-anim");
      const titleAnims = document.querySelectorAll(".title-anim");

      titleAnims.forEach((titleAnim) => {
        const charElements = titleAnim.querySelectorAll(".char");

        charElements.forEach((char, index) => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: char,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const charDelay = index * 0.03;

          tl2.from(char, {
            duration: 0.8,
            x: 70,
            delay: charDelay,
            autoAlpha: 0,
          });
        });
      });
    } catch (error) {
      console.warn("SplitType animation failed:", error);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="canonical" href={pageUrl} />

        {/* Primary Meta */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="web development, website design, landing page, e-commerce website, SEO website, speed optimization, Zenvix Digital" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${BASE_URL}${pageImage}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Zenvix Digital" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${BASE_URL}${pageImage}`} />
      </Head>
      <div className={combinedClassName}>
        <Header
          openNav={openNav}
          handleNav={handleNav}
          setOpenNav={setOpenNav}
        />
        <main>{children}</main>
        <Footer />
        {video ? <VideoModal /> : null}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>
  );
};

export default Layout;
