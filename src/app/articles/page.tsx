import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/BigCard";
import Button from "../(components)/Button";
import stockImg1 from "../(images)/events1.png";
import stockImg2 from "../(images)/events2.png";
import stockImg3 from "../(images)/events3.png";
import React from "react";

const poppinsBlack = Poppins({ weight: "900", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsLight = Poppins({ weight: "300", subsets: ["latin"] });

export default function ArticlesPage() {
  return (
    <div
      className={poppinsLight.className}
      style={{ padding: "100px 160px", backgroundColor: "#FFFDF6" }}
    >
      <div
        className={poppinsBlack.className}
        style={{ fontSize: 96 + "pt", color: "#F96E47" }}
      >
        ARTICLES
      </div>
      <div style={{ fontSize: 16 + "pt", marginBottom: "25px" }}>
        As a tech recruitment agency that is committed to making a difference in
        the industry, we’re passionate about giving back to the community and
        building tomorrow’s technology professionals from the grassroots up.
        From hosting quarterly Korero Potentia events and attending local
        meetups, to one of our many sponsorships with local businesses and
        universities – everything we do is about our communities.
      </div>
      <EventCard
        title={"Launch Your Tech Career at Our Career Fair"}
        date={""}
        paragraph={
          "Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
        }
        image={stockImg1}
        btn={{
          text: "Read More",
          href: "/articles/first",
          type: "primary",
          width: "cardButton",
        }}
      />
      <EventCard
        title={"Solve Real-World Tech Problems and Win Prizes"}
        date={""}
        paragraph={
          "Work in teams to solve real-world tech problems and present your solutions to a panel of judges for a chance to win prizes. Put your skills to the test and make valuable connections at our annual Hackathon."
        }
        image={stockImg2}
        btn={{
          text: "Read More",
          href: "/articles/second",
          type: "primary",
          width: "cardButton",
        }}
      />
      <EventCard
        title={"#"}
        date={""}
        paragraph={
          "Develop your communication, teamwork, and adaptability skills at our Soft Skills Workshop. Led by experienced professionals, this workshop will teach you the skills you need to succeed in the tech industry."
        }
        image={stockImg3}
        btn={{
          text: "Read More",
          href: "#",
          type: "primary",
          width: "cardButton",
        }}
      />
      <div
        className={poppinsRegular.className}
        style={{ textAlign: "center", fontSize: "24pt", marginTop: "50px" }}
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
  );
}
