import { useParams } from "react-router-dom";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { useFetchProductByIdQuery } from "../services/ApiSlice";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: product, isLoading } = useFetchProductByIdQuery(id);


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
      onClose={() => navigate("/")}
    />
  );
}

export default ProductDetails;