
import React, { useState } from 'react';
import { Calendar, Quote, Brain, BarChart, CheckSquare } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";


const testimonials = [
  {
    name: "David Mensah",
    role: "Product Designer",
    text: "FlowPilot completely changed how I manage my day. I get more done with less stress.",
    image: "https://i.pravatar.cc/40?img=1",

  },
  {
    name: "Sarah Johnson",
    role: "Founder",
    text: "The AI scheduling is insanely accurate. It feels like having a personal assistant.",
    image: "https://i.pravatar.cc/40?img=2",
  },
  { name: "Michael Lee",
    role: "Creator",
    text: "I used to feel overwhelmed daily. Now everything is structured and clear.",
    image: "https://i.pravatar.cc/40?img=3",
  }
];


export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef();

 const next = () => {
  gsap.to(cardRef.current, {
    opacity: 0,
    x: -50,
    duration: 0.2,
    ease: "power2.inOut",
    onComplete: () => {
      setIndex((prev) => (prev + 1) % testimonials.length);

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.inOut" }
      );
    },
  });
};
 const prev = () => {
  gsap.to(cardRef.current, {
    opacity: 0,
    x: 50,
    duration: 0.2,
    onComplete: () => {
      setIndex((prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.inOut" }
      );
    },
  });
};

  return (
    <section className='py-12 px-6 bg-gray-50  scroll-mt-20'>
    
        <div className='text-center max-w-2xl mx-auto mb-12'>

                    <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                        What People Are <span className='text-indigo-600'>Saying</span>
                    </h2>

                    <p className='text-slate-600 text-sm'>
                        Thousand of professionals use FlowPilot to stay productive every day.
                    </p>
        </div>

        <div className='flex justify-center '>

            <div  className='p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-md w-full max-w-md md:max-w-2xl lg:max-w-3xl' ref={cardRef}> 
                       
                        <div className='text-slate-600 text-sm mb-6'>
                            <div className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4 '>
                                <Quote />
                            </div>
                            {testimonials[index].text}
                        </div>
                        
                        <div className='flex items-center gap-3'>
                            <img src={testimonials[index].image} alt="user" className='w-10 h-10 rounded-full object-cover'/>
                        </div>

                        <div>
                            <p className='font-semibold text-slate-900'>{testimonials[index].name}</p>
                            <p className='text-sm text-slate-500'> {testimonials[index].role}</p>
                        </div>

                        <div className="flex justify-center gap-2">
                            <button className='flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-lg w-8 h-8  md:w-10 md:h-10' onClick={prev}>←</button>
                            <button className='flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-lg w-8 h-8 md:w-10 md:h-10 '  onClick={next}>→</button>
                        </div>


            </div>

           

        </div>


        </section>
     


    
  )
}


