import AboutMe from "@/public/components/AboutMe/AboutMe";
import Footer from "@/public/components/Footer/Footer";
import Header from "@/public/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      <Header logo="checking" />
      <main className="main">
        <AboutMe/>
      </main>
      <Footer />
    </div>
  );
}
