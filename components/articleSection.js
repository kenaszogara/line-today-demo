import Image from "next/image";
import styled from "styled-components";

export default function ArticleSection({ articleSection, title }) {
  return (
    <section className="px-8 py-6">
      <div className="text-xl font-bold mb-4 uppercase">{title}</div>
      <div className="flex flex-wrap -mx-3">
        {articleSection.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              className="flex-50 px-3"
              href={`${article.url.url}`}
            >
              <div>
                <Image
                  src={`${process.env.IMG_API_URL}${article.thumbnail.hash}/w1200`}
                  width={340}
                  height={200}
                  layout="intrinsic"
                  className="rounded"
                />
              </div>

              <h3 className="font-medium">{article.title}</h3>
              <h5 className="text-md text-gray-400 font-medium">
                {article.publisher}
              </h5>
            </ArticleCard>
          );
        })}
      </div>
    </section>
  );
}

const ArticleCard = styled.a`
  &:nth-child(n + 3) {
    margin-top: 20px;
  }
`;
