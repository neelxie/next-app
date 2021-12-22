import React from 'react'
import Link from 'next/link'

export default function Product({productId = 23}) {
  return (
    <div><Link href="/"><a>Home</a></Link>
      <h1>All the products we have.
        
      </h1>
      <Link href={`/product/${productId}`}><a>Product {productId}</a></Link>
    </div>
  )
}
