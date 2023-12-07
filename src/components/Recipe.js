import { useState } from "react";
import IngredientDetails from "./IngredientDetails";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Details
      </a>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        Ingredients
      </button>
      {showIngredients && <IngredientDetails ingredients={ingredients} />}
    </div>
  );
};
export default Recipe;
