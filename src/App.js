 

import React, { Component } from 'react'
import RecipeDetail from './RecipeDetail'
import RecipeList from './RecipeList'
import CreateForm from './CreateForm';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showCreate:false,
      recipie:[],
      selected:[],
    }
  }
handleCreate(){
  this.setState({
    showCreate:true
  })
}

handleCreateRecipe(name,ingredients,instructions){
  console.log(name,ingredients,instructions);
 const newRecipe=this.state.recipie.concat({
  name:name,
  ingredients:ingredients,
  instructions:instructions
 });
 this.setState({
  recipie:newRecipe
 })
  
}
 
handleSelectRecipie(recipie ){
this.setState({
selected:recipie
})
}
 
  render() {
    return (
      <div className='container'>
      <h1>Recipe Database</h1>
      <div className='row'>
       <div className='col-md-4'><button className='btn btn-primary' onClick={this.handleCreate.bind(this)}> Create new Recipe</button><RecipeList recipie={this.state.recipie} onselectRecipie={this.handleSelectRecipie.bind(this)}/></div>
       <div className='col-md-8'>{this.state.showCreate ? <CreateForm onSubmit={this.handleCreateRecipe.bind(this)}/> :<RecipeDetail recipie={this.state.selected}/>}</div>
      </div>
     </div>
   
    )
  }
}

export default App
