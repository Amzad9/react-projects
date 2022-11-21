import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RecipeDetails() {
  const [menu, setMenu] = useState([]);
  let params = useParams();
  useEffect(() => {

    fetch( `${params.id}`,
    )
      .then((response) => response.json())
      .then((response) => setMenu(response))
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log(menu);
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <img src={menu.image} alt={menu.title} />
        </div>
        <div className="col-span-12">
          <h5 className="font-semibold text-gray-500 pb-3">
            {menu.creditsText}
          </h5>
          <h4 className="font-semibold text-3xl mb-4">{menu.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
