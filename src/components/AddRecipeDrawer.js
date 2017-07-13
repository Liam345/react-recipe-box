import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import '../App.css';

class AddRecipeDrawer extends Component{
    constructor(props){
        super(props);
        this.state ={
            open:false,
            name:"",
            image:"",
            ing:""
           
        }
    }
   handleOpen=()=>{
    this.setState({open:true});
   } 
   handleClose=()=>{
       this.setState({open:false});
   }
   addRecipe=()=>{
       console.log(this.state.name);
       console.log(this.state.image);
       console.log(this.state.ing);
       const newRecipe = {key:this.props.index,name:this.state.name,image:this.state.image,ingredients:this.state.ing}
       this.props.newRecipe(newRecipe);
       this.handleClose();
   }
   handleNameChange=(term)=>{
this.setState({name:term})
   }
   handleImageChange=(term)=>{
this.setState({image:term})
   }
   handleIngChange=(term)=>{
this.setState({ing:term})
   }
render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        buttonStyle={eBtnStyle}
        
      />,<FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addRecipe}
        buttonStyle={dBtnStyle}
        
      />,
    ];
    //Styling
    const bStyle = {
      backgroundColor:'#ac4030'
    };
    const buttonStyle={
        backgroundColor:'#bfae97',
    };
    const formStyle={
        backgroundColor:'#ac4030',
        fontSize:'30px',
        fontFamily: 'Catamaran, sans-serif',
    };
    const dBtnStyle ={
      backgroundColor:'#ac4030'
    }

    const eBtnStyle = {
      backgroundColor: '#bfae97'
    }
    //End of Styling
return(
    <Drawer open={true}  title="Recipe Box" width={200} containerStyle={bStyle}>
    <h1>Recipe Box</h1>
    <RaisedButton onClick={(e)=>this.handleOpen(e)} buttonStyle={buttonStyle}>Add recipe</RaisedButton>
    <Dialog 
          
          titleStyle={formStyle}
          actions={actions}
          actionsContainerStyle="eBtnStyle"
          modal={false}
          open={this.state.open}
          contentStyle={buttonStyle}
          bodyStyle={formStyle}
          actionsContainerStyle={formStyle}
        
          
        >
                    <table>
                        <tbody>
                            <tr className="formLabel"><td><label >Recipe name:</label></td></tr>
                            <tr><td><input className="formInput"  type="text" id="recipeName" required onChange={(e)=>this.handleNameChange(e.target.value)}></input></td></tr>
                            <tr className="formLabel"><td> <label>Recipe image url:</label></td></tr>
                            <tr><td><input className="formInput" required type="text" required onChange={(e)=>this.handleImageChange(e.target.value)}/></td></tr>
                            <tr className="formLabel"><td><label>Recipe Ingredients:</label></td></tr>
                            <tr><td><textarea className="textArea" type="text" required required onChange={(e)=>this.handleIngChange(e.target.value)}/></td></tr>
                        </tbody>
                     </table>
        </Dialog>
    </Drawer>
);
}

}

export default AddRecipeDrawer;
