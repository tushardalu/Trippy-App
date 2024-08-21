import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://cdn.pixabay.com/photo/2024/01/04/16/48/landscape-8487906_640.jpg"
        title="Service"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
