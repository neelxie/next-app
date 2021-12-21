import React from 'react'
import { useRouter } from 'next/router'

export default function DocsPage() {
  const router = useRouter()
  const { params } = router.query
  console.log(params)
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  )
}
