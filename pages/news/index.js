import React from 'react'

function News() {
  return (
    <h1>
     List of news items 
    </h1>
  )
}

export default News

export async function getServerSideProps(){
  const response = await fetch('https://localhost:4000/news')
  const data = await response.json()
}
