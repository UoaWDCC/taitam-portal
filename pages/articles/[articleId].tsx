// pages/[id].tsx
import { useRouter } from "next/router";
import { EventCard } from "@/app/(components)/bigCard"; // Import your EventCard component
import { fetchArticlesFromNotion } from "../../artsData"; // Import your fetchArticlesFromNotion function
import ArticlesCard from "@/app/(components)/ArticlesCard";
import { css } from "@linaria/core";
import Image from "next/image";

const headerImage = css`
  max-width: 1190px;
  height: 310px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  z-index: -1;
  position: absolute;
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
`;

interface DynamicPageProps {
  articles: artStruct; // Use the artStruct type here
}

const DynamicPage = ({ articles }: DynamicPageProps) => {
  const router = useRouter();

  // Find the article index that matches the articleId
  const articleId = parseInt(router.query.articleId as string); // Convert to a number

  const selectedArticle = articles[articleId];

  return (
    <>
      <div className={root}>
        <h1 className={title}>ARTICLES</h1>

        <div className={headerImage} >
          <Image src={selectedArticle.cover}  width = {1190} height = {310} alt="Landing Image"></Image>
        </div>
        <div className={cardContainer}>
          <div>
            <ArticlesCard
              title={selectedArticle.name}
              reference={`By ${selectedArticle.author} | ${selectedArticle.date.start}`}
              par1={selectedArticle.desc}
              subtitle="A Networking Haven for Aspiring Tech Professionals:"
              par2="Attending a career fair can be a game-changer for aspiring tech professionals. It serves as a networking haven where you can meet and interact with representatives from top-tier companies actively seeking talented individuals like you. This face-to-face interaction provides a unique platform to showcase your skills, demonstrate your passion for technology, and make a lasting impression on potential employers."
              image={selectedArticle.cover}
              par3="Our career fair is designed to cater to a wide range of tech career paths. Whether you are interested in software development, data analysis, cybersecurity, artificial intelligence, or any other tech field, there will be opportunities for you to explore. Companies from various sectors such as finance, healthcare, e-commerce, and entertainment will be in attendance, offering diverse avenues for career growth."
              par4="Aside from networking opportunities, our career fair also features informative sessions, workshops, and panel discussions conducted by industry experts. These sessions provide invaluable insights into the latest trends, technologies, and challenges in the tech industry. Whether it's a panel discussion on the future of AI or a workshop on mastering coding languages, you will gain knowledge that can give you a competitive edge in your job search and career advancement."
              par5="Attending a career fair is an excellent way to jumpstart your tech career. From networking with industry leaders to gaining valuable insights, our upcoming career fair promises to be an event that can shape your professional trajectory. Don't miss this opportunity to connect with top companies, explore exciting job prospects, and take your first step towards launching a successful tech career. Join us at our career fair and unlock a world of possibilities! Attending a career fair is an excellent way to jumpstart your tech career. From networking with industry leaders to gaining valuable insights, our upcoming career fair promises to be an event that can shape your professional trajectory. Don't miss this opportunity to connect with top companies, explore exciting job prospects, and take your first step towards launching a successful tech career. Join us at our career fair and unlock a world of possibilities! Attending a career fair is an excellent way to jumpstart your tech career. From networking with industry leaders to gaining valuable insights, our upcoming career fair promises to be an event that can shape your professional trajectory. Don't miss this opportunity to connect with top companies, explore exciting job prospects, and take your first step towards launching a successful tech career. Join us at our career fair and unlock a world of possibilities!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPage;

// Fetch articles and pass them as props
export async function getServerSideProps() {
  const articles = await fetchArticlesFromNotion();
  return { props: { articles } };
}
