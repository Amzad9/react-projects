import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { popularData } from "./../helper/Helper";
import RecipeHealthy from "../../components/recipe/RecipeHealthy";
import RecipePopular from "../../components/recipe/RecipePopular";
import Vegetarian from "../../components/recipe/Vegetarian";
function Home() {
  const [recipe, setRecipe] = useState([]);
  const filterBy = useSelector( (state) => state.wishlist.search);

  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100', options)
        .then(response => response.json())
        .then(response => {
          setRecipe(response.recipes)
          localStorage.setItem("recipe", JSON.stringify(response.recipes))
        })
        .catch(err => console.error(err));
  }, []);
  console.log(popularData);
  return (
    <>
      <div className="mt-20 min-h-72 items-center relative">
        <img src="https://www.allrecipes.com/thmb/fSh16MWg7oA3Ze0nqPWclVH7xRw=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8-5-Ingredient-Breakfast-Sandwiches-hero-02-99e824465e5d4c418083638974f5db97.jpg" alt="" />
        <div className="max-w-[500px] py-12 px-10 shadow-lg absolute top-24 left-20 bg-white">
          <h1 className="text-gray-white text-6xl font-bold font-Montserrat">
            Fastest <span className="text-primary">Delivery</span> & Easy Pickup
          </h1>
        </div>
      </div>
      <RecipePopular recipe={popularData.filter((recipe) => filterBy ? recipe.title.toLowerCase().includes(filterBy): true)} />
      <RecipeHealthy recipe={recipe.filter((recipe) => filterBy ? recipe.title.toLowerCase().includes(filterBy): true)} />
      <Vegetarian recipe={recipe.filter((recipe) => filterBy ? recipe.title.toLowerCase().includes(filterBy): true)} />
    </>
  );
}

export default Home;
