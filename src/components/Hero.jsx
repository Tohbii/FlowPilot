import React from 'react'
import { Menu, X } from "lucide-react";
import { useState } from 'react'
import dashboard from '../assets/dashboard.jpg'


export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
      {/* NAVBAR */}
      <header className="bg-white  dark:bg-gray-900  fixed top-0 left-0 w-full z-50">
        
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-indigo-700 dark:text-indigo-600" href="#">
                         Flow<span className='text-white'>Pilot</span>
                        
                     </a>

                    {/* <!-- Centered menu links --> */}
                     <div className="flex flex-1 justify-center md:justify-center">
                         <nav aria-label="Global" className="hidden md:block">
                             <ul className="flex items-center gap-6 text-sm">
                                

                                 <li>
                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Features </a>
                                 </li>

                                 <li>
                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> How it Works </a>
                                 </li>

                                 <li>
                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Testimonials </a>
                                 </li>

                                 <li>
                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Pricing  </a>
                                 </li>

                                 <li>
                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> FAQ</a>
                                 </li>
                             </ul>
                         </nav>
                     </div>

                     {/* <!-- Right aligned login/register buttons --> */}
                     <div className="flex items-center gap-4">
                         <div className="sm:flex sm:gap-4">
                             <a className="block rounded-md bg-indigo-700 dark:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 dark:hover:bg-blue-600" href="#">
                                 Login
                             </a>
                             <a className="hidden rounded-md bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition hover:text-blue-600/75 dark:hover:text-blue-300/75 sm:block" href="#">
                                 Start Free Trial
                             </a>
                         </div>
                       </div>  


          

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
             {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
         <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-6 gap-4 md:hidden dark:text-white">
            <a className="hover:text-gray-500" href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a className="hover:text-gray-500" href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a className="hover:text-gray-500" href="#how-it-works" onClick={() => setIsOpen(false)}>How it Works</a>
            <a className="hover:text-gray-500" href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
        </div>
        )}
      </header>
        <section className='relative overflow-hidden bg-white min-h-screen  flex items-center py-10 md:py-12 '>
    <div className='max-w-7xl  text-center mx-auto px-6 grid md:grid-cols-2 gap-12 md:text-left items-center'>
        {/* CONTENT */}
        <div>
            {/* Badge */}
            <div className='inline-block mb-4 px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium'>
                NEW: AI Daily Planning is live
            </div>
             
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 '>
                Plan Less. 
                <span className='text-indigo-600'>Do More.</span>
            </h1>

            {/* subtext */}
            <p className='text-slate-600 text-sm mb-8 max-w-lg'>
                FlowPilot automatically schedules your tasks, block distractions, and help you stay focused on what truly matters.
            </p>

            {/* buttons */}
            {/* <div className='flex flex-wrap  gap-4 mb-6 justify-center  md:justify-start max-w-lg mx-auto '> */}
            
            <div className="flex flex-row items-center justify-center md:flex-row md:items-start md:justify-start gap-4 mb-6">
                <button className=' bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition'>
                    Start Free Trial 
                </button>
                <button className='border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition'>
                    Watch Demo
                </button>
            </div>

            {/* Social Proof  */}
            <p className='text-sm text-slate-500'>
                Trusted by 10,000+ professionals worldwide
            </p>

           
            
        </div>

         {/* Right Image */}

           <div className='relative'>
                <div className='rounded-xl overflow-hidden shadow-xl border border-slate-200'>
                    <img src={dashboard} alt="FlowPilot Dashboard" className='w-full h-auto' /> 
                </div>

            {/* gradient glow */}
                <div className='absolute -z-10 top-10 left-10 w-72 h-72 bg-indigo-300 opacity-30 blur-3xl rounded-full'>
                </div>

            </div>

       
        
    </div>
  </section>

    </>
    )
} 

    
    
//     <header id="hero" className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50" >
//                 <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
//                     <a className="block text-indigo-700 dark:text-indigo-600" href="#">
//                         Flow<span className='text-white'>Pilot</span>
                        
//                     </a>

//                     {/* <!-- Centered menu links --> */}
//                     <div className="flex flex-1 justify-center md:justify-center">
//                         <nav aria-label="Global" className="hidden md:block">
//                             <ul className="flex items-center gap-6 text-sm">
                                

//                                 <li>
//                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Features </a>
//                                 </li>

//                                 <li>
//                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> How it Works </a>
//                                 </li>

//                                 <li>
//                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Testimonials </a>
//                                 </li>

//                                 <li>
//                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> Pricing  </a>
//                                 </li>

//                                 <li>
//                                     <a className="text-gray-500 dark:text-gray-400 transition hover:text-gray-500/75 dark:hover:text-gray-300/75" href="#"> FAQ</a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>

//                     {/* <!-- Right aligned login/register buttons --> */}
//                     <div className="flex items-center gap-4">
//                         <div className="sm:flex sm:gap-4">
//                             <a className="block rounded-md bg-indigo-700 dark:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 dark:hover:bg-blue-600" href="#">
//                                 Login
//                             </a>

//                             <a className="hidden rounded-md bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition hover:text-blue-600/75 dark:hover:text-blue-300/75 sm:block" href="#">
//                                 Start Free Trial
//                             </a>
//                         </div>

//                         <button onClick={() => setIsOpen(!isOpen)} className="block rounded-sm bg-gray-100 dark:bg-gray-800 p-2.5 text-gray-600 dark:text-gray-400 transition hover:text-gray-600/75 dark:hover:text-gray-300/75 md:hidden">
//                             <span className="sr-only">Toggle menu</span>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* mobile menu */}
//                 {isOpen && (<div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden'>


//                 <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
//                 <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
//                 <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>


//                 </div>)}
        
//   </header>
  


  



