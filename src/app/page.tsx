import { css } from "@linaria/core";
import React from "react";
import Image from "next/image";
import Card from "./(components)/Card";
import Button from "./(components)/Button";
import LandingImage from "./(images)/Landingimage.svg";
import Mouse from "./(images)/mouse.svg";
import Arrow from "./(images)/arrow.png";
import BigImage from "./(images)/bigimage.png";

const layoutContainer = css`
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  margin: -50px auto 100px auto;
`;

const title = css`
  font-size: 96px;
  padding: 0;
  margin: 10px 0 0 0;
  color: #f96e47;
  text-align: left;
`;

const container = css`
  margin: -100px 0 0 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
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
`;

const cardSpace = css`
  margin: 0 35px 0 35px;
`;

const headerImage = css`
  width: 100%;
  margin-top: -80px;
`;

const MouseImage = css`
  z-index: -1;
  position: absolute;
  left: 52%;
`;

const buttonPlacement = css`
  margin-top: 25px;
  margin-left: 340.8px;
  margin-bottom: 25px;
`;

export default function Home() {
  return (
    <>
      <Image className={headerImage} src={LandingImage} alt="Landing Image" />

      <div className={layoutContainer}>
        <div className={container}>
          <h1 className={title}>WELCOME</h1>
          <p style={{ marginRight: "200px" }}>
            Taitamariki Potentia is a student-led tech community created to bridge the gap between university and
            employment. Our mission is to empower young people studying technical disciplines to navigate the challenges
            associated with breaking into the industry.
          </p>

          <div className={icon}>
            <h3 className={h3style}>OUR HISTORY</h3>
            <Image src={Arrow} alt="Arrow" className={icon} width={70} height={30}></Image>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={BigImage} alt="Town" width={930} height={750} />
          </div>
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
            body="Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this interactive workshop will teach you the essential skills you need to succeed in the tech industry."
            btn={{
              text: "Learn More",
              href: "#",
              type: "tertiary",
              width: "cardButton",
            }}
          />
        </div>

        <div className={buttonPlacement}>
          <Button text="Learn More" href="#" type="primary" width="otherButton"></Button>
        </div>

        <div className={MouseImage}>
          <Image src={Mouse} alt="Mouse Image" width={700}></Image>
        </div>

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
                href: "#",
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
                  href: "#",
                  type: "secondary",
                  width: "cardButton",
                }}
              />
            </div>
            <Card
              title="Build Your Soft Skills and Stand Out to Employers"
              imageUrl="https://t4.ftcdn.net/jpg/03/14/34/87/240_F_314348719_6CxqaGP9rfDJwnB1RjntD6V7C6K0Ou6K.jpg"
              body="Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this interactive workshop will teach you the essential skills you need to succeed in the tech industry."
              btn={{
                text: "Learn More",
                href: "#",
                type: "tertiary",
                width: "cardButton",
              }}
            />
          </div>

          <div className={buttonPlacement}>
            <Button text="Learn More" href="#" type="primary" width="otherButton"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
