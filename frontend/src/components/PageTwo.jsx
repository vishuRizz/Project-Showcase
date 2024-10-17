import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdMiscellaneousServices } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";

gsap.registerPlugin(ScrollTrigger);

const PageTwo = () => {
  useEffect(() => {
    gsap.fromTo(
      '.heading',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.heading',
          start: 'top 80%', 
        },
      }
    );

    gsap.fromTo(
      '.paragraph',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.paragraph',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.card',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.card',
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      '.last-section',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.last-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="p-4 text-black md:p-8 bg-slate-100">
      <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl heading">
        Helping you work smarter
      </h2>
      <p className="mb-12 text-base text-center md:text-lg paragraph">
        Our simple CRM software provides everything you need to run <br />
        your sales and marketing, in one easy-to-use yet powerful system.
      </p>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <div className="w-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
          <div className="flex justify-center mb-4 text-4xl">
            <FcSalesPerformance/>
          </div>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Sales</h3>
          <p className="text-gray-600">
            The essential Sales CRM tool to manage your customers and prospects
            by keeping track of your interactions.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Read more →
          </a>
        </div>

        <div className="w-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
          <div className="mb-4 text-4xl">📧</div>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Marketing</h3>
          <p className="text-gray-600">
            Everything you need to execute, manage and monitor your marketing
            campaigns and activities.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Read more →
          </a>
        </div>

        <div className="w-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
          <div className="flex justify-center mb-4 text-4xl text-center">
            <MdMiscellaneousServices/>
          </div>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Service</h3>
          <p className="text-gray-600">
            Deliver great customer service making sure all support requests are
            dealt with efficiently and nothing gets forgotten.
          </p>
          <a href="#" className="inline-block mt-4 text-blue-500">
            Read more →
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 md:mt-20 last-section">
        <div>
          <div className="text-2xl font-bold md:text-4xl">
            <h1 className="text-center">
              Why 3,000+ businesses <br /> choose us
            </h1>
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <p className="text-sm text-center md:text-base">
              At Really Simple Systems CRM, we are dedicated to <br />
              helping businesses manage better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
