function Offers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality education tailored to each student's unique learning style from toddlers to college students.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-t-4 border-green-600">
            <div className="text-4xl mb-3">👤</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">1-on-1 Sessions</h3>
            <p className="text-gray-600">Personalized attention focused entirely on your child's needs</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-t-4 border-teal-600">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Group Classes</h3>
            <p className="text-gray-600">Small groups where students learn together in a supportive environment</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border-t-4 border-blue-600">
            <div className="text-4xl mb-3">📐</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Tailored Learning</h3>
            <p className="text-gray-600">Every lesson adapted to match your child's pace and learning style</p>
          </div>
        </div>

        {/* Programs by Level */}
        <div className="space-y-12">
          
          {/* Toddlers & Preschool */}
          <section className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🎨</div>
              <div>
                <h2 className="text-3xl font-bold text-green-800">Toddlers & Preschool</h2>
                <p className="text-gray-600">Ages 2-5 Years</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Building a strong foundation through play-based learning. We make early education fun, 
              engaging, and perfectly paced for young learners.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">What We Cover:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>Basic literacy (letters, sounds, simple words)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>Early numeracy (numbers, counting, shapes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>Colors, patterns, and basic concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>Motor skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>Social skills and following instructions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-3">Format Options:</h3>
                <p className="text-gray-700 mb-3">✓ 1-on-1 personalized sessions</p>
                <p className="text-gray-700 mb-3">✓ Small group classes (3-5 children)</p>
                <p className="text-gray-700">✓ Both in-person and online options available</p>
              </div>
            </div>
          </section>

          {/* Elementary */}
          <section className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-green-600">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">📚</div>
              <div>
                <h2 className="text-3xl font-bold text-green-800">Elementary Level</h2>
                <p className="text-gray-600">Grades 1-6</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Building strong academic foundations across all core subjects. We help students develop confidence, 
              good study habits, and a genuine love for learning.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">Subjects We Teach:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Mathematics (problem-solving, critical thinking)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>English (reading, writing, grammar, comprehension)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Science (inquiry-based learning, experiments)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Filipino (reading, writing, communication)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Homework assistance and test preparation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-3">Format Options:</h3>
                <p className="text-gray-700 mb-3">✓ 1-on-1 sessions for focused learning</p>
                <p className="text-gray-700 mb-3">✓ Small group classes for collaborative learning</p>
                <p className="text-gray-700">✓ In-person or online, your choice</p>
              </div>
            </div>
          </section>

          {/* Junior High */}
          <section className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-teal-600">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🎓</div>
              <div>
                <h2 className="text-3xl font-bold text-green-800">Junior High School</h2>
                <p className="text-gray-600">Grades 7-10</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Supporting students through more challenging academic content. We help build confidence, 
              master complex subjects, and develop independent learning skills.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">Subjects We Cover:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Advanced Mathematics (Algebra, Geometry)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Science (Biology, Chemistry, Physics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>English (Literature, Essay Writing, Analysis)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Filipino and Social Studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Exam preparation and study strategies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-3">Format Options:</h3>
                <p className="text-gray-700 mb-3">✓ 1-on-1 intensive sessions</p>
                <p className="text-gray-700 mb-3">✓ Small study groups (subject-specific)</p>
                <p className="text-gray-700">✓ Flexible in-person or online learning</p>
              </div>
            </div>
          </section>

          {/* Senior High */}
          <section className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-blue-600">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🏆</div>
              <div>
                <h2 className="text-3xl font-bold text-green-800">Senior High School</h2>
                <p className="text-gray-600">Grades 11-12</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Preparing students for college and beyond. Specialized support for different tracks, 
              college entrance exam preparation, and academic excellence.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">We Support All Tracks:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>STEM (Science, Technology, Engineering, Math)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>ABM (Accountancy, Business, Management)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>HUMSS (Humanities and Social Sciences)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>General subjects across all tracks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>College entrance exam preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Research and capstone project assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-3">Format Options:</h3>
                <p className="text-gray-700 mb-3">✓ 1-on-1 specialized tutoring</p>
                <p className="text-gray-700 mb-3">✓ Track-specific study groups</p>
                <p className="text-gray-700">✓ In-person or online flexibility</p>
              </div>
            </div>
          </section>

          {/* College Students */}
          <section className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-purple-600">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🎯</div>
              <div>
                <h2 className="text-3xl font-bold text-green-800">College Students</h2>
                <p className="text-gray-600">All Year Levels & Courses</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Continue your academic success in college with specialized tutoring for your major subjects. 
              We support students across all programs and year levels with subject-specific expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-green-800 mb-3">Popular Subjects:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Mathematics (Calculus, Statistics, Algebra)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Sciences (Chemistry, Physics, Biology)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Accounting and Finance subjects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Business and Management courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Engineering subjects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Research assistance and thesis guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Board exam preparation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-3">Format Options:</h3>
                <p className="text-gray-700 mb-3">✓ 1-on-1 specialized tutoring</p>
                <p className="text-gray-700 mb-3">✓ Small study groups (course-specific)</p>
                <p className="text-gray-700 mb-6">✓ Flexible in-person or online sessions</p>
                
                <h3 className="font-bold text-green-800 mb-3">We Help With:</h3>
                <p className="text-gray-700 mb-2">• Difficult major subjects</p>
                <p className="text-gray-700 mb-2">• Exam preparation</p>
                <p className="text-gray-700 mb-2">• Thesis and research projects</p>
                <p className="text-gray-700">• Board exam review</p>
              </div>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-white text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss which program is the best fit for your child. We'll create a personalized learning plan together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://web.facebook.com/HolyChildTutorial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-green-700 px-10 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Contact Us
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
            >
              Visit Us
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Offers