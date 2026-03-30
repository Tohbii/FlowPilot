import React from 'react'
import { Calendar, Brain, BarChart, CheckSquare } from "lucide-react";

const Features = () => {
  return (
    <div  id="features" className=' bg-white text-center max-w-2xl mx-auto mb-12 scroll-mt-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Everything you need to stay <span className='text-indigo-600'>productive</span>
        </h2>
        <p className=' text-slate-600 text-sm'>
            Flowpilot combines AI scheduling, focus tools, and analytics into one seamless experience
        </p>

      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6' >
        <div className='text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition flex flex-col items-center '>
            <div className='mb-4 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-lg
            bg-indigo-50 '>
                <Calendar size={28}/>
            </div>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>
               Smart Scheduling 
            </h3>
            <p className='text-slate-600 text-sm'>
                Automatically organizes your day based on priorities and deadlines, and available time - so you always know what to do next


            </p>

        </div>
        <div className='text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition flex flex-col items-center '>
            <div className='mb-4 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-lg
            bg-indigo-50'>
                <Brain size={28}/>
            </div>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>
               Focus Mode
            </h3>
            <p className='text-slate-600 text-sm'>
                Eliminate distractions and stay locked in with intelligent focus sessions designed to maximize deep work.

            </p>

        </div>
        <div className='text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition flex flex-col items-center '>
            <div className='mb-4 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-lg
            bg-indigo-50'>
                <CheckSquare size={28}/>

            </div>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>
               Task Prioritization
            </h3>
            <p className='text-slate-600 text-sm'>
                Identify what truly matters with AI-driven prioritization that helps you focus on high-impact tasks

            </p>

        </div>
        <div className='p-6 rounded-xl border border-slate-200 hover:shadow-lg transition flex flex-col items-center'>
            <div className='mb-4 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-lg
              bg-indigo-50'>
                <BarChart size={28}/>

            </div>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>
               Productivity Analytics
            </h3>
            <p className='text-slate-600 text-sm'>
                Track your performance with clear insights and data to help you improve your workflow over time
            </p>

        </div>
        

      </div>

    </div>
    
  )
}

export default Features
