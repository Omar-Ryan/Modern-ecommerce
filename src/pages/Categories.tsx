import { useEffect } from "react";
import { Category } from "../components/eCommerce";
import actGetCategories from "../store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList: JSX.Element[] | string =
    records.length > 0
      ? records.map((record) => (
          <div
            key={record.id}
            className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3"
          >
            <Category {...record} />
          </div>
        ))
      : "there are not categories ";

  return (
    <div className="container">
      <div className="flex flex-wrap justify-between w-full gap-3">
        {categoriesList}
      </div>
    </div>
  );
};

export default Categories;
