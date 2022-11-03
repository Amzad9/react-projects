import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecipeCard({ image, imageAlt, sourceName, title, link , cardClass, onSave, btnClass, deleteBtnClass, onDelete, onAdded, addBtnClass}) { 
  return (
    <>
          <div className={`col-span-3 rounded-md bg-white p-3 pb-8 relative` + cardClass}>
          <Link to={link} className="w-44 h-44 rounded-full inline-block">
          <img src={image} alt={imageAlt} className="w-44 h-44 rounded-full mx-auto" />
          </Link>
            <h6 className="font-roboto font-light text-gray-600 mt-2">
              {sourceName}
            </h6>
            <h4 className="font-medium text-lg mt-3 font-Merienda capitalize">
              {title.length  > 25 ? title.slice(1, 25) + "..." : title}
            </h4>

            <button className={`bg-primary px-7 mx-auto flex` + addBtnClass} onClick={onAdded}>
              Add
            </button>
            
            <button className={`absolute top-4 right-4 ` +btnClass} onClick={onSave}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
              <path fill="red" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
            </button>
            <button className={`absolute top-4 right-4 ` + deleteBtnClass} onClick={onDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path fill="#d3d3d3" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill="#d3d3d3" fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            </button>
          </div>
    </>
  );
}

export default RecipeCard;
