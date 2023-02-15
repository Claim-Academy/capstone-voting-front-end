import Container from "@mui/material/Container";
import { useState } from "react";
import Leaflet from "../components/leaflet/leaflet";
import RestaurantCard from "../components/restaurant/restaurant-card";
import SearchForm from "../components/search-form";

export default function Home() {
  const [restaurant, setRestaurant] = useState(null);

  return (
    <Container component="main" maxWidth="xs" className="mb-8">
      <SearchForm setRestaurant={setRestaurant} />
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
    </Container>
  );
}
