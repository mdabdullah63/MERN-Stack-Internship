import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useSnackbar } from "notistack";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [openDetails, setOpenDetails] = useState(false);

  const handleAddItem = () => {
    dispatch(addToCart(product));
    enqueueSnackbar(
      `${product.title} added to cart`,
      {
        variant: "success",
      }
    );
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
            image={product.image}
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
            ⭐ {product.rating?.rate}
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
            onClick={() => setOpenDetails(true)}
          >
            Details
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={openDetails}
        onClose={() => setOpenDetails(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.8rem",
            background:
              "linear-gradient(135deg, #000, #333)",
            color: "white",
            py: 2,
          }}
        >
          Product Details
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                bgcolor: "#f8f9fa",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 4,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1.3,
                p: 4,
              }}
            >
              <Chip
                label={product.category}
                color="primary"
                sx={{
                  mb: 2,
                  textTransform: "capitalize",
                }}
              />

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                {product.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                {product.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Chip
                  label={`⭐ ${product.rating?.rate}`}
                  color="warning"
                />

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Highly Rated Product
                </Typography>
              </Box>

              <Typography
                variant="h4"
                fontWeight="bold"
                color="success.main"
              >
                ₹ {Math.round(product.price * 85)}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Inclusive of all taxes
              </Typography>

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 3,
                }}
                onClick={() => {
                  dispatch(addToCart(product));
                  setOpenDetails(false);
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => setOpenDetails(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductCard;