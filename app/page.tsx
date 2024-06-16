import About from "components/components/About";
import BlurCircle from "components/components/BlurCircle";
import Contact from "components/components/Contact";
import Experience from "components/components/Experience";
import Footer from "components/components/Footer";
import Home from "components/components/Home";
import NavBar from "components/components/NavBar";

export default function Page() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto flex min-h-full flex-col gap-40 px-6 pb-12 pt-32 text-secondary-light md:px-12 md:pt-12 lg:px-20">
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
        <BlurCircle />
      </main>
    </div>
  );
}
