import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid, } from "@mui/material";
import { CardApi } from '../services/ApiSlice';
import { useGetCardByNameQuery }from '../services/ApiSlice';
import { useNavigate } from "react-router-dom";
export default function ImgMediaCard() {
    const navigate = useNavigate();

  const { data, error, isLoading } = useGetCardByNameQuery();
  const products = data?.products || [];
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center" }}
    >  {products?.map((product) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
        <Card sx={{ maxWidth: 345, mx: "auto" }}>
          <CardMedia
            component="img"
            height="140"
            image={product.thumbnail}
            alt={product.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
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
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              Add to Cart
            </Button>

            <Button
              size="small"
              sx={{
                backgroundColor: "#6c757d",
                color: "white",
              }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    </Grid>
  );
}
