import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search);
    setFoods(res.data.meals || []);
  };

  return (
    <div className="menu-container">
      <h2>Food Menu</h2>
      <input className="input-field" placeholder="Search Food" onChange={(e) => setSearch(e.target.value)} />
      <button className="btn" onClick={fetchFoods}>Search</button>
      <ul className="food-list">
        {foods.map((food) => (
          <li key={food.idMeal} className="food-item">
            {food.strMeal} - <Link to={`/food/${food.idMeal}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
