import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import Card from "./(components)/Card";
import Button from "./(components)/Button";
import LandingImage from "./(images)/Landingimage.svg";
import Mouse from "./(images)/mouse.svg";
import Arrow from "./(images)/arrow.png";
import BigImage from "./(images)/Group 47.png";

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });

const layoutContainer = css`
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  margin: -50px auto 100px auto;

  @media only screen and (max-width: 600px) {
    padding: 0;
    margin-left: 10px;
    font-size: 16px;
    line-height: 1.5rem;
    gap: 0.3rem;
  }
`;

const title = css`
  font-size: 96px;
  padding: 0;
  margin: 10px 0 0 0;
  color: #f96e47;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 36px;
    color: #f96e47;
    margin: 10px 0 10px 16px;
  }
`;

const container = css`
  margin: -100px 0 0 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    margin: 0.5rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }
`;

const cardContainer = css`
  margin: 250px 0 0 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const h3style = css`
  font-size: 19px;
  padding: 0;
  margin: 0 0 0 0;
  color: #000000;
  text-align: left;

  @media only screen and (max-width: 600px) {
    margin-left: 16px;
  }
`;

const icon = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const cardrow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

const cardSpace = css`
  margin: 0 35px 0 35px;

  @media only screen and (max-width: 600px) {
    margin: 28px 0 28px 0;
  }
`;

const headerImage = css`
  width: 100%;
  margin-top: -80px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

const MouseImage = css`
  z-index: -1;
  position: absolute;
  left: 48%;
  margin-top: -170px;

  @media only screen and (max-width: 600px) {
    z-index: -1;
    margin-top: -240px;
    left: 15px;
    position: absolute;
    width: 100%;
  }
`;

const townImage = css`
  width: 100%;
  height: auto;
`;

const paragraph = css`
  font-size: 19px;
  margin-right: 200px;
  margin-left: 16px;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
  }
`;

export default function Home() {
  return (
    <>
      <Image className={headerImage} src={LandingImage} alt="Landing Image" />

      <div className={layoutContainer}>
        <div className={container}>
          <h1 className={title}>WELCOME</h1>
          <p className={paragraph}>
            Taitamariki Potentia is a student-led tech community created to
            bridge the gap between university and employment. Our mission is to
            empower young people studying technical disciplines to navigate the
            challenges associated with breaking into the industry.
          </p>

          <div className={icon}>
            <h3 className={h3style}>OUR HISTORY</h3>
            <Image
              src={Arrow}
              alt="Arrow"
              className={icon}
              width={70}
              height={30}
            ></Image>
          </div>

          <Image className={townImage} src={BigImage} alt="Town" />
        </div>

        <h3 className={h3style}>Upcoming</h3>
        <h1 className={title}>EVENTS</h1>

        <div className={cardrow}>
          <Card
            title="Launch Your Tech Career at Our Career Fair"
            imageUrl="https://t3.ftcdn.net/jpg/02/92/34/14/240_F_292341430_qGtNmxVKgAx4OieUQYNwpMlIbc0ABgVs.jpg"
            body="Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
            btn={{
              text: "Learn More",
              href: "#",
              type: "primary",
              width: "cardButton",
            }}
          />
          <div className={cardSpace}>
            <Card
              title="Solve Real-World Tech Problems and Win Prizes"
              imageUrl="https://t4.ftcdn.net/jpg/02/27/98/79/240_F_227987910_stMstGspY3J4PbPmdNBr1Huu0eCTs9oa.jpg"
              body="Work in teams to solve real-world tech problems and present your solutions to a panel of judges for a chance to win prizes. Put your skills to the test and make valuable connections at our annual Hackathon."
              btn={{
                text: "Learn More",
                href: "#",
                type: "secondary",
                width: "cardButton",
              }}
            />
          </div>
          <Card
            title="Build Your Soft Skills and Stand Out to Employers"
            imageUrl="https://t3.ftcdn.net/jpg/04/56/98/68/240_F_456986840_BbHQK0bynMEDxMDJP0L3fkCMqnfmJ283.jpg"
            body="Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this workshop will teach you the skills you need to succeed in the tech industry."
            btn={{
              text: "Learn More",
              href: "#",
              type: "tertiary",
              width: "cardButton",
            }}
          />
        </div>

        <div
          className={poppinsMedium.className}
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            text="View All"
            href="/events"
            type="primary"
            width="largeButton"
          ></Button>
        </div>

        <Image className={MouseImage} src={Mouse} alt="Mouse Image"></Image>

        <div className={cardContainer}>
          <h3 className={h3style}>Latest</h3>
          <h1 className={title}>ARTICLES</h1>

          <div className={cardrow}>
            <Card
              title="Launch Your Tech Career at Our Career Fair"
              imageUrl="https://t3.ftcdn.net/jpg/05/07/97/04/240_F_507970416_alQzqRPyu5bVayFcavgWFNoru5q5Qze7.jpg"
              body="Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
              btn={{
                text: "Learn More",
                href: "/articles/first-article",
                type: "primary",
                width: "cardButton",
              }}
            />
            <div className={cardSpace}>
              <Card
                title="Solve Real-World Tech Problems and Win Prizes"
                imageUrl="https://t4.ftcdn.net/jpg/04/30/92/33/240_F_430923373_9qr0KsEw2uXIeDOJHT8cyOEgTnacm5rl.jpg"
                body="Work in teams to solve real-world tech problems and present your solutions to a panel of judges for a chance to win prizes. Put your skills to the test and make valuable connections at our annual Hackathon."
                btn={{
                  text: "Learn More",
                  href: "/articles/second-article",
                  type: "secondary",
                  width: "cardButton",
                }}
              />
            </div>
            <Card
              title="Build Your Soft Skills and Stand Out to Employers"
              imageUrl="https://t4.ftcdn.net/jpg/03/14/34/87/240_F_314348719_6CxqaGP9rfDJwnB1RjntD6V7C6K0Ou6K.jpg"
              body="Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this workshop will teach you the skills you need to succeed in the tech industry."
              btn={{
                text: "Learn More",
                href: "/articles/third-article",
                type: "tertiary",
                width: "cardButton",
              }}
            />
          </div>

          <div
            className={poppinsMedium.className}
            style={{
              marginTop: "20px",
            }}
          >
            <Button
              text="View All"
              href="/articles"
              type="primary"
              width="largeButton"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
