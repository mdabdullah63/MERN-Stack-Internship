import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState} from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useGetProductsQuery } from "../services/ApiSlice";
function Home() {
  const { data, error, isLoading } = useGetProductsQuery();

  const [visibleCount, setVisibleCount] = useState(9);
  const [loadingMore, setLoadingMore] = useState(false);

  const products = data?.products || [];

  const handleLoadMore = () => {
    setLoadingMore(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 1000);
  };

  if (isLoading) return <Loader />;

  if (error) {
    return <h2>Error loading products</h2>;
  }

  return (
   <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        // px: 2,
        // py: 4,
      }}
    >
      <Grid container spacing={3}>
        {products.slice(0, visibleCount).map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <ProductCard product={product} />
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
              <CircularProgress />
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

      < Footer/>
    </Box>
  );
}

export default Home;