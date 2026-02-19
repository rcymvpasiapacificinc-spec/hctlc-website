import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Clean Banner with Logo */}
      <header className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-16">
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Holy Child Tutorial and Learning Center Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Center Name - Clickable to home */}
          <Link to="/" className="block">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 hover:text-yellow-300 transition duration-300 cursor-pointer">
              Holy Child Tutorial and Learning Center
            </h1>
          </Link>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-green-50 max-w-4xl mx-auto italic leading-relaxed">
            "We provide quality 1-on-1 and group tutorial services in a familial environment for both teachers and students"
          </p>

        </div>

      </header>

      {/* Navigation - Full Width with spacing */}
      <nav className="bg-green-600 text-white sticky top-0 z-50 shadow-lg w-full">
        <div className="w-full">
          <ul className="flex justify-center space-x-16 py-4 px-4">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition font-medium text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition font-medium text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-yellow-300 transition font-medium text-lg">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-yellow-300 transition font-medium text-lg">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition font-medium text-lg">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-300 transition font-medium text-lg">
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

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-20">
        <div className="container mx-auto text-center">
          <p>© 2026 Holy Child Tutorial and Learning Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout