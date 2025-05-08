import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import Slider from "react-slick";

const productData = [
  {
    title: "Dairy Products",
    description:
      "From happy cows to creamy goodness—organic dairy is pure, wholesome, and untouched by shortcuts.",
    image: "src/assets/dairy.jpg",
  },
  {
    title: "Vegetables",
    description:
      "Farm-fresh, earth-fed, and chemical-free—every crunch of organic veggies is nature’s way of saying, ‘Eat the rainbow.’",
    image: "src/assets/vegetable.jpg",
  },
  {
    title: "Fruits",
    description:
      "Sun-ripened, juicier, and packed with pure vitality—organic fruits are sweetness the way Mother Nature intended.",
    image: "src/assets/fruit.jpg",
  },
  {
    title: "Spices",
    description:
      "Purely organic grown and full of nutrition—our spicesbring strength and tradition to every meal.",
    image: "src/assets/spices.jpeg",
  },
];

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        background: "linear-gradient(to right, #f9fbe7, #ffffff)",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", color: "#2e7d32", mb: 4 }}
        >
          Our Products
        </Typography>

        <Slider {...settings}>
          {productData.map((product, index) => (
            <Box key={index} px={2}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      color: "white",
                      backgroundColor: "#388e3c",
                      "&:hover": { backgroundColor: "#2e7d32" },
                      borderRadius: 2,
                      px: 2,
                    }}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Products;
