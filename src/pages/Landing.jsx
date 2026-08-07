import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";

const Landing = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />

      {/* Other sections will go here */}
    </main>
  );
};

export default Landing;
