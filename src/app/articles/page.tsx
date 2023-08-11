import { Poppins } from "next/font/google";
import { BigCard } from "../(components)/bigCard";
import Button from "../(components)/Button";
import stockImg1 from "../(images)/events1.png";
import stockImg2 from "../(images)/events2.png";
import stockImg3 from "../(images)/events3.png";
import React from "react";
import "../globals.scss";
import { css } from "@linaria/core";

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

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

export default function ArticlesPage() {
  return (
    <>
      <div className={root}>
        <h1 className={title}>ARTICLES</h1>
        <p style={{ marginTop: "-70px" }}>
          As a tech recruitment agency that is committed to making a difference
          in the industry, we’re passionate about giving back to the community
          and building tomorrow’s technology professionals from the grassroots
          up. From hosting quarterly Korero Potentia events and attending local
          meetups, to one of our many sponsorships with local businesses and
          universities – everything we do is about our communities.
        </p>
        <BigCard
          title={"Launch Your Tech Career at Our Career Fair"}
          date={"By Naren Rohan, Project Manager | 12 July 2023"}
          paragraph={
            "Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
          }
          image={stockImg1}
          btn={{
            text: "Read More",
            href: "/articles/first-article",
            type: "primary",
            width: "cardButton",
          }}
        />
        <BigCard
          title={"Solve Real-World Tech Problems and Win Prizes"}
          date={"By Janna Rutor, Director of Events | 5 June 2023"}
          paragraph={
            "Work in teams to solve real-world tech problems and present your solutions to a panel of judges for a chance to win prizes. Put your skills to the test and make valuable connections at our annual Hackathon."
          }
          image={stockImg2}
          btn={{
            text: "Read More",
            href: "/articles/second-article",
            type: "secondary",
            width: "cardButton",
          }}
        />
        <BigCard
          title={"Build Your Soft Skills and Stand Out to Employers"}
          date={"By Wesley Key, Hiring Manager | 2 May 2023"}
          paragraph={
            "Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this workshop will teach you the skills you need to succeed in the tech industry."
          }
          image={stockImg3}
          btn={{
            text: "Read More",
            href: "/articles/third-article",
            type: "tertiary",
            width: "cardButton",
          }}
        />
        <div
          className={poppinsRegular.className}
          style={{ textAlign: "center", fontSize: "20pt", marginTop: "50px" }}
        >
          Do you have any questions? Contact us!
        </div>
        <div
          className={poppinsMedium.className}
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            text="Contact Us"
            href="/contact"
            type="primary"
            width="largeButton"
          ></Button>
        </div>
      </div>
    </>
  );
}
