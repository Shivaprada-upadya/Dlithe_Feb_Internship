import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    setFoods(res.data.meals || []);
  };

  return (
    <div>
      <h2>Food Menu</h2>
      <input placeholder="Search Food" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={fetchFoods}>Search</button>
      <ul>
        {foods.map((food) => (
          <li key={food.idMeal}>
            {food.strMeal} - <Link to={`/food/${food.idMeal}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
