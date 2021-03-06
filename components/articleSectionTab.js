import Image from "next/image";
import styled from "styled-components";

export default function ArticleSectionTab({ articleSection, title, setTab }) {
  const handleClickMore = (categoryID) => {
    setTab(categoryID);
  };

  return (
    <section className="px-8 py-6">
      <div className="shadow bg-gray-50">
        <div className="px-6 pt-6">
          <button
            className="text-xl font-bold uppercase"
            onClick={() => handleClickMore(articleSection[0].categoryId)}
          >
            {title}
          </button>
        </div>
        <div className="flex flex-wrap -mx-3 px-6 py-4">
          {articleSection.slice(0, 6).map((article, index) => {
            return (
              <ArticleCard
                key={index}
                className="flex-50 px-3"
                href={`${article.url.url}`}
              >
                <Image
                  src={`${process.env.IMG_API_URL}${article.thumbnail.hash}/w1200`}
                  width={340}
                  height={200}
                  layout="intrinsic"
                  className="rounded"
                />
                <h3 className="font-medium">{article.title}</h3>
                <h5 className="text-md text-gray-400 font-light">
                  {article.publisher}
                </h5>
              </ArticleCard>
            );
          })}
        </div>
        <Footer>
          <div className="py-1 px-6 h-10 text-sm text-gray-500 inline-flex flex-auto items-center justify-end">
            <span>
              <button
                onClick={() => handleClickMore(articleSection[0].categoryId)}
              >
                Lihat Lainnya
              </button>
            </span>
          </div>
        </Footer>
      </div>
    </section>
  );
}

const ArticleCard = styled.a`
  &:nth-child(n + 3) {
    margin-top: 20px;
  }
`;

const Footer = styled.div`
  text-align: right;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;

  &:after {
    content: "";
    width: calc(100% - 32px);
    height: 1px;
    position: absolute;
    top: 0;
    left: 16px;
    background-color: #eee;
  }
`;
