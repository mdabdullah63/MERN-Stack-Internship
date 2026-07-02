import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Navbar({ setShowCart }) {
  const cartItems = useSelector(
    (state) => state.cart);
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "black" }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() =>
            setShowCart(false)
          }
        >
          INDIA STORE
        </Typography>

        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={() =>
            setShowCart(true)
          }
        >
          CART ({cartItems.length})
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;