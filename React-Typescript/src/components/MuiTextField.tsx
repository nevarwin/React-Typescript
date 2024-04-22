import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

const MuiInputField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" paddingTop={4} spacing={4}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
        <TextField label="Password" type="password" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Password"
          type="password"
          size="small"
          color="error"
          helperText="must have atleast 1 special character, 1 number, 1 capital and 1 small letter"
        />
        <TextField
          label="Read Only"
          size="small"
          color="error"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Amount"
          size="small"
          color="success"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          size="small"
          color="success"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Password"
          type="password"
          size="small"
          color="error"
          helperText="must have atleast 1 special character, 1 number, 1 capital and 1 small letter"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon></VisibilityIcon>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Password"
          type="password"
          size="small"
          color="error"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "Required" : "Atleast 6 characters"}
          error={!value}
        />
      </Stack>
    </Stack>
  );
};

export default MuiInputField;
