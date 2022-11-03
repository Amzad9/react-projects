
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    fetch( `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/${params.id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log(product);
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="col-span-12">
          <h4 className="font-semibold text-3xl mb-4">{product.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
