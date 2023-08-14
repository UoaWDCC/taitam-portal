import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import Card from "../src/app/(components)/Card";
import Button from "../src/app/(components)/Button";
import LandingImage from "./(images)/Landingimage.svg";
import Mouse from "./(images)/mouse.svg";
import Arrow from "./(images)/arrow.png";
import BigImage from "./(images)/bigimage.png";
import { fetchEventsFromNotion } from "../eventsData";
import { fetchArticlesFromNotion } from "../artsData";

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });

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

function trimDescription(description: string, maxLength: number): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}


const fetchFromNotion = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}/notion`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-store, no-cache",
    },
  });
  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
};

// const fetchArticlesFromNotion = async () => {

//   const res = await fetch(`${process.env.API_ENDPOINT}/articlesApi`, {
//     method: "GET",
//     headers: {
//       "Cache-Control": "no-store, no-cache",
//     },
    
//   });
//   const data = await res.json();
//   return JSON.parse(JSON.stringify(data));
// };


interface HomePageProps {
  events: rowsStruct; // Use the artStruct type here
  articles: artStruct;
}

const Home = ({ events, articles }: HomePageProps) => {


  return (
    <>
      {/* <Image className={headerImage} src={LandingImage} alt="Landing Image" /> */}

      <div className={layoutContainer}>
        <div className={container}>
          <h1 className={title}>WELCOME</h1>
          <p style={{ marginRight: "200px" }}>
            Taitamariki Potentia is a student-led tech community created to
            bridge the gap between university and employment. Our mission is to
            empower young people studying technical disciplines to navigate the
            challenges associated with breaking into the industry.
          </p>

          <div className={icon}>
            <h3 className={h3style}>OUR HISTORY</h3>
            {/* <Image
              src={Arrow}
              alt="Arrow"
              className={icon}
              width={70}
              height={30}
            ></Image> */}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Image src={BigImage} alt="Town" width={930} height={750} /> */}
          </div>
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
            text="Learn More"
            href="/events"
            type="primary"
            width="largeButton"
          ></Button>
        </div>

        <div className={MouseImage}>
          {/* <Image src={Mouse} alt="Mouse Image" width={700}></Image> */}
        </div>

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
              text="Learn More"
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

export default Home;

export async function getServerSideProps() {
  const articles = await fetchArticlesFromNotion();
  const events = await fetchEventsFromNotion();
  return { props: { articles, events } };
}