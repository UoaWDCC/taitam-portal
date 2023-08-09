import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/bigCard";
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

function trimDescription(description: string, maxLength: number): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}


const fetchArticlesFromNotion = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}/articlesApi`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
};

export default async function ArticlesPage() {
  const arts: artStruct = await fetchArticlesFromNotion();

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

        {arts.map((art, index) => (
          <EventCard
            key={index}
            title={art.name}
            date={`By ${art.author} | ${art.date.start}`}
            paragraph={trimDescription(art.desc, 350)} //trim to 350 characters for articles page
            image={art.cover}
            btn={{
              text: "Read More",
              href: `/articles/${index}`,
              type: "secondary",
              width: "cardButton",
            }}
          />
        ))}

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
