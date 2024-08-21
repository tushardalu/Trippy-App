import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://media.istockphoto.com/id/2154111192/photo/decorative-lights-on-a-beautiful-summer-night.webp?b=1&s=170667a&w=0&k=20&c=eGAgzP-lTQRrD9cBOV8w5KTeEQZ3HyDNkFBCvO13qTg="
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
