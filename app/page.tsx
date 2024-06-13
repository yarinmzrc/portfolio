import About from "components/components/About";
import NavBar from "components/components/NavBar";

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-6 md:px-12 lg:px-20 min-h-full text-secondary-light flex flex-col gap-20 md:gap-40">
      <NavBar />
      <About />
    </main>
  );
}
