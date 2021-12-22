import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Home() {
  const router = useRouter()


  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    router.push('/product')
    // same as: router.replace('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/product"><a>Blog</a></Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
