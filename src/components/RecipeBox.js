import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';
import Dialog from 'material-ui/Dialog';
// import Ingredients from './RecipeIngredients'; 
const divStyle = {
        width:"50%",
        height:"50%",
        margin:"auto"
    };
    
class RecipeBox extends Component{

  constructor(props){
    super(props);
    this.state={
      editOpen:false,
      deleteOpen:false,
      name:this.props.recipe.name,
      image:this.props.recipe.image,
      ing:this.props.recipe.ingredients
    }
  }

    deleteRecipe=(e)=>{
      this.props.onRecipeDelete(this.props.recipe);
    }
    handleOpen=(e)=>{
      this.setState({editOpen:true});
    }
    handleClose=()=>{
      this.setState({editOpen:false});
    }
    handleDeleteOpen=(e)=>{
      this.setState({deleteOpen:true});
    }
    handleDeleteClose=()=>{
      this.setState({deleteOpen:false});
    }
    
    editRecipe=()=>{
      console.log("This is the recipe to edit");
      console.log(this.props.recipe);
      console.log("This is the new recipe");
      const editedRecipe = {key:this.props.recipe.key,name:this.state.name,image:this.state.image,ingredients:this.state.ing};
      console.log(editedRecipe);
      this.props.onRecipeEdit(editedRecipe);

    }

    handleNameChange=(name)=>{
      this.setState({name})
    }
    handleImageChange=(image)=>{
      this.setState({image});
    }
    handleIngChange=(ing)=>{
      this.setState({ing});
    }
    render(){
      const actionsEdit = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
        style={dBtnStyle}
      />,<FlatButton
        label="Add"
        primary={true}
        onClick={this.editRecipe}
        keyboardFocused={true}
        style={eBtnStyle}
      />,
    ];
    const actionsDelete = [
      <FlatButton
        label="No"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleDeleteClose}
      />,<FlatButton
        label="Yes"
        primary={true}
        onClick={this.deleteRecipe}
        keyboardFocused={true}
        
      />,
    ];

    //Styling component
    const chStyle = {
      backgroundColor:'#f1d6b0',
      fontFamily: 'Catamaran, sans-serif',
      borderStyle:'solid',
      borderWidth:'5px'
          };

    const ctStyle = {
      backgroundColor:'#fce6c8',
      fontFamily:'Merriweather Sans, sans-serif',
      
    };

    const dBtnStyle ={
      backgroundColor:'#ac4030'
    }

    const eBtnStyle = {
      backgroundColor: '#bfae97'
    }
    const formStyle={
        backgroundColor:'#ac4030',
        fontSize:'30px',
        fontFamily: 'Catamaran, sans-serif',
    };
    //End of Styling component

    return(
    <Card className={"recipeBox"} >
    <CardHeader
      title={this.props.recipe.name}
      actAsExpander={true}
      showExpandableButton={true}
      style={chStyle}
    />
    <CardMedia expandable={true} mediaStyle={divStyle} style={ctStyle}>
      <img src={this.props.recipe.image} alt="" />
    </CardMedia >
    <CardText expandable={true} style={ctStyle}>
    <p>{this.props.recipe.ingredients}</p>
    </CardText >
    <CardActions expandable={true} style={ctStyle}>
      <FlatButton label="Delete" onClick={(e)=>this.handleDeleteOpen(e)} style={dBtnStyle}/>
      <FlatButton label="Edit" onClick={(e)=>this.handleOpen(e)} style={eBtnStyle}/>
    </CardActions>
    <Dialog
          actions={actionsEdit}
          modal={false}
          open={this.state.editOpen}
          bodyStyle={formStyle}
          actionsContainerStyle={formStyle}
        >
                    <table>
                        <tbody>
                            <tr className="formLabel"><td><label >Recipe name:</label></td></tr>
                            <tr><td><input className="formInput"  type="text" id="recipeName" required onChange={(e)=>this.handleNameChange(e.target.value)} defaultValue={this.props.recipe.name}></input></td></tr>
                            <tr className="formLabel"><td> <label>Recipe image url:</label></td></tr>
                            <tr><td><input className="formInput" required type="text" required onChange={(e)=>this.handleImageChange(e.target.value)} defaultValue={this.props.recipe.image}/></td></tr>
                            <tr className="formLabel"><td><label>Recipe Ingredients:</label></td></tr>
                            <tr><td><textarea className="textArea" type="text" required required onChange={(e)=>this.handleIngChange(e.target.value)} defaultValue={this.props.recipe.ingredients}/></td></tr>
                        </tbody>
                     </table>
        </Dialog>
        <Dialog
          actions={actionsDelete}
          modal={false}
          open={this.state.deleteOpen}
          bodyStyle={formStyle}
          actionsContainerStyle={formStyle}
        >
          Are you sure?
        </Dialog>
    </Card>
    );
    }
}

export default RecipeBox;
