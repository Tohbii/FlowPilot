import React from 'react'
import { Calendar, Quote, Brain, BarChart, CheckSquare } from "lucide-react";

const Testimonials = () => {
  return (
    <div>
      <div className='text-center max-w-2xl mx-auto mb-16'>

        <h2 className='text-3xl md:text-4x1 font-bold text-slate-900 mb-4'>
            What people are saying
        </h2>

        <p className='text-slate-600'>
            Thousand of professionals use FlowPilot to stay productive every day.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition'>
            <p className='text-slate-600 text-sm mb-6'>
                FlowPilot completely changed how I manage my day. I get more done with less stress.

            </p>
            <div className='flex items-center gap-3'>
                <img src="https://i.pravatar.cc/40?img=1" alt="user" className='w-10 h-10 rounded-full object-cover'/>
            </div>

            <div>
                <p className='font-semibold text-slate-900'>David Mensah</p>
                <p className='text-sm text-slate-500'>Product Designer</p>
            </div>

        </div>

        <div className='p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition'>
            <p className='text-slate-600 text-sm mb-6'>
                The AI scheduling is insanely accurate. It feels like having a personal assistant

            </p>
            <div className='flex items-center gap-3'>
                <img src="https://i.pravatar.cc/40?img=2" alt="user" className='w-10 h-10 rounded-full object-cover'/>
            </div>

            <div>
                <p className='font-semibold text-slate-900'> Sarah Johnson</p>
                <p className='text-sm text-slate-500'>Startup Founder</p>
            </div>

        </div>

        <div className='p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition'>
            <p className='text-slate-600 text-sm mb-6'>
                I used to feel overwhelmed daily. Now everything is structured and clear

            </p>
            <div className='flex items-center gap-3'>
                <img src="https://i.pravatar.cc/40?img=3" alt="user" className='w-10 h-10 rounded-full object-cover'/>
            </div>

            <div>
                <p className='font-semibold text-slate-900'>Micheal Lee</p>
                <p className='text-sm text-slate-500'>Software Engineer</p>
            </div>

        </div>


      </div>



    </div>
  )
}

export default Testimonials
