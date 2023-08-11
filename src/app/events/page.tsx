"use client";

import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/bigCard";
import Button from "../(components)/Button";
import stockImg1 from "../(images)/events1.png";
import stockImg2 from "../(images)/events2.png";
import stockImg3 from "../(images)/events3.png";
import React from "react";
import { useState, useCallback, useEffect } from 'react';

const poppinsBlack = Poppins({ weight: "900", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsLight = Poppins({ weight: "300", subsets: ["latin"] });

const tabletBreakpoint = 800;
const mobileBreakpoint = 480;

// Use this to identify breakpoints
// Will return true if input breakpoint is reached 
// i.e. screen size is equal to/less than the breakpoint
const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const main = css`
  padding: 100px 160px;
  backgroundColor: #FFFDF6;
  
  @media (max-width: ${tabletBreakpoint}px) {
    padding: 0 30px 100px;
  }
  
  @media (max-width: ${mobileBreakpoint}px) {
    padding: 0 16px 100px;
  }
`
const title = css`
  font-size: 96pt; 
  color: #F96E47;
  
  @media (max-width: ${tabletBreakpoint}px) {
    font-size: 48pt;
  }
  
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 36pt;
  }
`

const paragraph = css`
  font-size: 16pt;
  margin-bottom: 25px
`

export default function EventsPage() {
  return (
    <div
      className={`${poppinsLight.className} ${main}`}
    >
      <div
        className={`${poppinsBlack.className} ${title}`}
      >
        OUR EVENTS
      </div>
      <div className={ paragraph }>
        We regularly host meetups and events in Auckland, providing a vibrant
        and diverse community for students of all backgrounds who are studying
        technical disciplines. Our events offer direct access to resources,
        connections, and advice that can help you take your next career step.
        Whether you are looking to connect with experienced tech professionals,
        employers, or recruiters, or simply want to meet other students facing
        similar challenges, we have something for everyone.
      </div>
      <EventCard
        title={"Launch Your Tech Career at Our Career Fair"}
        date={"30 APR 6pm @ OGGB Building, UOA"}
        paragraph={
          "Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
        }
        image={stockImg1}
        btn={{
          text: "Sign Up",
          href: "https://events.humanitix.com/test-event-1-o7k7hc2f",
          type: "primary",
          width: "cardButton",
          target: "_blank",
        }}
      />
      <EventCard
        title={"Launch Your Tech Career at Our Career Fair"}
        date={"30 APR 6pm @ OGGB Building, UOA"}
        paragraph={
          "Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
        }
        image={stockImg2}
        btn={{
          text: "Sign Up",
          href: "https://events.humanitix.com/test-event-2-2d9curo3",
          type: "primary",
          width: "cardButton",
          target: "_blank",
        }}
      />
      <EventCard
        title={"Launch Your Tech Career at Our Career Fair"}
        date={"30 APR 6pm @ OGGB Building, UOA"}
        paragraph={
          "Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."
        }
        image={stockImg3}
        btn={{
          text: "Sign Up",
          href: "https://events.humanitix.com/test-event-3-hbr5ydfn",
          type: "primary",
          width: "cardButton",
          target: "_blank",
        }}
      />
      <div
        className={poppinsRegular.className}
        style={{ textAlign: "center", fontSize: "24pt", marginTop: "50px" }}
      >
        Do you have any questions about our events?
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
          width = {useMediaQuery(525) ? "smallButton" : "largeButton"}
        ></Button>
      </div>
    </div>
  );
}
