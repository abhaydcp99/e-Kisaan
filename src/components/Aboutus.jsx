import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Stack,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Abhay Chavan"
              src="src/assets/Abhay.jpeg"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                ABHAY CHAVAN
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FRONTEND
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/abhay-dcp-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/abhaydcp99"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card
            sx={{
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Adwait Gunjal"
              src="/src/assets/vegetable.jpg"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
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
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Amrutha Nayak"
              src="/src/assets/Project.jpeg"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
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
