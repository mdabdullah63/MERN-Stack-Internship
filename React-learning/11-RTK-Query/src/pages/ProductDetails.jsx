import { useParams } from "react-router-dom";
import ProductDetailsDialog from "../components/ProductDetailsDialog";
import { useFatchProductByIdQuery } from "../services/ApiSlice";

function ProductDetails() {

  const { id } = useParams();

  const { data:product, isLoading } = useFatchProductByIdQuery(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <ProductDetailsDialog
      open={true}
      product={product}
    />
  );
}

export default ProductDetails;