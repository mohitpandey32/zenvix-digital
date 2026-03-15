import { GetServerSideProps } from "next";

const BASE_URL = "https://zenvixdigital.in";

const pages = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/about-us", priority: "0.8", changefreq: "monthly" },
    { path: "/our-services", priority: "0.9", changefreq: "monthly" },
    { path: "/our-projects", priority: "0.8", changefreq: "monthly" },
    { path: "/our-story", priority: "0.7", changefreq: "monthly" },
    { path: "/our-teams", priority: "0.7", changefreq: "monthly" },
    { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
    { path: "/blog", priority: "0.8", changefreq: "weekly" },
    { path: "/faq", priority: "0.7", changefreq: "monthly" },
    { path: "/contact-us", priority: "0.9", changefreq: "monthly" },
    { path: "/client-feedback", priority: "0.6", changefreq: "monthly" },
    { path: "/service-single", priority: "0.7", changefreq: "monthly" },
    { path: "/project-single", priority: "0.7", changefreq: "monthly" },
    { path: "/blog-single", priority: "0.7", changefreq: "weekly" },
    { path: "/team-single", priority: "0.6", changefreq: "monthly" },
];

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
            .map(
                ({ path, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
            )
            .join("\n")}
</urlset>`;
}

const SiteMap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default SiteMap;
