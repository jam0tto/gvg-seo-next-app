import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googleadservices.com",
      "frame-src https://www.googletagmanager.com",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Weebly used .html extensions on all pages — strip them
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/recruitment.html", destination: "/recruitment", permanent: true },
      { source: "/undergraduate-studies.html", destination: "/undergraduate-studies", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/play-overseas-information.html", destination: "/play-overseas-information", permanent: true },
      { source: "/african-students.html", destination: "/african-students", permanent: true },
      // Asian students — URL simplified; handle both bare and .html variants
      { source: "/indian-pakistani-and-se-asian-students", destination: "/asian-students", permanent: true },
      { source: "/indian-pakistani-and-se-asian-students.html", destination: "/asian-students", permanent: true },
      // Blog/news — blog content not migrated, all routes point to /news
      { source: "/news.html", destination: "/news", permanent: true },
      { source: "/blog", destination: "/news", permanent: true },
      { source: "/blog/working-in-the-uk-post-grad", destination: "/news", permanent: true },
      { source: "/blog/uk-ready-to-play", destination: "/news", permanent: true },
      { source: "/blog/national-league-competitions", destination: "/news", permanent: true },
      // Country pages — Weebly had /{country}.html at root, now under /countries/
      { source: "/nigeria.html", destination: "/countries/nigeria", permanent: true },
      { source: "/kenya.html", destination: "/countries/kenya", permanent: true },
      { source: "/zambia.html", destination: "/countries/zambia", permanent: true },
      { source: "/india.html", destination: "/countries/india", permanent: true },
      { source: "/nepal.html", destination: "/countries/nepal", permanent: true },
      { source: "/pakistan.html", destination: "/countries/pakistan", permanent: true },
    ];
  },
};

export default nextConfig;
