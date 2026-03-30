import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-slate-400 py-12">

        <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Logo */}
            <h3 className="text-white text-lg font-semibold">
                FlowPilot
            </h3>

            {/* Links */}
            <div className="flex gap-6 text-sm">
                <a href="#features" className="hover:text-white">Features</a>
                <a href="#pricing" className="hover:text-white">Pricing</a>
                <a href="#testimonials" className="hover:text-white">Testimonials</a>
                <a href="#how-it-works" className="hover:text-white">How It Works</a>

            </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-sm mt-8">
            © {new Date().getFullYear()} FlowPilot. All rights reserved.
            </div>

        </div>

     </footer>
    </div>
  )
}

export default Footer
