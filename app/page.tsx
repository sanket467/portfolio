import AboutMe from "@/public/components/AboutMe/AboutMe";
import Footer from "@/public/components/Footer/Footer";
import Experience from "@/public/components/Experience/Experience";
import Certification from "@/public/components/Certifications/Certifications";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Experience />
      <Certification />
      <Footer />
    </div>
  );
}
