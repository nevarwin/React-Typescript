import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  return (
    <Stack>
      <Stack spacing={2} direction={"row"} padding={4}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"row"} padding={4}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="text" color="secondary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="text" color="error">
          Primary
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="text" color="info">
          Primary
        </Button>
        <Button variant="contained" color="info">
          Contained
        </Button>
        <Button variant="outlined" color="info">
          Outlined
        </Button>
        <Button variant="text" color="success">
          Primary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <Button variant="text" color="warning">
          Primary
        </Button>
        <Button variant="contained" color="warning">
          Contained
        </Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
      </Stack>
      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="text" color="success" size="small">
          Primary
        </Button>
        <Button variant="contained" color="success" size="medium">
          Contained
        </Button>
        <Button variant="outlined" color="success" size="large">
          Outlined
        </Button>
      </Stack>
      <Stack>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
