import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadio = () => {
  const [radioValue, setRadioValue] = useState("");
  console.log(radioValue);
  const handleRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="job-experience-group-label">Years of experience</FormLabel>
      <RadioGroup
        name="job-experience-group"
        aria-labelledby="job-experience-group-label"
        value={radioValue}
        onChange={handleRadioValue}
        row
      >
        <FormControlLabel
          control={<Radio color="warning" size="small" />}
          label="0-2"
          value={"0-2"}
        ></FormControlLabel>
        <FormControlLabel
          control={<Radio />}
          label="3-5"
          value={"3-5"}
        ></FormControlLabel>
        <FormControlLabel
          control={<Radio />}
          label="6-10"
          value={"6-10"}
        ></FormControlLabel>
      </RadioGroup>
      <FormHelperText>Invalid selection</FormHelperText>
    </FormControl>
  );
};

export default MuiRadio;
