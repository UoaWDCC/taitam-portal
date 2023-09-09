import { Poppins } from "next/font/google";
import { EventCard } from "@/app/(components)/bigCard"; // Import your EventCard component
import { fetchArticlesFromNotion } from "../../../artsData";
import React from "react";
//import '../src/app/globals.scss'
import { css } from "@linaria/core";
import Button from "../(components)/Button";
import Link from "next/link";

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

export default async function ArticlesPage() {
  const articles: artStruct = await fetchArticlesFromNotion();

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

        {articles.map((art, index) => (
          <li key={index}>
            <Link href={`/articles/${index}`}>{art.name}</Link>
          </li>

          // <EventCard
          //   key={index}
          //   title={art.name}
          //   date={`By ${art.author} | ${art.date.start}`}
          //   paragraph={trimDescription(art.desc, 350)} //trim to 350 characters for articles page
          //   image={art.cover}
          //   btn={{
          //     text: "Read More",
          //     href: `/articles/${index}`,
          //     type: "secondary",
          //     width: "cardButton",
          //   }}

          // />
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

// interface DynamicPageProps {
//   articles: artStruct; // Use the artStruct type here
// }

// const ArticlesPage = ({ articles }: DynamicPageProps) => {

//   return (
//     <>
//       <div className={root}>
//         <h1 className={title}>ARTICLES</h1>
//         <p style={{ marginTop: "-70px" }}>
//           As a tech recruitment agency that is committed to making a difference
//           in the industry, we’re passionate about giving back to the community
//           and building tomorrow’s technology professionals from the grassroots
//           up. From hosting quarterly Korero Potentia events and attending local
//           meetups, to one of our many sponsorships with local businesses and
//           universities – everything we do is about our communities.
//         </p>

//         {articles.map((art, index) => (
//           <EventCard
//             key={index}
//             title={art.name}
//             date={`By ${art.author} | ${art.date.start}`}
//             paragraph={trimDescription(art.desc, 350)} //trim to 350 characters for articles page
//             image={art.cover}
//             btn={{
//               text: "Read More",
//               href: `/articles/${index}`,
//               type: "secondary",
//               width: "cardButton",
//             }}
//           />
//         ))}

//         <div
//           className={poppinsRegular.className}
//           style={{ textAlign: "center", fontSize: "20pt", marginTop: "50px" }}
//         >
//           Do you have any questions? Contact us!
//         </div>
//         <div
//           className={poppinsMedium.className}
//           style={{
//             marginTop: "20px",
//           }}
//         >
//           <Button
//             text="Contact Us"
//             href="/contact"
//             type="primary"
//             width="largeButton"
//           ></Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ArticlesPage

// // Fetch articles and pass them as props
// export async function getServerSideProps() {
//   const articles = await fetchArticlesFromNotion();
//   return { props: { articles } };
// }
