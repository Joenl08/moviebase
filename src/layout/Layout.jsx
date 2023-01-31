// components
import Menu from "../components/context/Menu";
import Footer from "../components/context/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
