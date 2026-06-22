import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useSnackbar } from "notistack";
import { Box, Card, CardContent, CardMedia, Typography, Button, Divider, } from "@mui/material";
import { completeCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
function Cart({ setShowCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart
  );
  const { enqueueSnackbar } = useSnackbar();
  const handlepay = () => {
    dispatch(completeCart());
    enqueueSnackbar(
      " Items Purchased Successfully!",
      {
        variant: "success",
        autoHideDuration: 1000,
      }
    );
    setShowCart(false);
  };
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  return (
    <Box
      sx={{
        maxWidth: "700px",
        mx: "auto",
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        My Cart ({cartItems.length})
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {cartItems.length === 0 ? (
        <Box textAlign="center">
          <Typography variant="h6">
            🛒 Your cart is empty
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => setShowCart(false)}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                mb: 2,
                p: 2,
                borderRadius: 3,
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: 120,
                  height: 120,
                  objectFit:
                    "contain",
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.title}
                </Typography>

                <Typography color="text.secondary">
                  {item.category}
                </Typography>

                <Typography
                  variant="h6"
                  color="success.main"
                  mt={1}
                >
                  ₹{" "}
                  {Math.round(
                    item.price * 85
                  )}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Subtotal: ₹{" "}
                    {Math.round(
                      item.price *
                      item.quantity *
                      85
                    )}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ddd",
                      borderRadius: 2,
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      -
                    </Button>

                    <Typography
                      sx={{
                        px: 2,
                        fontWeight: "bold",
                      }}
                    >
                      {item.quantity}
                    </Typography>

                    <Button
                      size="small"
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Button
                  color="error"
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 2,
                    width: "fit-content",
                  }}
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove Item
                </Button>
              </CardContent>
            </Card>
          ))}

          <Box
            sx={{
              mt: 4,
              p: 3,
              border:
                "1px solid #ddd",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Total Amount
            </Typography>

            <Typography
              variant="h4"
              color="success.main"
              mt={1}
            >
              ₹{" "}
              {Math.round(
                totalPrice * 85
              )}
            </Typography>

            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
              }}
              onClick={handlepay}
            >
              Proceed To Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;