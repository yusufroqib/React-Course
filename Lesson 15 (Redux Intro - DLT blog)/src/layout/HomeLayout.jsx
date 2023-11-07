import { Outlet } from "react-router-dom";
import { Header, Nav, Footer } from "../components/index";


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