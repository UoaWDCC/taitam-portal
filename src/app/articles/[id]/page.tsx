"use client";

import { useRouter } from "next/router";
import { EventCard } from "@/app/(components)/bigCard"; // Import your EventCard component
import { fetchArticlesFromNotion } from "../../../../artsData";
import ArticlesCard from "@/app/(components)/ArticlesCard";
import { css } from "@linaria/core";
import Image from "next/image";
import { useState, useEffect } from "react";

const headerImage = css`
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  z-index: -1;
  position: absolute;

  img {
    border: 1px solid #000;
    object-fit: cover;
  }

  @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    position: absolute;
    height: auto;

    img {
      max-width: 362px;
      max-height: 150px;
      margin-left: 16px;
      margin-top: 45px;
      margin-right: 16px;
      border: 1px solid #000;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    position: absolute;
    height: auto;

    img {
      max-width: 100%;
      height: 300px;
      margin-left: 28px;
      margin-top: 40px;
      margin-right: 28px;
    }
  }
`;

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

const cardContainer = css`
  margin-left: 65px;
  display: block;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-top: 280px;

  @media only screen and (max-width: 600px) {
    margin-top: 170px;
  }
`;

export default function Page({ params }: { params: { id: string } }) {


  const [articles, setArticles] = useState<ArticleData[]>([]);

  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    fetchArticlesFromNotion().then((arts: ArticleData[]) => {
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

  const selectedArticle = articles.find((article) => article.articleId == params.id);

  //console.log(selectedArticle);

  return (
    <>
      <div className={root}>
        <h1 className={title}>ARTICLES</h1>

        <div className={headerImage}>
          {selectedArticle && selectedArticle.cover && (
            <Image
              src={selectedArticle.cover}
              width={1190}
              height={310}
              alt="Landing Image"
            />
          )}
        </div>

        <div className={cardContainer}>
          <div>
            {selectedArticle ? (
              <ArticlesCard
                title={selectedArticle.name}
                reference={`By ${selectedArticle.author} | ${selectedArticle.date.start}`}
                par1={selectedArticle.desc}
                subtitle="A Networking Haven for Aspiring Tech Professionals:"
                par2="Attending a career fair can be a game-changer for aspiring tech professionals..."
                image={selectedArticle.cover}
                par3="Our career fair is designed to cater to a wide range of tech career paths..."
                par4="Aside from networking opportunities, our career fair also features informative sessions..."
                par5="Attending a career fair is an excellent way to jumpstart your tech career..."
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

//   export async function generateStaticParams() {
//     const posts = await fetchArticlesFromNotion()

//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }

//   export async function generateStaticParams() {
//     const articles:artStruct = await fetchArticlesFromNotion()

//     return posts.map((post: { slug: any; }) => ({
//       slug: post.slug,
//     }))
//   }
