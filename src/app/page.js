import WebsiteCTA from "@/components/CTA";
import WebsiteForm from "@/components/Form";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export const metadata = {
  title: "Tubehelper Lite Portfolio",
  description:
    "Explore Tubehelper Lite's portfolio of high-performance, conversion-focused websites for businesses across industries.",
};

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tubehelperlite.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tubehelper Lite Portfolio",
    description:
      "High-performance, conversion-focused website design and development for businesses across industries.",
    url: siteUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Tubehelper Lite",
      url: siteUrl,
    },
    about: {
      "@type": "Service",
      name: "Website Design and Development",
      serviceType: "Web Design",
      provider: {
        "@type": "Organization",
        name: "Tubehelper Lite",
        url: siteUrl,
      },
    },
  };

  return (
    <div className="overflow-x-hidden bg-[#f6f3ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
      <Hero />
        <Services />
        <WebsiteCTA />
        <WebsiteForm />
      </main>
    </div>
  );
}
