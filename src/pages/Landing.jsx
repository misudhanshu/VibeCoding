import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Other sections will go here */}
      <div className="h-96" /> {/* Spacer for scrolling test */}
    </main>
  );
};

export default Landing;