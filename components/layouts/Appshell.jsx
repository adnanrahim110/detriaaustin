import Footer from "./Footer";
import Navbar from "./Navbar";

const Appshell = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Appshell;
