import {
  About,
  BlurCircle,
  Experience,
  Contact,
  Footer,
  Home,
  NavBar,
} from "../components";

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
