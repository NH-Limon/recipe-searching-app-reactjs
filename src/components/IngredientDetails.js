import { v4 } from "uuid";

const IngredientDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={v4()} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-wight">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
};
export default IngredientDetails;
