import Hero from "./Hero";
import Testimonials from "../Pages/Testimonials";
import C_Fplan from "../Components/C_Fplan/C_Fplan";
import Footer from "../Components/Footer/Footer";


function Home() {
  return (
    <main>
      <Hero/>
      <C_Fplan />
      <Testimonials/>
    <Footer />
    </main>
  );
}

export default Home;