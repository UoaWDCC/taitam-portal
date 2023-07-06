import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/BigCard";
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
          We regularly host meetups and events in Auckland, providing a vibrant
          and diverse community for students of all backgrounds who are studying
          technical disciplines. Our events offer direct access to resources,
          connections, and advice that can help you take your next career step.
          Whether you're looking to connect with experienced tech professionals,
          employers, or recruiters, or simply want to meet other students facing
          similar challenges, we have something for everyone.
        </p>
        <EventCard
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
        <EventCard
          title={"Solve Real-World Tech Problems and Win Prizes"}
          date={"By Janna Rutor, Director of Events | 5 June 2023"}
          paragraph={
            "Work in teams to solve real-world tech problems and present your solutions to a panel of judges for a chance to win prizes. Put your skills to the test and make valuable connections at our annual Hackathon."
          }
          image={stockImg2}
          btn={{
            text: "Read More",
            href: "/articles/first-article",
            type: "primary",
            width: "cardButton",
          }}
        />
        <EventCard
          title={"Build Your Soft Skills and Stand Out to Employers"}
          date={"By Wesley Key, Director of Events | 2 May 2023"}
          paragraph={
            "Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this workshop will teach you the skills you need to succeed in the tech industry."
          }
          image={stockImg3}
          btn={{
            text: "Read More",
            href: "/articles/first-article",
            type: "primary",
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
