export const dynamic = "force-dynamic";
import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import Card from "./(components)/Card";
import Button from "./(components)/Button";
import LandingImage from "./(images)/Landingimage.svg";
import Mouse from "./(images)/mouse.svg";
import Arrow from "./(images)/arrow.png";
import BigImage from "./(images)/bigimage.svg";
import { fetchEventsFromNotion } from "../../eventsData";
import { fetchArticlesFromNotion } from "../../artsData";

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });

const layoutContainer = css`
  max-width: 1276px;
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

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100%;
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
    max-width: 600px;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 1024px;
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

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    max-width: 1024px;
  }
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

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    margin-right: 40px;
  }
`;

const cardSpace = css`
  margin: 0 35px 0 35px;

  @media only screen and (max-width: 600px) {
    margin: 28px 0 28px 0;
  }
`;

const headerImage = css`
  width: 120%;
  height: auto;
  margin-left: -120px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-left: 0px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    max-width: 100%;
    height: auto;
    margin-left: 55px;
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

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    z-index: -1;
    position: absolute;
    left: 57%;
    margin-top: -170px;
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

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin-right: 50px;
  }
`;

function trimDescription(description: string, maxLength: number): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}

export default async function Home() {
  const events: EventData[] = await fetchEventsFromNotion();
  const articles: ArticleData[] = await fetchArticlesFromNotion();

  return (
    <>
      <div>
        <div className={layoutContainer}>
          <div className={container}>
            <Image
              className={headerImage}
              src={LandingImage}
              alt="Landing Image"
            />
          </div>
          <div className={container}>
            <h1 className={title}>WELCOME</h1>
            <p className={paragraph}>
              Taitamariki Potentia is a student-led tech community created to
              bridge the gap between university and employment. Our mission is
              to empower young people studying technical disciplines to navigate
              the challenges associated with breaking into the industry.
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
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className={index === 1 ? cardSpace : undefined}>
                <Card
                  title={event.name}
                  body={trimDescription(event.desc, 250)} //trim to 130 characters
                  imageUrl={event.cover}
                  btn={{
                    text: "Sign Up",
                    href: event.link,
                    type: "primary",
                    width: "cardButton",
                    target: "_blank",
                  }}
                />
              </div>
            ))}
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
        </div>

        <Image className={MouseImage} src={Mouse} alt="Mouse Image"></Image>

        <div className={cardContainer}>
          <h3 className={h3style}>Latest</h3>
          <h1 className={title}>ARTICLES</h1>

          <div className={cardrow}>
            {articles.slice(0, 3).map((art, index) => (
              <div key={index} className={index === 1 ? cardSpace : undefined}>
                <Card
                  title={art.name}
                  body={trimDescription(art.desc, 250)} //trim to 130 characters
                  imageUrl={art.cover}
                  btn={{
                    text: "Sign Up",
                    href: art.link,
                    type: "primary",
                    width: "cardButton",
                    target: "_blank",
                  }}
                />
              </div>
            ))}
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
            />
          </div>
        </div>
      </div>
    </>
  );
}
