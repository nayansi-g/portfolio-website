"use client";

import Image from "next/image";
import { motion } from "framer-motion";



export default function Services() {
    const portfolioItems = [
        {
            tag: "Real Estate",
            title: "Luxury Real Estate Hub",
            description:
                "Premium property listings platform with virtual tours and advanced search filters for high-end real estate market.",
            image: "/real-state.png",
            link: "#",
        },
        {
            tag: "Restaurant",
            title: "Gourmet Bistro",
            description: "Elegant restaurant website featuring online reservations, interactive menu, and chef's special showcase with beautiful food photography.",
            image: "/res.png",
            link: "#",
        },
        {
            tag: "Business Services",
            title: "TechStart Solutions",
            description: "Modern corporate website for technology consulting firm with service portfolio, case studies, and client testimonials.",
            image: "/business.png",
            link: "#",
        },
        {
            tag: "Healthcare",
            title: "Wellness Medical Center",
            description: "Healthcare website with appointment booking, doctor profiles, patient portal, and comprehensive medical services information.",
            image: "/healthcare.png",
            link: "#",
        },
        {
            tag: "Fitness",
            title: "FitLife Gym & Spa",
            description: "Dynamic fitness center website with class schedules, membership plans, trainer profiles, and online booking system.",
            image: "/fitness.png",
            link: "#",
        },
        {
            tag: "E-commerce",
            title: "Urban Fashion Boutique",
            description: "Stylish e-commerce platform for contemporary fashion brand with lookbook, size guides, and seamless checkout experience.",
            image: "/e-commerce.png",
            link: "#",
        },
        {
            tag: "Creative Agency",
            title: "Creative Portfolio Studio",
            description: "Stunning portfolio website for creative agency showcasing design work, photography, and branding projects with smooth animations.",
            image: "/creative.png",
            link: "#",
        },
        {
            tag: "Legal Services",
            title: "Legal Partners LLP",
            description: "Professional law firm website with practice areas, attorney bios, case results, and secure client consultation forms.",
            image: "/legal.png",
            link: "#",
        },
        {
            tag: "Dental Clinic",
            title: "Dental Care Plus",
            description: "Modern dental practice website featuring services, before-after galleries, patient reviews, and easy appointment scheduling.",
            image: "/dental.png",
            link: "#",
        },
        {
            tag: "Cafe",
            title: "Artisan Coffee Roasters",
            description: "Warm and inviting coffee shop website with online ordering, subscription service, and coffee education blog.",
            image: "/cafe.png",
            link: "#",
        },
        {
            tag: "Automative",
            title: "Prestige Auto Dealership",
            description: "Luxury car dealership website with inventory search, financing calculator, virtual showroom, and test drive booking.",
            image: "/automative.png",
            link: "#",
        },
        {
            tag: "Education",
            title: "Bright Minds Academy",
            description: "Educational institution website with course catalog, student portal, faculty directory, and online learning resources.",
            image: "/education.png",
            link: "#",
        },
        {
            tag: "Spa & Wellness",
            title: "Serenity Spa Retreat",
            description: "Tranquil spa website featuring treatment menu, therapist profiles, gift certificates, and online booking system.",
            image: "/spa.png",
            link: "#",
        },
        {
            tag: "Interior Design",
            title: "HomeStyle Interiors",
            description: "Interior design firm website showcasing portfolio projects, design services, style guides, and consultation booking.",
            image: "/interior.png",
            link: "#",
        },
        {
            tag: "Financial Services",
            title: "Summit Financial Advisors",
            description: "Financial planning website with investment services, retirement planning tools, market insights, and client portal.",
            image: "/financials.png",
            link: "#",
        },
        {
            tag: "veterinary",
            title: "Pet Paradise Veterinary",
            description: "Veterinary clinic website with pet care tips, emergency services, online pharmacy, and appointment scheduling.",
            image: "/vaterninary.png",
            link: "#",
        },
        {
            tag: "Agriculture",
            title: "Garden Fresh Organics",
            description: "Organic farm and market website with product catalog, farm-to-table story, delivery service, and seasonal recipes.",
            image: "/agriculture.png",
            link: "#",
        },
        {
            tag: "Event Planning",
            title: "Elite Event Planning",
            description: "Event planning company website featuring portfolio galleries, service packages, vendor network, and inquiry forms.",
            image: "/event.png",
            link: "#",
        },
        {
            tag: "Software",
            title: "CloudTech Innovations",
            description: "SaaS company website with product demos, pricing tiers, integration guides, and customer success stories.",
            image: "/software.png",
            link: "#",
        },
        {
            tag: "Travel & Tourism",
            title: "Coastal Travel Adventures",
            description: "Travel agency website with destination guides, tour packages, booking system, and traveler testimonials with stunning imagery.",
            image: "/travel.png",
            link: "#",
        }
    ];
    return (
        <section
            className="bg-white py-16"
            aria-labelledby="portfolio-title"
        >
            <div className="mx-auto max-w-5xl px-6 text-center">
                <h2
                    id="portfolio-title"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b1f2a]"
                >
                    Tubehelper Lite Portfolio
                </h2>
                <p className="mt-4 text-md md:text-lg text-gray-600">
                    Here are some of the websites we have professionally crafted
                </p>

                <div className="mt-10 grid justify-center gap-8">
                    {portfolioItems.map((item) => {
                        const imageAlt =
                            item.alt ||
                            `${item.title} website design preview by Tubehelper Lite`;

                        return (
                            <div
                                key={item.title}
                                className="overflow-hidden rounded-2xl border border-gray-200  mx-auto max-w-3xl bg-white shadow-xl"
                            >
                                <div className="relative bg-white overflow-y-hidden">

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                        className="group relative mx-auto py-4 bg-white w-full max-w-2xl"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={imageAlt}
                                            width={820}
                                            height={620}
                                            className="h-auto w-full rounded-lg object-cover"
                                            priority
                                        />
                                        <div className="pointer-events-none my-4 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 opacity-10 transition-opacity duration-200 group-hover:opacity-80" />
                                        <a
                                            href={item.link || "#"}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7a00] px-6 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:scale-105"
                                        >
                                            Visit Website
                                        </a>
                                    </motion.div>
                                    <span className="absolute right-6 top-6 rounded-full bg-[#ff7a00] px-4 py-1 text-xs font-semibold text-white shadow-md">
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="px-8 py-4 border-t border-gray-200 text-left">
                                    <h3 className="text-2xl font-bold text-[#1b1f2a]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm sm:text-[17px] text-[#6b6f7a]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
