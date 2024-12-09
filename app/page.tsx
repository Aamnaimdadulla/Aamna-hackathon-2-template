

import HeroSection from "./component/HeroSection";
import Header from "./component/Header";
import { Delivery } from "./component/Delivery";
import { Ceramics } from "./component/Ceramics";
import Footer from "./component/Footer";



export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Delivery />
      <Ceramics />
      <Footer />

    </>
  );
}
