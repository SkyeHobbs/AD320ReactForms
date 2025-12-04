import RestaurantsContainer from "./components/RestaurantsContainer";
import AddRestaurant from './components/AddRestaurant.jsx'
import { data } from '../server/data.js';
import { useState } from "react";
import "./App.css";

//App is the root of our application and where we load in our components.
function App() {
  const [restaurantState, setRestaurants] = useState([...data]);

  const updateRestaurants = (restaurant) => {
    console.log(restaurant);
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    <div className="App">
      <h1>aaa</h1>
      <AddRestaurant updateRestaurants={updateRestaurants} />
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
