function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Reach out with any questions about our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            
            {/* Visit Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Visit Us
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Holy Child Tutorial and Learning Center
                  </p>
                  <p className="text-gray-600">025 M.L. Quezon Street</p>
                  <p className="text-gray-600">City Subdivision</p>
                  <p className="text-gray-600">San Pablo City, Laguna</p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-teal-600">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">💬</span>
                Contact Us
              </h2>
              <div>
                <p className="text-sm text-gray-500 mb-3">Preferred Contact Method</p>
                <a 
                  href="https://web.facebook.com/HolyChildTutorial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Message Us on Facebook
                </a>
                <p className="text-xs text-gray-500 mt-3">Click to chat with us directly</p>
              </div>
            </div>

          </div>

          {/* Right Column - Map (matches left column height) */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Find Us on the Map</h2>
            
            {/* Google Maps Embed - adjusted height to match left column */}
            <div className="rounded-xl overflow-hidden shadow-md mb-4" style={{height: '380px'}}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8662847889944!2d121.31547951531944!3d14.070211890092892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5d88d030e63d%3A0xf0e41e3b559e0b44!2sHoly%20Child%20Tutorial%20and%20Learning%20Center!5e0!3m2!1sen!2sph!4v1644000000000!5m2!1sen!2sph"
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen="" 
                loading="lazy"
                title="Holy Child Tutorial and Learning Center Location"
              ></iframe>
            </div>

            <a 
              href="https://www.google.com/maps/place/Holy+Child+Tutorial+and+Learning+Center/@14.0702118,121.3154795,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd5d88d030e63d:0xf0e41e3b559e0b44!8m2!3d14.0702066!4d121.3180544!16s%2Fg%2F11g1y7hy4h?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full text-center"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-white shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-xl mb-6">
            Message us on Facebook to schedule a visit or ask any questions!
          </p>
          <a 
            href="https://web.facebook.com/HolyChildTutorial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-green-700 px-10 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Start a Conversation
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact