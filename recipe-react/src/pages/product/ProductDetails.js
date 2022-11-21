
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  useEffect(() => {
    

    fetch( `/${params.id}`,
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
