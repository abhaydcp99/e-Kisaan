import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  Container,
} from "@mui/material";

const Aboutus = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        pt: 10,
        pb: 5,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, color: "#2e7d32" }}
        >
          Our Team
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#424242", maxWidth: "900px", mx: "auto", mb: 5 }}
        >
          At e-Kisaan Store, we are on a mission to digitally empower farmers by
          connecting them with consumers, suppliers, and agri-services. Rooted
          in rural India and driven by innovation, we’re building a trusted
          digital ecosystem for a self-reliant farming future.
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
        >
          {/* Team Member 1 */}
          <Card
            sx={{
              width: 300,
              borderRadius: 3,
              boxShadow: 4,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image="src/assets/Abhay.jpeg"
              alt="Abhay Chavan"
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                ABHAY CHAVAN
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FRONTEND
              </Typography>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card
            sx={{
              width: 300,
              borderRadius: 3,
              boxShadow: 4,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image="/src/assets/vegetable.jpg"
              alt="Adwait Gunjal"
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                ADWAIT GUNJAL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BACKEND
              </Typography>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card
            sx={{
              width: 300,
              borderRadius: 3,
              boxShadow: 4,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image="/src/assets/Project.jpeg"
              alt="Amrutha Nayak"
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                AMRUTHA NAYAK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DATABASE
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Aboutus;
