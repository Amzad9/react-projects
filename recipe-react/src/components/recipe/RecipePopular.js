import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { slideOption } from "./../../pages/helper/Helper"
import "@splidejs/react-splide/css";
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
import './../../pages/recipe/recipe.scss';
function RecipePopular({recipe}) {
  return (
    <section className='py-8 bg-white'>
      <div className="container mx-auto text-center">
        <Heading level="2" headingSection="Popular Recipe" creditText="Specials for you"/>
        <Splide 
        options={slideOption}>
          {recipe.map((item) =>
                <SplideSlide key={item.id}>
              <RecipeCard
                cardClass="shadow-lg block text-center"
                headingSection="Healthy"
                link={`recipelist/${item.title}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
                btnClass="hidden"
                deleteBtnClass="hidden"
              />
              </SplideSlide>
           
          )}
          </Splide>
        </div>
    </section>
  )
}

export default RecipePopular