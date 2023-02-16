import ExploreIcon from "@mui/icons-material/Explore";
import NearMeIcon from "@mui/icons-material/NearMe";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function TheForm({ onSubmit, children }) {
  return (
    <form
      className="my-8 flex flex-col gap-y-4"
      // TODO: Update this submission so that doesn't bother the API nec
      onSubmit={onSubmit}
    >
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

      {children}

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

TheForm.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
