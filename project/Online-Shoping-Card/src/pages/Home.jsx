import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import CircularProgs from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loadingMore, setLoadingMore] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        enqueueSnackbar("Failed to load products", {
          variant: "error",
        });
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();}, [enqueueSnackbar]);
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 1000);
  };

  if (loading) return <Loader />;

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      <Grid container spacing={3}>
        {products
          .slice(0, visibleCount)
          .map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <ProductCard
                product={product}
              />
            </Grid>
          ))}
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        {visibleCount < products.length && (
          <>
            {loadingMore ? (
              <CircularProgs />
            ) : (
              <Button
                variant="contained"
                onClick={handleLoadMore}
              >
                Load More Products
              </Button>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}

export default Home;