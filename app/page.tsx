import AboutMe from "@/public/components/AboutMe/AboutMe";
import Footer from "@/public/components/Footer/Footer";
import Header from "@/public/components/Header/Header";
import Image from "next/image";
import anime from 'animejs';


export default function Home() {
  return (
    <div>
      {/* <Header logo="checking" /> */}
      {/* <main className="main"> */}
        <AboutMe/>
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  );
}
