import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="text-9xl">404</h1>
      <p className="text-5xl">Page Not Found</p>
      <Link to="/" replace={true}>
        Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
