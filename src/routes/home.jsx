import Container from "@mui/material/Container";
import { useState } from "react";
import Leaflet from "../components/leaflet/leaflet";
import RestaurantCard from "../components/restaurant/restaurant-card";
import TheForm from "../components/the-form";
import { restaurantApi } from "../services";

export default function Home() {
  const [restaurant, setRestaurant] = useState(null);

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
      <TheForm onSubmit={handleRestaurantSubmit} />
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
