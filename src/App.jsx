import React from "react";
import "./App.css";
/*import Recipe from "./Components/Recipe";*/

import { useEffect } from "react";
import useAxios from "./Hooks/useAxios";

function App() {
  const { fetchData, response, loading } = useAxios();
  const { strMeal, strMealThumb, strInstructions, strYoutube } = response;
  const youtubeUrl = strYoutube?.replace("watch?v=", "embed/");

  useEffect(() => {
    fetchData();
  }, []);
  /*
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Skeleton className="h-10 md:w-40" />
        <Skeleton className="h-10 w-72 mt-6" />
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <Skeleton className="md:h-72 h-52" />
          <Skeleton className="md:h-72 h-52" />
        </div>
        <Skeleton className="h-10 w-72 mt-6" />
        <Skeleton className="h-64 mt-6" />
        <Skeleton className="h-72 mt-6" />
      </div>
    );
  }
*/
  let ingredients = [];
  Object.keys(response).forEach((item, index) => {
    if (response[`strIngredient${index}`]) {
      ingredients.push({
        ingredient: response[`strIngredient${index}`],
        measure: response[`strMeasure${index}`],
      });
    }
  });

  const renderList = (item, index) => (
    <div className="flex text-sm" key={index}>
      <li>{item.ingredient} - </li>
      <span className="italic text-gray-500">{item.measure}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        onClick={() => fetchData()}
        className="cursor-pointer bg-gray-800 text-white px-4 py-2 w-full rounded-md md:w-40"
      >
        Generate a Recipe
      </button>
      <h1 className="text-4xl font-bold mt-6 underline">{strMeal}</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="mt-4 border-500 border-2  h-80">
          <img
            className="w-full h-full object-cover"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className="my-6">
          <h3 className="text-4xl font-bold mb-2">Ingredients</h3>
          {ingredients.map((item, index) => renderList(item, index))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 mt-6">
          Step by Step Instructions
        </h3>
        <p>{strInstructions}</p>
      </div>
      <span>
        <h3 className="text-2xl font-bold mb-2 mt-6">
          Watch Video Tutorial
        </h3>
      </span>
      <div className="aspect-w-16 aspect-h-9 mt-6">
        <iframe
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
