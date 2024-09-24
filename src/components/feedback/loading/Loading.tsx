import React from "react";
import { TLoading } from "../../../types/shared";

type loadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: loadingProps) => {
  if (status === "pending") {
    return <p>Loading please wait ... .</p>;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
