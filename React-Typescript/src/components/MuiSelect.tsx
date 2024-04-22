import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const [countries, setCountries] = useState<string[]>([]);
  console.log(!countries);
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px" paddingTop={4} letterSpacing={4}>
      <TextField
        style={{ marginBottom: "16px" }}
        select
        fullWidth
        label="Select country"
        value={country}
        onChange={handleChange}
        error={!country}
        helperText={!country ? "Required" : "Countries"}
      >
        <MenuItem value="">Select country</MenuItem>
        <MenuItem value="PH">Philippines</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      {/* Multiple select */}
      <TextField
        select
        fullWidth
        label="Select countries"
        color="success"
        size="small"
        value={countries}
        onChange={handleChanges}
        helperText={!countries.length ? "Required" : "Countries"}
        error={!countries.length}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="PH">Philippines</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
