import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Portfolio from "./pages/portfolio";
import SocialLink from "./pages/socialLink";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
        <SocialLink />
      </div>
    </>
  );
}

export default App;
