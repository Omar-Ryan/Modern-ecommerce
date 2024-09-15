import { Product } from "../components/eCommerce";

const Products = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-between w-full gap-3">
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Product />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Product />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Product />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Product />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
