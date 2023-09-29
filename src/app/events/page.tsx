"use client";
import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/bigCard";
import Button from "../(components)/Button";
import React from "react";
import { fetchEventsFromNotion } from "../../../eventsData";
import "../globals.scss";
import { css } from "@linaria/core";
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

  @media only screen and (max-width: 1275px) {
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

export default async function EventsPage() {
  const events: EventData[] = await fetchEventsFromNotion();

  return (
    <div
      className={poppinsLight.className}
      style={{ padding: "100px 160px", backgroundColor: "#FFFDF6" }}
    >
      <div
        className={poppinsBlack.className}
        style={{ fontSize: 96 + "pt", color: "#F96E47" }}
      >
        OUR EVENTS
      </div>

      <div style={{ fontSize: 16 + "pt", marginBottom: "25px" }}>
        We regularly host meetups and events in Auckland, providing a vibrant
        and diverse community for students of all backgrounds who are studying
        technical disciplines. Our events offer direct access to resources,
        connections, and advice that can help you take your next career step.
        Whether you are looking to connect with experienced tech professionals,
        employers, or recruiters, or simply want to meet other students facing
        similar challenges, we have something for everyone.
      </div>

      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.name}
          date={`${event.date.start} @ ${event.location}`}
          paragraph={trimDescription(event.desc, 330)} //trim to 130 characters
          image={event.cover}
          btn={{
            text: "Sign Up",
            href: event.link,
            type: "primary",
            width: "cardButton",
            target: "_blank",
          }}
        />
      ))}

      <div
        className={poppinsRegular.className}
        style={{ textAlign: "center", fontSize: "24pt", marginTop: "50px" }}
      >
        Do you have any questions about our events? Contact us!
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
    </>
  );
}

