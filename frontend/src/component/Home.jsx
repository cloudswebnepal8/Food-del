import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ExploreMenu from "./ExploreMenu";
import DownloadApp from "./DownloadApp";

const Home = ({ setShowLogin }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        onSearch={setSearch}
      />

      <section id="home">
        <Header />
      </section>

      <section id="menu">
        <ExploreMenu search={search} />
      </section>

      <section id="download">
        <DownloadApp />
      </section>
    </>
  );
};

export default Home;