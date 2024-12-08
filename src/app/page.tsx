import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
    <Nav />
    <Hero />
    <Footer />
   </div>
  );
}
