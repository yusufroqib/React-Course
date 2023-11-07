import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

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