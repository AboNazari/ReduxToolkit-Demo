import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
  {
    id: "a1",
    title: "Machine Racket",
    description: "The Best Machine Racket Out there!",
    price: 8,
  },
  {
    id: "a2",
    title: "IMax XX",
    description: "An extraordinary motor!",
    price: 10,
  },
  {
    id: "a3",
    title: "Xl 25 Max",
    description: "An exeptional Creature",
    price: 12,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
