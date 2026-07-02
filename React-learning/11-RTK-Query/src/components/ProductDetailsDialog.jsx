import {Box,Button,Chip,Dialog,DialogContent,DialogTitle,Divider,Typography,Grid,} from "@mui/material";
import { useSnackbar } from "notistack";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function ProductDetailsDialog({ open, onClose, product, }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleAddItem = () => {
    dispatch(addToCart(product));

    enqueueSnackbar(`${product.title} added to cart`, {
      variant: "success",
    });

  };

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
      maxWidth="xl"
      fullWidth
      fullScreen={window.innerWidth < 600}
    >
      <DialogTitle
        sx={{
          position: "relative",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.8rem",
          background: "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          py: 2,
        }}
      >
        <GoArrowLeft
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "28px",
          }}
        />

        Product Details
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.2fr",
            },
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "400px",
                objectFit: "contain",
                transition: "0.4s",
              }}
              onMouseOver={(e) =>
              (e.currentTarget.style.transform =
                "scale(1.15)")
              }
              onMouseOut={(e) =>
              (e.currentTarget.style.transform =
                "scale(1)")
              }
            />
          </Box>

          {/* Product Details */}
          <Box
            sx={{
              flex: 1.5,
              p: 4,
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            {/* Category */}
            <Chip
              label={product.category}
              color="primary"
              sx={{
                mb: 2,
                textTransform: "capitalize",
              }}
            />

            {/* Title */}
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
            >
              {product.title}
            </Typography>

            {/* Rating / Reviews / Stock */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                mb: 3,
              }}
            >
              <Chip
                label={`⭐ ${product.rating}`}
                color="warning"
              />

              <Chip
                label={`${product.reviews?.length || 0} Reviews`}
                color="info"
              />

              <Chip
                label={product.availabilityStatus}
                color="success"
              />
            </Box>

            {/* Price */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="success.main"
              >
                ₹ {discountedPrice}
              </Typography>

              <Typography
                component="span"
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  mr: 1,
                }}
              >
                ₹ {originalPrice}
              </Typography>

              <Typography
                component="span"
                color="error.main"
                fontWeight="bold"
              >
                {product.discountPercentage}% OFF
              </Typography>
            </Box>

            {/* Description */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Description
            </Typography>

            <Typography
              sx={{
                color: "#666",
                mt: 1,
                lineHeight: 1.8,
              }}
            >
              {product.description}
            </Typography>

            {/* Specifications */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Specifications
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>
                  <strong>SKU:</strong> {product.sku}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #eee",
                    borderRadius: 3,
                    bgcolor: "#fafafa",
                  }}
                >
                  <Typography variant="caption">
                    Stock
                  </Typography>

                  <Typography fontWeight="bold">
                    {product.stock}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  <strong>Weight:</strong> {product.weight} kg
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  <strong>Min Order:</strong>{" "}
                  {product.minimumOrderQuantity}
                </Typography>
              </Grid>
            </Grid>

            {/* Dimensions */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Dimensions
            </Typography>

            <Typography>
              Width: {product.dimensions?.width}
            </Typography>

            <Typography>
              Height: {product.dimensions?.height}
            </Typography>

            <Typography>
              Depth: {product.dimensions?.depth}
            </Typography>

            {/* Shipping & Warranty */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Shipping & Warranty
            </Typography>

            <Typography sx={{ mb: 1 }}>
              🚚 {product.shippingInformation}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              🛡️ {product.warrantyInformation}
            </Typography>

            <Typography>
              🔄 {product.returnPolicy}
            </Typography>

            {/* Tags */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Tags
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {product.tags?.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  variant="outlined"
                />
              ))}
            </Box>

            {/* Reviews */}
            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Customer Reviews
            </Typography>

            {product.reviews?.map((review, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 3,
                  boxShadow: 1,
                  bgcolor: "#fafafa",
                }}
              >
                <Typography fontWeight="bold">
                  {review.reviewerName}
                </Typography>

                <Chip
                  size="small"
                  color="warning"
                  label={`⭐ ${review.rating}`}
                  sx={{ my: 1 }}
                />

                <Typography color="text.secondary">
                  {review.comment}
                </Typography>
              </Box>
            ))}

            {/* Add To Cart */}
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
              onClick={handleAddItem}
            >
              Add To Cart
              
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;