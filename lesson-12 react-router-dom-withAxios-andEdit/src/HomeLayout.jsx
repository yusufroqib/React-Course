import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const HomeLayout = ({search, setSearch}) => {
  return (
    <div className="App">
      <Header title="DLT Student Blog" />
      <Nav  search={search} setSearch={setSearch}  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;