import { css } from "@linaria/core";
import Contact from "./Pages/Contact";

const styleContainer = css`
  font-family: sans-serif;
`;

export default function Home() {
  return (
    <div className={styleContainer}>
      Index page

      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
