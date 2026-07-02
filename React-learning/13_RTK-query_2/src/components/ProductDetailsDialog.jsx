import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, Divider, Typography, Grid, } from "@mui/material";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function ProductDetailsDialog({ open, onClose, product, }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          bgcolor: "red",
        }}
      >
        <Typography color="white">
          Loading...
        </Typography>
      </Box>
    );
  }
  const originalPrice = Math.round(product.price * 85);
  const discountedPrice = Math.round(
    originalPrice -
    (originalPrice * product.discountPercentage) / 100
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <GoArrowLeft
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
            marginRight: "10px",
          }}
        />
        Product Details
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 4,
            p: 2,
          }}
        >
          {/* Image */}
          <Box flex={1}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>

          {/* Details */}
          <Box flex={1}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {product.description}
            </Typography>

            <Typography
              variant="h5"
              color="success.main"
              sx={{ mb: 2 }}
            >
              ₹ {product.price}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Rating: ⭐ {product.rating}
            </Typography>

            <Typography sx={{ mb: 3 }}>
              Stock: {product.stock}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;