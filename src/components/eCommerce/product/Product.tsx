import { ProductProps } from "../../../types/shared";

const Product = ({ title, price, cat_prefix, img }: ProductProps) => {
  return (
    <div className="w-[120px] flex justify-between flex-col">
      <div className="overflow-hidden bg-[#f2f2f2] h-44 w-full">
        <img
          // src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
          src={img}
          alt={cat_prefix}
          className="w-full block h-44 bg-[#f2f2f2]"
        />
      </div>
      <h2 className="w-full mt-2 mb-3 overflow-hidden text-base overflow-ellipsis">
        {title}
      </h2>
      <h3 className="mb-2 text-sm">{price} EGP</h3>
      <button className="px-3 py-2 font-bold text-white bg-green-700 border-2 border-green-700 rounded hover:bg-white hover:text-green-900">
        Add to card
      </button>
    </div>
  );
};

export default Product;
