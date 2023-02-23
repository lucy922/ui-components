import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Signup from "./Signup";

const Home: NextPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <Header />
      <Signup />
      <Footer />
    </>
  );
};

export default Home;
