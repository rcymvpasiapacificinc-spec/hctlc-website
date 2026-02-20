import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Clean Banner with Logo - Mobile Responsive */}
      <header className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-8 md:py-16">
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          {/* Logo - Smaller on mobile */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Holy Child Tutorial and Learning Center Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>

          {/* Center Name - Responsive text size */}
          <Link to="/" className="block">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 hover:text-yellow-300 transition duration-300 cursor-pointer leading-tight px-2">
              Holy Child Tutorial and Learning Center
            </h1>
          </Link>

          {/* Tagline - Responsive text size */}
          <p className="text-base sm:text-lg md:text-xl text-green-50 max-w-4xl mx-auto italic leading-relaxed px-4">
            "We provide quality 1-on-1 and group tutorial services in a familial environment for both teachers and students"
          </p>

        </div>
      </header>

      {/* Navigation - Mobile Responsive with wrapping */}
      <nav className="bg-green-600 text-white sticky top-0 z-50 shadow-lg w-full">
        <div className="w-full overflow-x-auto">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-16 py-3 md:py-4 px-2 md:px-4 min-w-max sm:min-w-0">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-300 transition font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer - Mobile Responsive */}
      <footer className="bg-green-800 text-white py-6 md:py-8 mt-12 md:mt-20">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm md:text-base">© 2026 Holy Child Tutorial and Learning Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout