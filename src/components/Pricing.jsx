import React from 'react'

const Pricing = () => {
  return (
    <div>
      <section id="pricing" className='py-12 px-6 scroll-mt-20'>
        {/* title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
         Simple, <span className="text-indigo-600">Transparent</span> Pricing
        </h2>
        <p className="text-slate-600 text-sm">
        Choose a plan that fits your workflow.
        </p>
     </div>

      {/* plans */}
     <section className='grid grid-cols-1 md:grid-cols-3  gap-8'>
             <div className="p-6 rounded-xl border-2 border-slate-200 bg-white shadow-sm   hover:border-indigo-600 hover:shadow-md hover:-translate-y-1 transition">

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Free Plan
            </h3>

            <p className="text-3xl font-bold text-slate-900 mb-4">
                $0<span className="text-sm text-slate-500">/month</span>
            </p>

            <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>✔ Basic scheduling</li>
                <li>✔ Task management</li>
                <li>✔ Limited analytics</li>
            </ul>

            <button className=" hover:scale-105 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Get Started
            </button>

       </div>






       <div className="p-6 rounded-xl border-2 border-slate-200  bg-white   hover:border-indigo-600 shadow-md hover:shadow-md hover:-translate-y-1 transition ">

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Pro <span className='text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full'>Most Popular</span>
          </h3>

          <p className="text-3xl font-bold text-slate-900 mb-4">
            $12<span className="text-sm text-slate-500">/month</span>
          </p>

          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li>✔ AI scheduling</li>
            <li>✔ Focus mode</li>
            <li>✔ Priority support</li>
            <li>✔ Full analytics</li>
          </ul>

          <button className="hover:scale-105  w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Get Started
          </button>

       </div>
      <div className="p-6 rounded-xl border-2 border-slate-200 bg-white shadow-sm  hover:border-indigo-600 hover:shadow-md hover:-translate-y-1 transition">

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Team Plan
              </h3>

              <p className="text-3xl font-bold text-slate-900 mb-4">
                $29<span className="text-sm text-slate-500">/month</span>
              </p>

              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>✔ Everthing in Pro</li>
                <li>✔ Team collaboration</li>
                <li>✔ shared dashboards</li>
              </ul>

              <button className=" hover:scale-105 transition w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Get Started
              </button>

      </div>

     </section>


      </section>
      

           


    

    </div>
  )
}

export default Pricing
