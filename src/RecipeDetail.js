import React from 'react'

const RecipeDetail = ({recipie}) => {
  
    {
    recipie ?
    <div>
        
      <h2>{recipie.name}</h2>
      <h3>ingridients</h3>
      <p>{recipie.ingridients}</p>
      <h3>instructions</h3>
      <p>{recipie.instructions}</p>
         
    </div>
    :
    <div>Choose a Recipie or create  a recipie</div>
}
    
  
}

export default RecipeDetail
