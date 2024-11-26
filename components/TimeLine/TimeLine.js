import React, { useEffect, useRef, useState } from 'react';
import BackgroundVideo from '../BackgroundVideo';
import HeroBanner from '../Home/HeroBanner';

const TimeLine = () => {
  const stages = [
    {
      title: 'Stage 1',
      content: 'Complete a simple online medical form telling your clinician about your health and prior weight loss attempts..',
      imageUrl: '/images/stage1.jpg', // Make sure to replace with your actual image path
    },
    {
      title: 'Stage 2',
      content: 'Speak to your new clinician who can help you lose weight with a GLP-1 medication, if appropriate.',
      imageUrl: '/images/stage2.jpg', // Replace with your actual image path
    },
    {
      title: 'Stage 3',
      content: 'Receive your regularly scheduled medication in the mail straight from the pharmacy',
      imageUrl: '/images/stage3.jpg', // Replace with your actual image path
    },
  ];

  const [visibleStages, setVisibleStages] = useState(Array(stages.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.current.indexOf(entry.target);
          setVisibleStages((prev) => {
            const newVisibleStages = [...prev];
            newVisibleStages[index] = true;
            return newVisibleStages;
          });
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    // <div className="flex flex-col items-center">
    //   {stages.map((stage, index) => (
    //     <div
    //       key={index}
    //       ref={(el) => (refs.current[index] = el)}
    //       className={`flex flex-col md:flex-row items-center mb-10 transition-opacity duration-700 ${
    //         visibleStages[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    //       }`}
    //     >
    //       <div className="w-full md:w-1/2 p-5">
    //         <h2 className="text-2xl font-bold mb-2 font-inter">{stage.title}</h2>
    //         <p className="text-gray-700">{stage.content}</p>
    //       </div>
    //       <div className="w-full md:w-1/2">
    //         <img src={stage.imageUrl} alt={stage.title} className="rounded-lg shadow-lg" />
    //       </div>
    //     </div>
    //   )
    //   )}
    // </div>
    <div className='flex items-center justify-center border-2 w-[80vw] m-auto rounded-lg mt-2 p-8'>

{/* <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol> */}

<BackgroundVideo Component={HeroBanner} videoUrl={`/video/2.mp4`}/>


    </div>
  );
};

export default TimeLine;