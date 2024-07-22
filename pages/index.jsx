import Contact from "./compoments/Contact";
import Footer from "./compoments/Footer";
import Header from "./compoments/header";
import Hero from "./compoments/hero";
import Testimonial from "./compoments/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
