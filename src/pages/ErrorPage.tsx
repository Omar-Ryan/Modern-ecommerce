import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl">{errorStatus}</h1>
      <p className="text-5xl">{errorStatusText}</p>
      <Link to="/" replace={true}>
        Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
