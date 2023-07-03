import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Book",
    description: "This is my first Book",
  },
  {
    id: "p2",
    price: 5,
    title: "Pen",
    description: "This is my first Pen",
  },
  {
    id: "p3",
    price: 7,
    title: "Pencil",
    description: "This is my first Pencil",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
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
