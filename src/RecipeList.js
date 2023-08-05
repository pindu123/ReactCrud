import React from 'react'

const RecipeList = ({recipie,onselectRecipie}) => (
  
    <div>
      <ul className='list-unstyled'>
        {
         recipie.map(r=><li key={r.id}>  <a href="#" onClick={onselectRecipie.bind(r)}>{r.name} </a></li>)
        }
      </ul>
    </div>

);
 
export default RecipeList
