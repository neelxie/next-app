import React from "react";
import Link from "next/link";
export default function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <a>
                <h2>
                  {post.id} {post.title}
                </h2>{" "}
                <hr />{" "}
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
