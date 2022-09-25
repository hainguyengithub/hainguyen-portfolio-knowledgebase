import Header from "@components/Header";
import { server } from "config";
import React from "react";

function DrupalIndex(props) {
  return (
    <div>
      <Header title={props.articles.title} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  console.log(`${server}/api/drupal/${context.params.id}`);
  const result = await fetch(`${server}/api/drupal/${context.params.id}`);
  const articles = await result.json();
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false
  };
};

export default DrupalIndex;
