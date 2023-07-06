import React from "react";
import { css } from "@linaria/core";
import Image from "next/image";
import image1 from "../../(images)/articles1.png";
import "../../globals.scss";
import ArticlesCard from "../../(components)/ArticlesCard";
import stockImg from "../../(images)/events1.png";

const headerImage = css`
  max-width: 1119px;
  height: 333px;
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

export default function FirstArticle() {
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
              title="The Importance of Soft Skills for Students in Technical Disciplines"
              reference="By Naren Rohan, Project Manager | 12 July 2023"
              par1="As the demand for skilled technical professionals continues to grow, universities and institutions are doing an excellent job in preparing students with the technical skills required to succeed in the industry. However, studies show that technical skills alone are not enough for students to land a job and excel in their careers. In fact, a recent survey by LinkedIn found that 92% of hiring managers believe that soft skills, such as communication, teamwork, and adaptability, are equally or more important than technical skills."
              subtitle="What is Taitamariki Potentia?"
              par2="At Taitamariki Potentia, we understand the importance of soft skills in the tech industry and are committed to helping students develop these skills. Through our meetups and events, we provide students with opportunities to network and collaborate with their peers, as well as connect with experienced professionals and employers in the industry."
              image={stockImg}
              par3="In addition to technical knowledge, we believe that soft skills are essential for students to succeed in their careers. Communication skills, for example, are critical in expressing ideas clearly and working effectively with others. Teamwork skills are necessary for collaborating on projects and achieving shared goals, while adaptability is essential for responding to change and keeping up with the fast-paced industry."
              par4="Soft skills are also important for students when it comes to job interviews and landing their first job. Employers are looking for candidates who can demonstrate strong soft skills in addition to technical skills, as these skills are essential for success in any workplace. By developing these skills, students can increase their employability and stand out in a competitive job market."
              par5="In conclusion, technical skills are undoubtedly important for students in technical disciplines, but they are not enough on their own. Soft skills are equally important and can make the difference between success and failure in the industry. At Taitamariki Potentia, we are committed to helping students develop both technical and soft skills, empowering them to achieve their career goals and excel in the tech industry."
            />
          </div>
        </div>
      </div>
    </>
  );
}
