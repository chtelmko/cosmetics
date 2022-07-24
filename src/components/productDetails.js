export const ProductDetailsComponent = (props) => {
  return (
    <>
      <div className="detail_item">
        <div>{props.product.name}</div>
        <div>{props.product.brand}</div>
        <div>{props.product.description}</div>
        <div>{props.product.product_type}</div>
        <div>
          {props.product.price} {props.product.price_sign}
        </div>
      </div>
    </>
  );
};
export default ProductDetailsComponent;
