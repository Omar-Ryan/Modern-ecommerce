import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="container mt-8">Content</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
