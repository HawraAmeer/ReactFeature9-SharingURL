// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router";

const ProductDetail = (props) => {
  const products = props.products;

  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products"></Redirect>;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
