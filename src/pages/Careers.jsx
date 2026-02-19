function Careers() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Join Our Teaching Family
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Love teaching? We'd love to meet you! No matter your background, if you're passionate about 
            helping students learn, let's talk.
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Why Our Teachers Love It Here</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-l-4 border-green-600 shadow-md">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Like Family</h3>
              <p className="text-gray-700">
                You're not just an employee here, you're part of our family. We support each other and celebrate together.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-8 border-l-4 border-teal-600 shadow-md">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Your Schedule Works</h3>
              <p className="text-gray-700">
                Part-time? Full-time? Weekends only? We'll work around your life. You tell us what works for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Room to Grow</h3>
              <p className="text-gray-700">
                Try new teaching methods, develop your skills, and grow alongside the students you help.
              </p>
            </div>

          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16 bg-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">We're Looking For Teachers</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            All positions available part-time or full-time, your choice!
          </p>
          
          <div className="space-y-6">
            
            {/* All Levels Combined */}
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-green-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Tutors for All Levels</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Part-time Available
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Full-time Available
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                We need caring tutors for students of all ages, from toddlers learning their ABCs to college students 
                preparing for board exams. Whatever level you're comfortable teaching, we have students who need you!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Preschool (Ages 2-5)</h4>
                  <p className="text-gray-600 text-sm">Help little ones discover the joy of learning through play and patience.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Elementary (Grades 1-6)</h4>
                  <p className="text-gray-600 text-sm">Guide students in Math, English, Science, Filipino, build their foundations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Junior High (Grades 7-10)</h4>
                  <p className="text-gray-600 text-sm">Support students through challenging subjects and help boost their confidence.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Senior High (Grades 11-12)</h4>
                  <p className="text-gray-600 text-sm">Prepare students for college entrance exams and their chosen career paths.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">College Students</h4>
                  <p className="text-gray-600 text-sm">Help with major subjects, thesis guidance, and board exam preparation.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-green-800 mb-3">What We're Looking For:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Passion for teaching and helping students succeed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Patient, kind, and caring personality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Good communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Reliable and professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Teaching experience is a plus, but not required. We can train you!</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Simple Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-teal-600">
            <h2 className="text-2xl font-bold text-green-700 mb-6">What You'll Need:</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>A genuine love for teaching and working with students</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Resume or CV</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>NBI clearance (or willing to get one)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>Valid ID</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>That's it! If you care about students, we want to talk to you.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How to Apply */}
        <section className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl p-12 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Interested? Let's Chat!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send us a message on Facebook with your resume and tell us a bit about yourself!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">What Happens Next:</h3>
            <div className="text-left space-y-3 text-lg">
              <p className="flex items-start">
                <span className="font-bold mr-3">1.</span>
                <span>Message us on Facebook with your resume and brief introduction</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3">2.</span>
                <span>We'll have a friendly conversation to get to know you</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3">3.</span>
                <span>Visit our center, meet the team, see the environment</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3">4.</span>
                <span>If it feels right for both of us, welcome to the family!</span>
              </p>
            </div>
          </div>

          <a 
            href="https://web.facebook.com/HolyChildTutorial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-green-700 px-10 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Message Us on Facebook
          </a>

          <p className="text-green-100 mt-6 text-sm">
            Don't be shy, we're friendly! Even if you're not sure, reach out and let's talk. 😊
          </p>
        </section>

      </div>
    </div>
  )
}

export default Careers