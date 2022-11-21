import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import RecipeAll from "../../components/recipe/RecipeAll";
function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const filterBy = useSelector( (state) => state.wishlist.search);

  const {name} = useParams();
  const str = name.replaceAll(" ","-");
  console.log(str)

  const fetchData = (title) => {
    fetch(`=${title}`)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setRecipe(response.results)
        localStorage.setItem("recipeList", JSON.stringify(response.recipes))
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData(str)
  }, [str]);

  return (
    <> 
      
    <RecipeAll recipe={recipe.filter((recipe) => filterBy ? recipe.title.toLowerCase().includes(filterBy): true)} sectionTitle={`${name} Recipe`}/>
    </>
  );
}

export default RecipeList;
