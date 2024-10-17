import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import PageTwo from '../components/PageTwo';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
  
    tl.fromTo(
      '.heading', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
    tl.fromTo(
      '.para', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 
      '-=1'
    );
    tl.fromTo(
      '.buttons button',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.3 },
      '-=0.5' 
    );
  }, []);
  

  return (
    <>
      <div className="min-h-screen p-8 text-white bg-gradient-to-br from-black via-indigo-800 to-purple-800">
        <Navbar />
        <main className="max-w-4xl mx-auto text-center mt-28">
          <div className="mb-6 text-6xl font-bold heading max-md:text-3xl">
            <h1>The Powerful</h1>
            <h1>Club Management System</h1>
          </div>
          <div className="mt-20 paragraph">
            <p className="max-w-2xl mx-auto mb-12 text-xl para text-slate-300 max-md:text-lg">
              Build long-lasting relationships, save time and make more sales with the <br /> 
              simple CRM software that's designed for growing teams working B2B. <br /> 
              Try us for free.
            </p>
          </div>
          <div className="p-4 buttons">
            <div>
              <button className="p-2 mr-4 border rounded-xl hover:bg-white hover:text-black">
                Try Us
              </button>
              <button className="p-2 mr-4 border rounded-xl hover:bg-white hover:text-black">
                About Us
              </button>
            </div>
          </div>
        </main>
      </div>
      <PageTwo />
    </>
  );
};

export default Home;
