import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import StudentSuccess from "../components/StudentSuccess";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <StudentSuccess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Landing;
