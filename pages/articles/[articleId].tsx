// pages/[id].tsx
import { useRouter } from 'next/router';
import { EventCard } from '@/app/(components)/bigCard';// Import your EventCard component
import { fetchArticlesFromNotion } from '../../artsData'; // Import your fetchArticlesFromNotion function

interface DynamicPageProps {
  articles: artStruct; // Use the artStruct type here
}

const DynamicPage = ({ articles }: DynamicPageProps) => {
  const router = useRouter();

  // Find the article index that matches the articleId
  const articleId = parseInt(router.query.articleId as string); // Convert to a number


  const selectedArticle = articles[articleId];

  return (
    <div>
      <EventCard
        title={selectedArticle.name}
        date={`By ${selectedArticle.author} | ${selectedArticle.date}`}
        paragraph={selectedArticle.desc}
        image={selectedArticle.cover}
        btn={{
          text: "Read More",
          href: `/articles/${selectedArticle.link}`,
          type: "secondary",
          width: "cardButton",
        }}
      />
    </div>
  );
};

export default DynamicPage;

// Fetch articles and pass them as props
export async function getServerSideProps() {
  const articles = await fetchArticlesFromNotion();
  return { props: { articles } };
}
