import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddRecipeDrawer from './components/AddRecipeDrawer';
import RecipeBox from './components/RecipeBox';


class App extends Component {
  constructor(props){
    super(props);
        this.state={
           
            recipes: JSON.parse(localStorage.getItem('recipes'))||[{key:0,name:"Salsa Verde",image:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/salsa-verde-2.jpg?itok=R9-68UMh",ingredients:"1 cup flat-leaf parsley leaves,1 cup basil leaves,1 garlic clove chopped,2 teaspoons capers drained,1/2 cup extra-virgin olive oil,1 lemon, juiced,sea salt"},
            {key:1,name:"Spicy black bean tacos",image:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/spicy-black-bean-tacos.jpg?itok=RTBXRL7L",ingredients:"1 onion, peeled and diced finely,2 cloves garlic, peeled and crushed,2 cups dried black beans, soaked overnight (see Note),2-3 chipotle chillies in adobo sauce, roughly chopped (see Note),half cup vegetable stock or water ,1 tsp cumin, ground"},
            {key:2,name:"Maple mustard pulled pork",image:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1119469_10.jpg?itok=2GIQyKfz",ingredients:"200g sea salt,300g light muscovado sugar,2kg/4lb 8oz piece pork shoulder,100ml maple syrup,100g wholegrain mustard,2 tbsp English mustard powder"},
            {key:3,name:"Salmon and spinach with Tartare sauce",image:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--52867_12.jpg?itok=pnLXWqFK", ingredients:"1 tsp sunflower or vegetable oil,2 skinless salmon fillets,250g bag spinach,2 tbsp reduced-fat crème fraîche,1 tsp caper,2 tbsp flat-leaf parsley,lemon"}
            ], 
        };

  }
  deleteRecipe(item){
    console.log("Recipe to be deleted is");
    console.log(item);
    console.log("key of recipe to be deleted is");
    console.log(item.key);
    const allRecipeArr = JSON.parse(localStorage.getItem('recipes'));
    //get index of recipe to be deleted
    const deletedRecipePos = allRecipeArr.findIndex(recipe=>(recipe.key===(item.key)));
    console.log(deletedRecipePos);
    //delete the recipe from the array of all recipes
    allRecipeArr.splice(deletedRecipePos,1);
    this.setState({recipes:allRecipeArr});
  }
  addRecipe(item){
    console.log("From the Main Page");
    console.log(item);
    this.setState({recipes:this.state.recipes.concat(item)});
    
  }
  editRecipe(item){
    console.log("From main page this is the edited recipe");
    console.log(item);
    const allRecipeArr = JSON.parse(localStorage.getItem('recipes'));
    const editedRecipePos = allRecipeArr.findIndex(recipe=>(recipe.key===(item.key)));
    console.log(editedRecipePos);
    allRecipeArr.splice(editedRecipePos,1,item);
    this.setState({recipes:allRecipeArr});
  }

  render() {
    localStorage.setItem('recipes',JSON.stringify(this.state.recipes));
      const recipesItems = this.state.recipes.map((recipe)=>{ 
        return <RecipeBox key={recipe.key} recipe={recipe} onRecipeDelete={(recipeToDelete)=>this.deleteRecipe(recipeToDelete)}
          onRecipeEdit={(recipeToEdit)=>this.editRecipe(recipeToEdit)}/>
      });
    return (
      
      <div className="App">
          <MuiThemeProvider>
      <div className="AppContainer">      
      <div className="Left-Area">
            <AddRecipeDrawer index={this.state.recipes[this.state.recipes.length-1].key+1} newRecipe={(item)=>this.addRecipe(item)}/>
      </div>
      <div className="Right-Area"> 
        {recipesItems} 
    </div>
    </div>
          </MuiThemeProvider>


      </div>
    );
  }
}
injectTapEventPlugin();
export default App;
