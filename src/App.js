import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import Recipe from "./components/Recipe";
import Error from "./components/Error";
import "./App.css";

const App = () => {
  const APP_ID = "cd40a0a7";
  const APP_KEY = "cc5f731e450e7ba25bb4906b016e80c1";

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleRecipes = async () => {
    if (searchQuery !== "") {
      const response = await axios.get(url);
      if (!response.data.more) {
        setRecipes([])
        return setError("Noob! Type a recipe name which exists. 😆️");
      }
      setRecipes(response.data.hits);
      setError("");
      setSearchQuery("");
    } else {
      setError("Are you blind? 🙄️ Type Something In The Search Box First! 😒️");
      setRecipes([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRecipes();
  };

  return (
    <div className="App">
      <h1>🍕️Recipe Searching App🍔️</h1>
      <p>
        API Used From :{" "}
        <span className="edamam">
          <a href="https://www.edamam.com/" target="_blank">
            edamam.com
          </a>
        </span>
      </p>

      <form onSubmit={handleSubmit} className="search-form">
        {error !== "" && <Error error={error} />}
        <input
          type="text"
          placeholder="Search recipe...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
        <input type="submit" value={"Search"} />
      </form>

      <div className="recipes">
        {recipes.length !== 0 &&
          recipes.map((recipe) => {
            return <Recipe recipe={recipe} key={v4()} />;
          })}
      </div>
    </div>
  );
};

export default App;
