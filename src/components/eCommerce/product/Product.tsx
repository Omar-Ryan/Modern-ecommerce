import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { ProductProps } from "../../../types/shared";

const Product = ({ id, title, price, cat_prefix, img }: ProductProps) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className="w-[120px] flex justify-between flex-col">
      <div className="overflow-hidden bg-[#f2f2f2] h-44 w-full">
        <img
          src={img}
          alt={cat_prefix}
          className="w-full block h-44 bg-[#f2f2f2]"
        />
      </div>
      <h2 className="w-full mt-2 mb-3 overflow-hidden text-base overflow-ellipsis">
        {title}
      </h2>
      <h3 className="mb-2 text-sm">{price} EGP</h3>
      <button
        className="px-3 py-2 font-bold text-white bg-green-700 border-2 border-green-700 rounded hover:bg-white hover:text-green-900"
        onClick={addToCartHandler}
      >
        Add to card
      </button>
    </div>
  );
};

export default Product;
