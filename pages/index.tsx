import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { BreadcrumbItem } from "../components/ui/BreadcrumbItem";
import Signup from "./Signup";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      </Breadcrumb>
      <Signup />
      <Footer />
    </>
  );
};

export default Home;
