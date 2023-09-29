"use client";
import { Poppins } from "next/font/google";
import { EventCard } from "@/app/(components)/bigCard"; // Import your EventCard component
import React from "react";
//import '../src/app/globals.scss'
import { css } from "@linaria/core";
import Button from "../(components)/Button";
import Link from "next/link";
import SmallCard from "../(components)/Card";
import { useState, useEffect } from "react";
import { fetchEventsFromNotion } from "../../../eventsData";

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

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([]);

  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    fetchEventsFromNotion().then((events: EventData[]) => {
      setEvents(events);
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
        <h1 className={title}>Events</h1>
        <p className={paragraph}>
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
            {events.map((event: EventData, index) => (
              <SmallCard
                key={index}
                title={event.name}
                imageUrl={event.cover}
                body={trimDescription(event.desc, 200)}
                btn={{
                  text: "Read More",
                  href: event.link,
                  type: "primary",
                  width: "cardButton",
                }}
              />
            ))}
          </div>
        ) : (
          <>
            {/* This should be for big card */}
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.name}
                date={event.date.start}
                paragraph={trimDescription(event.desc, 350)} //trim to 350 characters for articles page
                image={event.cover}
                btn={{
                  text: "Read More",
                  href: event.link,
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