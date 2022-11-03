import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { saveWishList } from "../../store/wishlist/wishListSlice";
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function RecipeAll({recipe,sectionTitle }) {
  const dispatch = useDispatch();
  const incrementHandle = (item) => {
    dispatch(saveWishList(item))
  }
  return (
    <section className='pb-12 mt-32'>
      <div className="container mx-auto py-4">
        <Heading level="2" headingSection={sectionTitle} />
        <div className="grid grid-cols-12 gap-8 mt-5">
          {recipe.map((item) =>
              <RecipeCard key={item.id}
                cardClass="border shadow-sm text-center relative"
                headingSection="Healthy"
                link={`${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
                deleteBtnClass="hidden"
                onSave={()=> incrementHandle(item)}
              />
          )}
        </div>
      </div>
    </section>
  )
}

export default RecipeAll