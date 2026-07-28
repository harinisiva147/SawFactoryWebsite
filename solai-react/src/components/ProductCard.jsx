function ProductCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.category}</p>

      <h3>{props.price}</h3>

      <button>View Details</button>
    </div>
  );
}

export default ProductCard;