import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { addToCart } from "../redux/cartSlice";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleAddItem = () => {
    dispatch(addToCart(product));

    enqueueSnackbar(`${product.title} added to cart`, {
      variant: "success",
    });
  
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          boxShadow: 2,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            height: 140,
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography fontWeight={600}>
            {product.title}
          </Typography>

          <Chip
            label={product.category}
            size="small"
            sx={{ mt: 1 }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              maxHeight: "80px",
              overflowY: "auto",
              pr: 1,
            }}
          >
            {product.description}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            ₹ {Math.round(product.price * 85)}
          </Typography>

          <Typography variant="body2">
            ⭐ {product.rating}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            fullWidth
            variant="contained"
            onClick={handleAddItem}
          >
            Add To Cart
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate(`/products/${product.id}`)}      
                >
            Details
          </Button>
        </CardActions>
      </Card>

   
    </>
  );
}

export default ProductCard;