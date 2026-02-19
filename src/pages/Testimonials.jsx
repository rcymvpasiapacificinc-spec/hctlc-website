function Testimonials() {
  const testimonials = [
    {
      text: "My daughter was struggling with Math, but after just three months here, she's now one of the top students in her class. The tutors are so patient!",
      author: "Mrs. Santos",
      grade: "Parent of Grade 4 Student",
      rating: 5
    },
    {
      text: "I never thought my son would enjoy studying, but he actually asks to go to his tutoring sessions now. They made learning fun for him.",
      author: "Mr. dela Cruz",
      grade: "Parent of Grade 2 Student",
      rating: 5
    },
    {
      text: "The teachers here really care. They don't just teach—they mentor. My daughter has grown so much in confidence.",
      author: "Mrs. Garcia",
      grade: "Parent of Grade 5 Student",
      rating: 5
    },
    {
      text: "Best decision we ever made. My son's grades improved from failing to honor roll in one school year!",
      author: "Mr. Reyes",
      grade: "Parent of Grade 8 Student",
      rating: 5
    },
    {
      text: "They treat my child like their own. The familial environment is real—you can feel it the moment you walk in.",
      author: "Mrs. Villanueva",
      grade: "Parent of Preschool Student",
      rating: 5
    },
    {
      text: "Very affordable and the quality is excellent. We tried other centers before, but this is the only one where we saw real progress.",
      author: "Mr. Torres",
      grade: "Parent of Grade 6 Student",
      rating: 5
    },
    {
      text: "My daughter was so shy before. Now she participates actively in class because her tutor here built up her confidence.",
      author: "Mrs. Mendoza",
      grade: "Parent of Grade 3 Student",
      rating: 5
    },
    {
      text: "The tutors here are not just knowledgeable—they genuinely care about the students. You can see it in how they interact.",
      author: "Mr. Bautista",
      grade: "Parent of Grade 10 Student",
      rating: 5
    },
    {
      text: "Our son passed the entrance exam to his dream high school! Thank you for all the preparation and support.",
      author: "Mrs. Cruz",
      grade: "Parent of Grade 6 Student",
      rating: 5
    },
    {
      text: "Very flexible with scheduling. As working parents, this is so important to us. They really understand our needs.",
      author: "Mr. Fernandez",
      grade: "Parent of Grade 7 Student",
      rating: 5
    },
    {
      text: "My daughter looks forward to her sessions every week. The tutor makes Science so interesting and easy to understand!",
      author: "Mrs. Ramos",
      grade: "Parent of Grade 9 Student",
      rating: 5
    },
    {
      text: "They helped my son not just with academics, but also with time management and study skills. Life-changing!",
      author: "Mr. Aquino",
      grade: "Parent of Grade 11 Student",
      rating: 5
    },
    {
      text: "The progress reports they provide are very detailed. We always know exactly how our child is doing.",
      author: "Mrs. Lopez",
      grade: "Parent of Grade 5 Student",
      rating: 5
    },
    {
      text: "My shy daughter finally found a place where she feels comfortable asking questions. Her tutor is so patient and encouraging.",
      author: "Mrs. Marquez",
      grade: "Parent of Grade 7 Student",
      rating: 5
    },
    {
      text: "They don't just focus on memorization—they teach understanding. My son actually enjoys Math now!",
      author: "Mr. Castro",
      grade: "Parent of Grade 8 Student",
      rating: 5
    },
    {
      text: "Very professional but warm at the same time. You can tell they truly care about each student's success.",
      author: "Mrs. Flores",
      grade: "Parent of Grade 12 Student",
      rating: 5
    },
    {
      text: "The small class sizes make such a difference. My daughter gets the attention she needs to really understand the lessons.",
      author: "Mr. Diaz",
      grade: "Parent of Grade 4 Student",
      rating: 5
    },
    {
      text: "They worked with my son's learning pace and never made him feel rushed. Now he's thriving in school!",
      author: "Mrs. Salazar",
      grade: "Parent of Grade 3 Student",
      rating: 5
    },
    {
      text: "Highly recommended! My daughter went from hating English to loving it. Her tutor made all the difference.",
      author: "Mr. Navarro",
      grade: "Parent of Grade 6 Student",
      rating: 5
    },
    {
      text: "Worth every peso. The investment in my child's education here has paid off tremendously. Thank you!",
      author: "Mrs. Rivera",
      grade: "Parent of Grade 10 Student",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Real testimonials from real families who trust us with their children's education.
          </p>
          <p className="text-sm text-gray-500 italic">
            *Testimonials translated to English for readability
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition border-l-4 border-green-600"
            >
              <div className="text-yellow-500 mb-4 text-xl">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t-2 border-gray-100 pt-4">
                <p className="font-bold text-green-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.grade}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-white text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Want to Add Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have seen their children thrive with us!
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
              Get Started on Facebook
            </a>
            <a 
              href="/offers" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl"
            >
              View Our Programs
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Testimonials