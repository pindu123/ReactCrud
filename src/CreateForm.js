import React, { Component } from 'react'

export class CreateForm extends Component {
    constructor()
    {
        super();
        this.state={
            name:'',
            ingredients:'',
            instructions:'',
            Created:false,
        }
    }
    handleInstructions=(event)=>{
        this.setState({
            instructions:event.target.value
        })
    }
    handleName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleIngridient=(event)=>{
        this.setState({
            ingredients:event.target.value
        })
    }
    handleSubmit=(event)=>
    {
        event.preventDefault();
        const {name,ingredients,instructions}=this.state
        this.props.onSubmit(name,ingredients,instructions);
        this.setState({Created:true})
        this.resetForm()
    }
    resetForm(){
        this.setState({
      name:'',
      ingredients:'',
      instructions:'',
        })
    }
    render()
    {
    return (
      <div>
           <form onSubmit={this.handleSubmit.bind(this)} >
            {this.state.Created ==true  && <div className='alert alert-success'>Your recipe created</div>}
            <div className='form-group'>
          
     
            <label htmlFor='name'>Recipe Name :</label>
            <input type="text" className='form-control' value={this.state.name} id="name" placeholder='enter Recipe name ..'  onChange={this.handleName}/>
            
            </div>
            
            <div className='form-group'>
                <label htmlFor='ingredients'>Ingridient:</label>
                <textarea rows='5'   className='form-control' id='ingredients' value={this.state.ingredients}  onChange={this.handleIngridient} placeholder='enter ingridients'></textarea>
            </div>

            <div  className='form-group'>
                <label htmlFor='instructions'>instructions:</label>
                <textarea rows='5' className='form-control' id='instructions' value={this.state.instructions} onChange={this.handleInstructions}></textarea>
            </div>
            <input type='submit' value='create' className='btn btn-secondary'/>
            </form>
      </div>
    )
  }
}

// CreateForm.propTypes={
//     onSubmit:React.PropTypes.func.isRequired
// };
export default CreateForm
