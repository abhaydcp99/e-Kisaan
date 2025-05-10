import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import Products from "../components/Products";
import Categories from "./Categories";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <Container
      fixed
      maxWidth="xl"
      sx={{ margin: "auto" }} // ✅ Removed black border
    >
      <Aboutus />
    </Container>
  );
}

export default About;
