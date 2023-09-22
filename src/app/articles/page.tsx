"use client";

import { Poppins } from "next/font/google";
import { EventCard } from "@/app/(components)/bigCard"; // Import your EventCard component
import { fetchArticlesFromNotion } from "../../../artsData";
import React from "react";
//import '../src/app/globals.scss'
import { css } from "@linaria/core";
import Button from "../(components)/Button";
import Link from "next/link";
import SmallCard from "../(components)/Card";
import { useState, useEffect } from "react";

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
    margin-top: 50px;
  }
`;

const root = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;

  @media only screen and (max-width: 600px) {
    margin: 0 20px 0 20px;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 33px 0 33px;
  }
`;

const paragraph = css`
  margin-top: -70px;

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const smallCard = css`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 33px 40px 30px;
`;

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

function trimDescription(description: string, maxLength: number): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    fetchArticlesFromNotion().then((arts: ArticleData[]) => {
      console.log(arts);
      setArticles(arts);
    });

    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

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

        {/* This should be for small card */}
        {windowWidth < 600 ? (
          <div className={smallCard}>
            {articles.map((art: ArticleData, index) => (
              <SmallCard
                key={index}
                title={art.name}
                imageUrl={art.cover}
                body={trimDescription(art.desc, 200)}
                btn={{
                  text: "Read More",
                  href: `/articles/${index}`,
                  type: "primary",
                  width: "cardButton",
                }}
              />
            ))}
          </div>
        ) : (
          <>
            {/* This should be for big card */}
            {articles.map((art, index) => (
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
          </>
        )}

        <div
          className={poppinsRegular.className}
          style={{ textAlign: "center", fontSize: "24px", marginTop: "50px" }}
        >
          Do you have any questions? Contact us!
        </div>
        <div
          className={poppinsMedium.className}
          style={{
            marginTop: "14px",
            marginBottom: "30px",
            textAlign: "center",
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
