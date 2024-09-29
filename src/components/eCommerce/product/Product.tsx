import { memo } from "react";
import { addToCart } from "../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { ProductProps } from "../../../types/shared";

const Product = memo(
  ({ id, title, price, cat_prefix, img, max, quantity }: ProductProps) => {
    const dispatch = useAppDispatch();
    const currentRemainingQuantity = max - (quantity ?? 0);

    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

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
        <h3 className="mb-2 text-sm">{price.toFixed(2)} EGP</h3>
        <p className="mb-2 text-sm">
          {!quantityReachedToMax
            ? `${currentRemainingQuantity} available`
            : " 0 available"}
        </p>
        <button
          className="px-3 py-2 font-bold text-white bg-green-700 border-2 border-green-700 rounded hover:bg-white hover:text-green-900"
          onClick={addToCartHandler}
          disabled={quantityReachedToMax}
        >
          Add to card
        </button>
      </div>
    );
  }
);

export default Product;
