function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            About Holy Child Tutorial and Learning Center
          </h1>
          <p className="text-xl text-green-600 italic">
            "We provide quality 1-on-1 and group tutorial services in a familial environment for both teachers and students"
          </p>
          <p className="text-gray-600 mt-4">025 M.L. Quezon Street, City Subdivision, San Pablo City, Laguna</p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              In 2018, Holy Child Tutorial and Learning Center opened its doors at 025 M.L. Quezon Street, 
              City Subdivision, San Pablo City, Laguna, founded by <strong className="text-green-800">Zenyor Zyroy Yambao</strong> and his family. 
              What began as a heartfelt mission to help students in the community has become a trusted partner for families seeking personalized, caring education.
            </p>
            <p>
              The center was built on a foundation of love, care, and an unwavering commitment to education. 
              Every classroom, every lesson, and every interaction reflects the values that our founder held dear: 
              compassion, dedication, and the belief that every child deserves quality education in an environment 
              that feels like home.
            </p>
            <p>
              Today, Holy Child Tutorial and Learning Center continues to carry forward this legacy, serving students 
              from toddlers to senior high school, providing not just academic support, but a second family where 
              learning and growth happen naturally.
            </p>
          </div>
        </section>

        {/* Founder's Legacy */}
        <section className="mb-16 bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
          <h2 className="text-3xl font-bold text-green-700 mb-4">In Memory of Our Founder</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong className="text-green-800">Zenyor Zyroy Yambao</strong> was more than just the founder 
              of Holy Child Tutorial and Learning Center, he was a caring and loving soul who always prioritized 
              helping others. His life was a testament to the power of kindness and service.
            </p>

            <p className="italic text-green-800">
              Though he is no longer with us, his spirit lives on in every lesson taught, every student encouraged, 
              and every family welcomed through our doors. The Yambao family continues his mission with the same 
              heart and dedication he embodied every day.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To provide quality, personalized education in a familial environment where both students 
                and teachers thrive together. We are committed to nurturing academic excellence while 
                fostering confidence, character, and a lifelong love of learning.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be the leading tutorial center in San Pablo City and beyond, known not only for 
                academic excellence but for the genuine care and family atmosphere we provide. We aspire 
                to be a place where every student feels valued and every family feels at home.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">What Makes Us Special</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Familial Environment */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-3xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">Familial Environment</h3>
                  <p className="text-gray-700">
                    We treat every student like family. Our center isn't just a classroom, it's a warm, 
                    welcoming space where students feel safe, supported, and valued. This family atmosphere 
                    extends to our teachers too, creating a community of care and mutual respect.
                  </p>
                </div>
              </div>
            </div>

            {/* Personalized Attention */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-3xl">👤</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">Personalized Attention</h3>
                  <p className="text-gray-700">
                    Every student learns differently. Our small class sizes and 1-on-1 sessions ensure 
                    that each child receives the individual attention they need to truly understand and 
                    excel. We adapt our teaching to match each student's unique learning style.
                  </p>
                </div>
              </div>
            </div>

            {/* Caring Tutors */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">Caring Tutors</h3>
                  <p className="text-gray-700">
                    Our tutors are more than just teachers. They're mentors who genuinely care about their 
                    students' success and well-being. Passionate, patient, and dedicated, they go beyond 
                    academics to build confidence and inspire a love for learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Flexible Scheduling */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-3xl">📅</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">Flexible Scheduling</h3>
                  <p className="text-gray-700">
                    We understand that every family has unique needs and busy schedules. That's why we 
                    offer flexible session times that work around your family's commitments, making quality 
                    education accessible and convenient.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Core Values</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              
              <div>
                <div className="text-4xl mb-3">💚</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Compassion</h3>
                <p className="text-gray-700">
                  We lead with empathy and understanding, recognizing that every student has their own journey.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to providing the highest quality education and support to all our students.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Community</h3>
                <p className="text-gray-700">
                  We build lasting relationships with our families, creating a supportive learning community.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Become Part of Our Family</h2>
          <p className="text-xl mb-6">
            Experience the Holy Child Tutorial and Learning Center difference—where quality education meets genuine care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/offers" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Explore Our Programs
            </a>
            <a href="/contact" className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-lg font-semibold transition">
              Get in Touch
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AboutUs