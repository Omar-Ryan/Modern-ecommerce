import { CartItems, CartSubtotalPrice } from "../components/eCommerce";

const Cart = () => {
  return (
    <div>
      <h4>Cart</h4>
      <CartItems />
      <CartItems />
      <CartItems />
      <CartSubtotalPrice />
    </div>
  );
};

export default Cart;
