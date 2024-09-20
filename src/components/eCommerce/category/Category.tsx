import { Link } from "react-router-dom";
import { ICategoryProps } from "../../../types/shared";

// interface CategoryProps {
//   title: string;
//   prefix: string;
//   img: string;
// }

const Category = ({ title, prefix, img }: ICategoryProps) => {
  return (
    <div className="w-44 h-44">
      <Link to={`/categories/products/${prefix}`}>
        <div className="overflow-hidden bg-[#f2f2f2] rounded-[50%]">
          <img
            // src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
            src={img}
            alt={title}
            className="w-full"
          />
        </div>
        <h4 className="mt-2 text-sm text-center">{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
