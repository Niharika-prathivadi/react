import React from 'react'
import '../Components/CSS/Recipe.css'
function Recipe() {
  return (
    <div className='recipe_main'>
        <h1>Latest Recipes</h1>
        <div className='recipe_grid'>
        <div>
            <img src={require('../Components/Images/r1.jpg')}/>
        </div>
        </div>
    </div>
  )
}

export default Recipe