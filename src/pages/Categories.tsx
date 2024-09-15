import { Category } from "../components/eCommerce";

const Categories = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-between w-full gap-3">
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Category />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Category />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Category />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Category />
        </div>
        <div className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Categories;
