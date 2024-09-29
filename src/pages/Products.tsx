import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../components/eCommerce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actGetProductsByCatPrefix from "../store/products/act/actGetProductsByCatPrefix";
import { productsCleanup } from "../store/products/productsSlice";
import { Loading } from "../components/feedback";
import { GridList, Heading } from "../components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const productFullInfo = records.map((ele) => ({
    ...ele,
    quantity: cartItems[ele.id] || 0,
  }));

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

  return (
    <div className="container">
      <Heading>
        <span>{params.prefix}</span> Products
      </Heading>
      <div className="flex flex-wrap justify-between w-full gap-3">
        <Loading status={loading} error={error}>
          <GridList
            records={productFullInfo}
            renderItem={(records) => <Product {...records} />}
          />
        </Loading>
      </div>
    </div>
  );
};

export default Products;
