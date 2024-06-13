import About from "components/components/About";
import BlurCircle from "components/components/BlurCircle";
import Experience from "components/components/Experience";
import Home from "components/components/Home";
import NavBar from "components/components/NavBar";

export default function Page() {
  return (
    <main className="container mx-auto flex min-h-full flex-col gap-20 px-6 py-12 text-secondary-light md:gap-40 md:px-12 lg:px-20">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <BlurCircle />
    </main>
  );
}
