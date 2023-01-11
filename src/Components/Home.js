import React from 'react'
import Nav from './Nav'
import Homebanner from './Homebanner'
import Recipe from './Recipe'
function Home() {
  return (
    <div>
        <Nav/>
        <Homebanner/>
        <Recipe/>
    </div>
  )
}

export default Home