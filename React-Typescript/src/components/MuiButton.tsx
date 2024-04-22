import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [format, setFormat] = useState<string[]>([]);
  console.log(format);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormat(updatedFormat);
  };

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
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton
          aria-label="send"
          size="large"
          color="error"
          disableRipple
          onClick={() => alert("Hellow")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" paddingTop={3}>
        <ButtonGroup
          aria-label="alignment button group"
          variant="contained"
          color="error"
          size="medium"
          orientation="vertical"
        >
          <Button onClick={() => alert("Left clicked")}>Left</Button>
          <Button onClick={() => alert("Center clicked")}>Center</Button>
          <Button onClick={() => alert("Right clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          size="small"
          orientation="vertical"
          value={format}
          onChange={handleFormatChange}
          exclusive // press a button one at a time
        >
          <ToggleButton
            style={{ color: "white" }}
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            style={{ color: "white" }}
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton
            style={{ color: "white" }}
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
