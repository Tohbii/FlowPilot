import React from 'react'

const HowItWorks = () => {
  return (
    <div>
        <section id="how-it-works" className='py-12 px-6  scroll-mt-20'>

                {/* Header */}
        <div className='text-center  mx-auto '>

                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                    How FlowPilot <span className='text-indigo-600'>Works</span> 
                </h2>

                <p className='text-slate-600 text-sm mb-12'> 
                Get started in minutes and let AI handle your daily planning  
                </p>

            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 '>

                <div className='text-center md:text-left p-6 rounded-xl border border-slate-200 hover:shadow-md transition'>

                    <div className='text-indigo-600 font-bold text-lg mb-2'>
                        01
                    </div>

                    <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                        Connect Your Calendar 
                    </h3>

                    <p className='text-slate-600 text-sm'>
                        Sync your calendar and task so FlowPilot understands your schedule and commitments.
                    </p>

                </div>

                <div className='text-center md:text-left p-6 border border-slate-200 rounded-xl hover:shadow-md transition'>

                    <div className='text-indigo-600 font-bold text-lg mb-2'>
                        02
                    </div>

                    <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                        Add Your Tasks 
                    </h3>

                    <p className='text-slate-600 text-sm'>
                        Input what you need to do, and let AI organize your workload based on priority and deadlines.
                    </p>

                </div>

                <div className='text-center md:text-left p-6 rounded-xl border border-slate-200 hover:shadow-md transition'>

                    <div className='text-indigo-600 font-bold text-lg mb-2'>
                        03
                    </div>

                    <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                        Let AI Plan Your Day 
                    </h3>

                    <p className='text-slate-600 text-sm'>
                        FlowPilot automatically creates an optimized daily plan to keep you productive and focused.
                    </p>

                </div>



           </div>

              </div>


            {/* cards */}
           

        </section>
        
      
    </div>
  )
}

export default HowItWorks
