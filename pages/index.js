import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import CategoryList from "../components/categoryList";
import Carousel from "../components/carousel";
import ArticleSection from "../components/articleSection";
import ArticleSectionTab from "../components/articleSectionTab";

export default function Home({ categoryList, categories }) {
  const [isActive, setActive] = useState(categoryList[0].id);
  const [templates, setTemplates] = useState(null);

  useEffect(() => {
    const category = categories.find((category) => category.id == isActive);
    console.log(category.templates);
    const sortedTemplate = category.templates.sort((a, b) =>
      a.type < b.type ? -1 : 1
    );
    setTemplates(sortedTemplate);
  }, [isActive]);

  return (
    <div>
      <div
        className="
        container 
        flex-row 
        items-center 
        justify-center 
        mx-auto 
        bg-gray-50 
        max-w-screen-md"
      >
        <Head>
          <title>LINE TODAY</title>
          <link
            rel="icon"
            data-hid="icon"
            href="https://static-today.line-scdn.net/dist/8c5fc3ca/static/meta/icon192.png"
            sizes="192x192"
            type="image/png"
          ></link>
        </Head>

        {/* titlebar */}
        <div className="flex p-2">
          <button className="mr-auto p-2">
            <img
              src="https://static-today.line-scdn.net/dist/8c5fc3ca/static/img/brand-logo-rectangle-today-solid.svg"
              alt="LINE TODAY"
            />
          </button>
          <button className="mx-2">Masuk</button>
        </div>

        {/* tab */}
        <div>
          <CategoryList
            categoryList={categoryList}
            isActive={isActive}
            setActive={setActive}
          />
        </div>

        {/* main content */}
        <main style={{ backgroundColor: "#f5f5f5" }}>
          {templates &&
            templates.map((item, index) => {
              const type = item.type;
              if (type == 6) {
                return (
                  <Carousel key={index} articles={item.sections[0].articles} />
                );
              } else if (type == 59) {
                return (
                  <ArticleSection
                    key={index}
                    title={item.title}
                    articleSection={item.sections[0].articles}
                  />
                );
              } else if (type == 6301 || type == 63) {
                return (
                  <ArticleSectionTab
                    key={index}
                    title={item.title}
                    articleSection={item.sections[0].articles}
                    setTab={setActive}
                  />
                );
              }
            })}
        </main>
      </div>

      {/* footer */}
      <div className="px-6 py-8"></div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${process.env.API_LINE}`);
  // console.log(res.data.result.categoryList);
  return {
    props: {
      categoryList: res.data.result.categoryList,
      categories: res.data.result.categories,
    },
  };
}
