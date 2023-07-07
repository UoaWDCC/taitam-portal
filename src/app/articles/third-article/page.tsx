import React from "react";
import { css } from "@linaria/core";
import Image from "next/image";
import image1 from "../../(images)/articles1.png";
import "../../globals.scss";
import ArticlesCard from "../../(components)/ArticlesCard";
import stockImg from "../../(images)/events3.png";

const headerImage = css`
  max-width: 1119px;
  height: 320px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  z-index: -1;
  position: absolute;
`;

const title = css`
  padding: 0;
  color: #f96e47;
  text-align: left;
  font-size: 96px;
`;

const root = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;
`;

const cardContainer = css`
  margin-left: 65px;
  display: block;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-top: 280px;
`;

export default function ThirdArticle() {
  return (
    <>
      <div className={root}>
        <h1 className={title}>ARTICLES</h1>

        <div className={headerImage}>
          <Image src={image1} alt="Landing Image"></Image>
        </div>
        <div className={cardContainer}>
          <div>
            <ArticlesCard
              title="Build Your Soft Skills and Stand Out to Employers"
              reference="By Wesley Key, Hiring Manager | 2 May 2023"
              par1="In today's competitive job market, technical skills alone are not enough to secure your dream job. Employers increasingly value candidates who possess a strong set of soft skills, which complement their technical expertise. By actively developing and showcasing your soft skills, you can differentiate yourself from other candidates and make a lasting impression on potential employers. Even if you're not applying for a managerial role, leadership skills are highly valued by employers. Leadership goes beyond managing teams; it involves taking initiative, being accountable, and inspiring others. Showcase your leadership potential by sharing instances where you have taken charge, assumed responsibility, or mentored others. Demonstrate your ability to motivate and influence others positively, and emphasize your commitment to personal and professional growth."
              subtitle="What types of soft skills do employers look for?"
              par2="Employers highly value soft skills such as effective communication, teamwork, adaptability, problem-solving, leadership potential, time management, organizational skills, and emotional intelligence. Showcasing these skills is crucial for standing out in the job market and increasing your employability."
              image={stockImg}
              par3="In today's interconnected work environments, teamwork and collaboration are essential skills. Employers look for candidates who can work effectively in diverse teams, contribute their expertise, and build positive relationships. By actively participating in group projects, extracurricular activities, or volunteer work, you can demonstrate your ability to collaborate, respect differing perspectives, and leverage the strengths of team members. Highlighting your teamwork skills showcases your adaptability and your willingness to work towards common goals."
              par4="Even if you're not applying for a managerial role, leadership skills are highly valued by employers. Leadership goes beyond managing teams; it involves taking initiative, being accountable, and inspiring others. Showcase your leadership potential by sharing instances where you have taken charge, assumed responsibility, or mentored others. Demonstrate your ability to motivate and influence others positively, and emphasize your commitment to personal and professional growth. Even if you're not applying for a managerial role, leadership skills are highly valued by employers. Leadership goes beyond managing teams; it involves taking initiative, being accountable, and inspiring others. Showcase your leadership potential by sharing instances where you have taken charge, assumed responsibility, or mentored others. Demonstrate your ability to motivate and influence others positively, and emphasize your commitment to personal and professional growth."
              par5="While technical skills are essential, building your soft skills is equally important in today's job market. Employers seek well-rounded candidates who can effectively communicate, collaborate, adapt, problem-solve, and lead. By actively developing and showcasing your soft skills, you can stand out from the competition, demonstrate your potential as a valuable team member, and increase your chances of securing your desired job. Invest in building your soft skills and watch as doors open to exciting career opportunities. Even if you're not applying for a managerial role, leadership skills are highly valued by employers. Leadership goes beyond managing teams; it involves taking initiative, being accountable, and inspiring others. Showcase your leadership potential by sharing instances where you have taken charge, assumed responsibility, or mentored others. Demonstrate your ability to motivate and influence others positively, and emphasize your commitment to personal and professional growth."
            />
          </div>
        </div>
      </div>
    </>
  );
}
