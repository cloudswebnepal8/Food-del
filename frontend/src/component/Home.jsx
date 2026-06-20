import Navbar from "./Navbar";
import Header from "./header";
import ExploreMenu from "./ExploreMenu";
import DownloadApp from "./DownloadApp";

const Home = ({ setShowLogin }) => {
  return (
    <>
      <Navbar setShowLogin={setShowLogin} />

      <section id="home">
        <Header />
      </section>

      <section id="menu">
        <ExploreMenu />
      </section>

      <section id="download">
        <DownloadApp />
      </section>
    </>
  );
};

export default Home;