import React from 'react'

export default function UserList({users}) {
  return <><h1>List of Users</h1>{
    users.map(user => <li key={user.id}>{user.name}</li>)
    
  }</>
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: {
      users
    }
  }
}

