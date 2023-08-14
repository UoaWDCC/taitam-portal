import { Poppins } from "next/font/google";
import { EventCard } from "../../src/app/(components)/bigCard";
import Button from "../../src/app/(components)/Button";
import React from "react";
import { fetchEventsFromNotion } from "../../eventsData";

const poppinsBlack = Poppins({ weight: "900", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsLight = Poppins({ weight: "300", subsets: ["latin"] });

function trimDescription(description: string, maxLength: number): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}


interface EventsPageProps {
  events: rowsStruct; // Use the artStruct type here
}


const EventsPage = ({ events }: EventsPageProps) =>  {
  
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
        title = {event.name}
        date = {`${event.date.start} @ ${event.location}`}
        paragraph={trimDescription(event.desc, 130)} //trim to 130 characters
        image = {event.cover}
        
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
    </div>
  );
}

export default EventsPage;


// Fetch articles and pass them as props
export async function getServerSideProps() {
  const events = await fetchEventsFromNotion();
  return { props: { events } };
}