function Home() {
  return (
    <div>
      {/* Hero Section - Light */}
      <section className="bg-gradient-to-b from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent mb-6">
            Welcome to Holy Child Tutorial and Learning Center
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Where every student is family, and learning is a journey we take together.
          </p>
        </div>
      </section>

      {/* About Us Teaser - Dark Green */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            Founded in 2018 by Zenyor Zyroy Yambao and family, we continue his legacy of compassionate, 
            personalized education. His spirit lives on in every student we serve and every lesson we teach.
          </p>
          <a href="/about" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Learn More About Us →
          </a>
        </div>
      </section>

      {/* Offers Teaser - Super White/Light Green */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Tailored Learning for Every Age</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            From toddlers to college students, we offer 1-on-1 and group tutorial services 
            tailored to each learner's needs, both in-person and online.
          </p>

          <a href="/offers" className="inline-block bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View All Programs →
          </a>
        </div>
      </section>

      {/* Testimonials Teaser - Dark Green */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </div>
            <h2 className="text-4xl font-bold">What Families Are Saying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-white text-lg mb-4 italic leading-relaxed">
                "The tutors here treat my daughter like family. Her confidence in Math went from zero to hero!"
              </p>
              <p className="text-sm text-green-100 font-semibold">Mrs. Garcia, Parent of Grade 5 Student</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-white text-lg mb-4 italic leading-relaxed">
                "His grades improved dramatically in just 2 months. The personalized attention made all the difference."
              </p>
              <p className="text-sm text-green-100 font-semibold">Mr. Reyes, Parent of Grade 8 Student</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/testimonials" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Read More Success Stories →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Teaser - Super White/Light Green */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Visit Us or Get in Touch</h2>
          <p className="text-xl text-gray-700 mb-2">
            025 M.L. Quezon Street, City Subdivision, San Pablo City, Laguna
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you and answer any questions about our programs.
          </p>
          <a href="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Contact Us →
          </a>
        </div>
      </section>

      {/* Careers Teaser - Dark Green */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Join Our Team
          </div>
          <h2 className="text-4xl font-bold mb-6">Become Part of Our Family</h2>
          <p className="text-xl text-green-50 mb-10 leading-relaxed max-w-3xl mx-auto">
            Are you passionate about education? We're looking for caring, dedicated tutors who want to 
            make a real difference in students' lives. Be part of our familial learning community.
          </p>

          <a href="/careers" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Join Our Team →
          </a>
        </div>
      </section>

      {/* Final CTA - Super White/Light Green */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-6">Ready to Get Started?</h2>
          <p className="text-2xl text-gray-700 mb-12">
            Let's work together to help your child reach their full potential.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/offers" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              View Programs
            </a>
            <a href="/contact" className="inline-block bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home