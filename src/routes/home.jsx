import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Leaflet from "../components/leaflet/leaflet";
import RestaurantCard from "../components/restaurant/restaurant-card";
import TheForm from "../components/the-form";
import { restaurantApi } from "../services";

export default function Home() {
  const [restaurant, setRestaurant] = useState(null);

  const cuisines = useRouteLoaderData("root");

  // For Autocomplete, we need just the strings
  const labeledCuisines = cuisines.map((cuisine) => cuisine.name);

  const handleRestaurantSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);

    restaurantApi.show(data).then((restaurant) => {
      setRestaurant(restaurant);
    });
  };

  return (
    <>
      <TheForm onSubmit={handleRestaurantSubmit}>
        <Autocomplete
          disablePortal
          options={labeledCuisines}
          renderInput={
            // 'params' is used by MUI to control the input value
            (params) => (
              <TextField
                {...params}
                label="What cuisine R U in the mood for? 😋"
                id="cuisine"
                name="category"
              />
            )
          }
        />
      </TheForm>
      {restaurant && <RestaurantCard restaurant={restaurant} />}
      {restaurant && (
        <section className="h-96">
          <Leaflet
            coordinates={[
              restaurant.coordinates.latitude,
              restaurant.coordinates.longitude,
            ]}
          />
        </section>
      )}
    </>
  );
}
