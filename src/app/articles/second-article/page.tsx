import React from "react";
import { css } from "@linaria/core";
import Image from "next/image";
import image1 from "../../(images)/articles1.png";
import "../../globals.scss";
import ArticlesCard from "../../(components)/ArticlesCard";
import stockImg from "../../(images)/events1.png";

const headerImage = css`
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  z-index: -1;
  position: absolute;

  img {
    border: 1px solid #000;
  }

  @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    position: absolute;
    height: auto;

    img {
      max-width: 100%;
      height: auto;
      margin-left: 16px;
      margin-top: 45px;
      margin-right: 16px;
      border: 1px solid #000;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    position: absolute;
    height: auto;

    img {
      max-width: 100%;
      height: auto;
      margin-left: 28px;
      margin-top: 40px;
      margin-right: 28px;
    }
  }
`;

const title = css`
  padding: 0;
  color: #f96e47;
  text-align: left;
  font-size: 96px;

  @media only screen and (max-width: 600px) {
    font-size: 36px;
    padding: 0;
    color: #f96e47;
    text-align: left;
    margin-left: 16px;
    margin-top: 55px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    padding: 0;
    color: #f96e47;
    text-align: left;
    margin-left: 34px;
    margin-top: 43px;
  }
`;

const root = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;

  @media only screen and (max-width: 600px) {
    max-width: 600px;
    margin: 50px auto 100px auto;
  }
`;

const cardContainer = css`
  margin-left: 65px;
  display: block;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-top: 280px;

  @media only screen and (max-width: 600px) {
    margin-left: 27px;
    display: block;
    flex-flow: column wrap;
    justify-content: space-between;
    margin-top: 90px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 67px;
    display: block;
    flex-flow: column wrap;
    justify-content: space-between;
    margin-top: 100px;
  }
`;

export default function SecondArticle() {
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
              title="Solve Real-World Tech Problems and Win Prizes"
              reference="By Janna Rutor, Director of Events | 5 June 2023"
              par1="In the dynamic world of technology, problem-solving skills are highly valued. Aspiring tech enthusiasts and professionals are constantly seeking opportunities to put their skills to the test and demonstrate their abilities. If you're eager to showcase your talent, tackle real-world challenges, and stand a chance to win exciting prizes, our 'Solve Real-World Tech Problems and Win Prizes' competition is the perfect platform for you."
              subtitle="Engage in Meaningful Problem-Solving!"
              par2="Our competition offers participants the chance to engage in meaningful problem-solving by tackling real-world tech challenges. These challenges are carefully selected to reflect the current needs and trends in the tech industry. By participating, you'll have the opportunity to work on cutting-edge problems that companies and organizations are facing, allowing you to apply your knowledge, creativity, and technical skills in a practical setting."
              image={stockImg}
              par3="Participating in our competition provides a unique learning experience that goes beyond theoretical knowledge. You'll gain hands-on experience by delving into complex tech problems and exploring innovative solutions. This experience not only enhances your problem-solving abilities but also strengthens your analytical thinking, collaboration, and communication skills – all of which are highly sought after in the tech industry."
              par4="We believe in recognizing and rewarding exceptional talent. By participating in our competition, you not only gain the chance to solve challenging problems but also have the opportunity to win exciting prizes. "
              par5="Participating in our 'Solve Real-World Tech Problems and Win Prizes' competition is an excellent way to challenge yourself, showcase your skills, and gain valuable experience in the tech industry. By solving authentic problems, accessing real-world data and tools, and competing for exciting prizes, you'll not only enhance your technical prowess but also strengthen your problem-solving abilities. Join our competition today and embark on a thrilling journey of tech innovation!"
            />
          </div>
        </div>
      </div>
    </>
  );
}
