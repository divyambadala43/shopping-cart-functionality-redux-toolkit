import { cartButtonActions } from "../../store/cartButton";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartButtonActions.toggleCart());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
