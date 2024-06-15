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
      <main className="container mx-auto flex min-h-full flex-col gap-32 px-6 py-12 text-secondary-light md:gap-40 md:px-12 lg:px-20">
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
