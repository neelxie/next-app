import React from 'react'

export default function Post({post}) {
  return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p></>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const post = await response.json()
  return {
    props: {
      post  // same as: props: { post: post } 
    },
  }
}