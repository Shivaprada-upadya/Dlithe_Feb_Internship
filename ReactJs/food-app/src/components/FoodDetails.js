import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setFood(res.data.meals[0]));
  }, [id]);

  if (!food) return <p>Loading...</p>;

  return (
    <div>
      <h2>{food.strMeal}</h2>
      <img src={food.strMealThumb} alt={food.strMeal} width={200} />
      <p>{food.strInstructions}</p>
      <Link to="/menu">Back</Link>
    </div>
  );
};

export default FoodDetails;
