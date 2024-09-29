export interface CategoryProps {
  id?: number;
  title: string;
  prefix: string;
  img: string;
}
export type TLoading = "idle" | "pending" | "succeeded" | "failed";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  quantity?: number;
  max: number;
}
