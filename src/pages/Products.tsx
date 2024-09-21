import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../components/eCommerce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actGetProductsByCatPrefix from "../store/products/act/actGetProductsByCatPrefix";
import { productsCleanup } from "../store/products/productsSlice";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    // let prefix : string;
    // if (params.prefix && typeof params.prefix === "string") {
    //   prefix = params.prefix;
    //   dispatch(actGetProductsByCatPrefix(prefix));
    // }
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  const productsList: JSX.Element[] | string =
    records.length > 0
      ? records.map((record) => (
          <div
            key={record.id}
            className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3"
          >
            <Product {...record} />
          </div>
        ))
      : "there are not categories ";

  return (
    <div className="container">
      <div className="flex flex-wrap justify-between w-full gap-3">
        {productsList}
      </div>
    </div>
  );
};

export default Products;
