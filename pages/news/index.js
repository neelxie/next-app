import React from "react";

function News({news}) {
  return (
    <>
      <h1>List of news items</h1>
      {
        news.map(item => (
          <div key={item.id}>
            <h2> {item.id} {item.title} | {item.category}</h2>
          </div>
        ))
      }
    </>
  );
}

export default News;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
