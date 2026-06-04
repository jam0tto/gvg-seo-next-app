import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
