
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/recipe/RecipeCard";
import { saveProduct } from './../../store/product/productSlice'
function Home() {
  const filterBy = useSelector( (state) => state.wishlist.search.toLowerCase());
  const [product, setProduct] = useState([]);
  const {name} = useParams();
  const str = name.replaceAll(" ","-");
  const dispatch = useDispatch();
  const addProduct = (item) => {
    dispatch(saveProduct(item))
  }
  console.log(str)
  const fetchProduct = (title) => {
   

      fetch(options)
        .then(response => response.json())
        .then(response => {
            console.log({response})
            setProduct(response.products)
          localStorage.setItem("recipe", JSON.stringify(response.recipes))
        })
        .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchProduct(str)
  }, [str]);
  return (
    <>
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-8">
      {product.filter((recipe) => filterBy ? recipe.title.toLowerCase().includes(filterBy): true)
      .map((item) => (
          <RecipeCard key={item.id}
             cardClass="shadow-lg block text-center relative"
                    headingSection="Healthy"
                    link={`${item.id}`}
                    image={item.image}
                    imageAlt={item.title}
                    sourceName={item.sourceName}
                    title={item.title}
                    deleteBtnClass="hidden"
                    btnClass="hidden"
                    onAdded={(prod) => addProduct(item)}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;
