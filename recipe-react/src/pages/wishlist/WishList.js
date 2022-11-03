import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { deleteWishList } from "./../../store/wishlist/wishListSlice";
import RecipeCard from './../../components/recipe/RecipeCard'

function WishList() {
const results = useSelector( (state) => state.wishlist.data);
const filterBy = useSelector( (state) => state.wishlist.search);

const dispatch = useDispatch();
const deleteWishListHandle = (id) => {
  dispatch(deleteWishList({id: id}))
}
console.log({results})
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
         <div className="grid grid-cols-12 gap-8">
          {results.filter((wishlist) => filterBy ? wishlist.title.toLowerCase().includes(filterBy): true).map((item, index) => (
            <RecipeCard key={item.id}
                cardClass="border shadow-sm text-center relative col-span-3"
                headingSection="Healthy"
                link={`${item.id}`}
                image={item.image}
                imageAlt={item.title}
                title={item.title}
                btnClass="hidden"
                onDelete={() => deleteWishListHandle(item.id)}
              />
          ))}
          </div>
        </div>
    </section>
  )
}

export default WishList