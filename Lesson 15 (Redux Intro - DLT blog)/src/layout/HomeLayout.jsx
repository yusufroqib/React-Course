import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="App">
      <Header title="DLT Student Blog"  />
      <Nav  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;