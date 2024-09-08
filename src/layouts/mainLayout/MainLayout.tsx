import Header from "../../components/common/header/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="container mt-8">Content</div>
    </div>
  );
};

export default MainLayout;
