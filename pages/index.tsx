import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/ui/Modal";
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
      {/* <Header /> */}
      <Modal title="Modal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        explicabo nostrum eum natus reprehenderit. Nesciunt veritatis laudantium
        debitis, impedit nisi architecto quisquam deleniti consectetur cum
        incidunt minima velit, ab sapiente. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit deleniti modi praesentium adipisci
        voluptates natus nulla ipsa dolores voluptatibus qui, ullam repellat,
        tempore beatae possimus numquam et nam error. Quis! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Modi dolores excepturi, quisquam
        similique earum non minima. Veritatis quas quaerat natus dolorem
        repudiandae minus ipsa commodi, sint saepe vitae delectus nam? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum atque
        facilis quae modi odio fugit dolorem et officiis. Tempore odit quaerat
        consectetur optio quidem tenetur quas placeat fuga vel? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum omnis incidunt,
        pariatur blanditiis cum quae, maxime, numquam voluptas suscipit
        necessitatibus modi maiores? Qui veritatis modi commodi excepturi
        corrupti labore alias! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis nemo a voluptatibus veniam unde non nisi eaque
        quae mollitia laborum inventore provident quasi, distinctio harum
        aliquid ipsum reprehenderit eos magni. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cum voluptate recusandae mollitia,
        architecto amet et vero molestiae quas. Nam necessitatibus ullam in
        nihil cupiditate culpa perferendis dolore est cum. Blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem,
        earum nihil dolore esse, facere officia amet aut ut fugit voluptates.
        Numquam voluptatem illum repudiandae inventore eos quo, impedit ratione.
      </Modal>
      {/* <Signup /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
