import { useEffect } from "react";
import { Category } from "../components/eCommerce";
import actGetCategories from "../store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Loading } from "../components/feedback";
import { GridList, Heading } from "../components/common";

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

  return (
    <div className="container">
      <Heading>Categories</Heading>
      <div className="flex flex-wrap justify-between w-full gap-3">
        <Loading status={loading} error={error}>
          <GridList
            records={records}
            renderItem={(records) => <Category {...records} />}
          />
        </Loading>
      </div>
    </div>
  );
};

export default Categories;
