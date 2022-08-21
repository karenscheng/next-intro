import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-rocks">NextJS Rocks!</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
