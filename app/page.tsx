"use client";

import Header from "@/components/Header";
import HomeSlide from "@/components/HomeSlide";
import AboutSlide from "@/components/AboutSlide";
import SkillsSlide from "@/components/SkillsSlide";
import EducationSlide from "@/components/EducationSlide";
import EmploymentSlide from "@/components/EmploymentSlide";
import PortfolioSlide from "@/components/PortfolioSlide";
import AwardSlide from "@/components/AwardSlide";
import BlogSlide from "@/components/BlogSlide";
import ContactSlide from "@/components/ContactSlide";
import IndicationArrows from "@/components/IndicationArrows";

export default function Home() {
  return (
    <>
      <div className="cd-slideshow-wrapper">
        <Header />
        <ol className="cd-slideshow">
          <HomeSlide />
          <AboutSlide />
          <SkillsSlide />
          <EducationSlide />
          <EmploymentSlide />
          <PortfolioSlide />
          <AwardSlide />
          <BlogSlide />
          <ContactSlide />
        </ol>
      </div>
      <IndicationArrows />
    </>
  );
}
