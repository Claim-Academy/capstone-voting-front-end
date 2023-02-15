import ExploreIcon from "@mui/icons-material/Explore";
import NearMeIcon from "@mui/icons-material/NearMe";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { restaurantApi } from "../services";

export default function SearchForm({ setRestaurant }) {
  const cuisines = useLoaderData();

  // For Autocomplete, we need just the strings
  const labeledCuisines = cuisines.map((cuisine) => cuisine.name);

  return (
    <form
      className="my-16 flex flex-col gap-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);

        restaurantApi.show(data).then((restaurant) => {
          setRestaurant(restaurant);
        });
      }}
    >
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
      <TextField
        label="Where do you want to head? (5-Digit Zip Code)"
        id="zip"
        name="location"
        // TODO: Improve validation experience 🚸.
        inputProps={{ pattern: "[0-9]{5}" }}
        required
      />

      <div className="flex items-center gap-x-4">
        <NearMeIcon />
        <Slider
          aria-label="Range"
          defaultValue={10}
          getAriaValueText={(value) => `${value} miles`}
          marks
          min={5}
          max={25}
          step={5}
          valueLabelDisplay="on"
          id="radius"
          name="radius"
        />
        <ExploreIcon />
      </div>

      <Button
        variant="contained"
        color="success"
        type="submit"
        className="max-w-max self-center"
      >
        Go!
      </Button>
    </form>
  );
}

SearchForm.propTypes = {
  setRestaurant: PropTypes.func.isRequired,
};
