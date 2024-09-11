import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/common";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="container mt-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
