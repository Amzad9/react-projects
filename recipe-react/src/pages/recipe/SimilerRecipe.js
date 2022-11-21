
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipe/RecipeCard";
function SimilerRecipe() {
  const [similar, setSimilar] = useState([]);
  let params = useParams();
  useEffect(() => {
      fetch(
        `/${params.id}/similar/`,
      )
        .then((response) => response.json())
        .then((response) => setSimilar(response))
        .catch((err) => console.error(err));

  }, [params.id]);
  console.log(similar);
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12">
       <h2 className="text-3xl font-bold font-Montserrat">Similer Recipe</h2>
      </div>
            {similar.map((val) => (

        <Link to={val.id} className="col-span-3 border p-4">
        <img src={`https://spoonacular.com/recipeImages/${val.id}-556x370.${val.imageType}`} alt={val.sourceName} />

          <h5 className="font-semibold text-gray-500 pb-3 font-Montserrat">
            {val.creditsText}
          </h5>
          <h4 className="font-semibold text-xl mb-4 font-Montserrat">{val.title}</h4>
          <p className="font-Montserrat" dangerouslySetInnerHTML={{ __html: val.summary }}></p>
        </Link>
            ))}
      </div>
    </div>
  );
}

export default SimilerRecipe;
