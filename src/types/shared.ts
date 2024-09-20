export interface ICategoryProps {
  id?: number;
  title: string;
  prefix: string;
  img: string;
}
export type TLoading = "idle" | "pending" | "succeeded" | "failed";

export interface IProductProps {
  id?: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
}
