import { Box, Stack, Divider, Grid } from "@mui/material";
const MuiBox = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem></Divider>}
        sx={{
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            height: "100px",
            width: "100px",
            backgroundColor: "primary.main",
            padding: "16px",
            color: "black",
            display: "block",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Hellow
        </Box>
        <Box
          display={"flex"}
          height={"100px"}
          width={"100px"}
          bgcolor={"success.light"}
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} border={"1px solid blue"}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box bgcolor={"secondary.light"}>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box bgcolor={"secondary.light"}>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box bgcolor={"secondary.light"}>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box bgcolor={"secondary.light"}>Item 4</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiBox;
