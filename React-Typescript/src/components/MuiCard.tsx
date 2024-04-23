import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={140}
          image="https://source.unsplash.com/random"
          alt="unsplash img"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component={"div"}>
            React
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, officia beatae quaerat amet voluptate asperiores
            aliquam, illum ratione corporis cumque deserunt laboriosam ex aut
            pariatur magni dolores reprehenderit architecto magnam?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
