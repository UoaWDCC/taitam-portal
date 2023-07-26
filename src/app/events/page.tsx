import { Poppins } from "next/font/google";
import { EventCard } from "../(components)/bigCard";
import Button from "../(components)/Button";
import stockImg1 from "../(images)/events1.png";
import stockImg2 from "../(images)/events2.png";
import stockImg3 from "../(images)/events3.png";
import React from "react";

const poppinsBlack = Poppins({ weight: "900", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsLight = Poppins({ weight: "300", subsets: ["latin"] });

const fetchFromNotion = async () => {
  const res = await fetch("http://localhost:3001/api/notion");
  const data = await res.json()
  console.log(data)
  return JSON.parse(JSON.stringify(data))
};

export default async function EventsPage() {
  const rows: rowsStruct = await fetchFromNotion();
  console.log("rows on front end ------------------------------", rows)
  
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
      <EventCard
        title={rows[0].name}
        date={"30 APR 6pm @ OGGB Building, UOA"}
        paragraph={rows[0].desc
        }
        image={rows[0].cover}
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
    </div>
  );
}
