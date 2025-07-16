import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Coffee,
  Calendar,
  MapPin,
  DollarSign,
  BookOpen,
  Users,
  Briefcase,
  Star,
  Phone,
  Mail,
  Clock,
  Award
} from 'lucide-react';



const YouthBaristaProgram = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'program', label: 'Program' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];



  const programDetails = [
    {
      icon: <Calendar className="w-8 h-8 mb-4" />,
      title: 'Schedule',
      description: '10-week program\nEvery Sunday\n8:30 AM - 1:00 PM\nStarting September 7th, 2025'
    },
    {
      icon: <MapPin className="w-8 h-8 mb-4" />,
      title: 'Location',
      description: 'Rainier Avenue Church\nJoin us in our welcoming community space equipped with professional coffee training facilities. Learn more at www.rainieravenuechurch.org'
    },
    {
      icon: <DollarSign className="w-8 h-8 mb-4" />,
      title: 'Completion Bonus',
      description: 'Students will receive a stipend after successfully completing the entire 10-week program'
    }
  ];

  const learningItems = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Barista Skills',
      description: 'Master the art of coffee making with hands-on training using professional equipment'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Biblical Discipleship',
      description: 'Grow in faith through engaging biblical studies and spiritual mentorship'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Teamwork',
      description: 'Build collaborative skills through creative group projects and team challenges'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Customer Service',
      description: 'Develop professional communication and customer interaction skills'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Resume Building',
      description: 'Gain practical work experience that strengthens your resume and future opportunities'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Creative Projects',
      description: 'Express creativity while learning practical business and leadership skills'
    }
  ];

  const mediaItems = [
    {
      category: 'photos',
      title: 'Training Sessions',
      description: 'Students learning professional barista techniques and coffee brewing methods',
      imageUrl: '/students.jpg',
    },
    {
      category: 'photos',
      title: 'Team Projects',
      description: 'Collaborative creative projects that build teamwork and leadership skills',
      imageUrl: 'student.jpg',
    },
    {
      category: 'photos',
      title: 'Biblical Studies',
      description: 'Engaging in meaningful discussions and spiritual growth activities',
      imageUrl: 'group.jpg'
    }
  ];

  const studentWork = [
    {
      title: "Barista Demo Reel",
      description: "Hands-on espresso and latte art training.",
      youtube: "4nrERTCyPwI?si=SID1GuDkIZQgSCI8",
    },
    {
      title: "Business Poster Design",
      description: "A branding project created by Team Mocha.",
      image: "/menu.jpg",
    },
  ];


  const videos = [
    {
      title: 'Welcome Video',
      description: 'Get an inside look at what makes our Youth Barista Program special',
      placeholder: '🎥 Program Overview'
    },
    {
      title: 'Testimonial Videos',
      description: 'Hear directly from students about their transformative experiences',
      placeholder: '🎥 Student Stories'
    },
    {
      title: 'Training Highlights',
      description: 'Watch students master new skills and grow in confidence',
      placeholder: '🎥 Behind the Scenes'
    }
  ];

  const testimonials = [
    {
      content: 'I enjoyed learning how to take orders, interact with customers, and set up the café. I also appreciated the flexibility to create new drinks.',
      author: 'Marium, Program Graduate'
    },
    {
      content: 'I loved being able to work and talk with people. It brought me joy, and I want to do it again.',
      author: 'Kaylene, Program Graduate'
    },

  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'rp@rainieravenuechurch.org',
      subtitle: 'For applications and general inquiries'
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: 'Facebook',
    //   details: '(555) 123-4567',
    //   subtitle: 'Call us Monday-Friday, 9 AM - 5 PM'
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '5900 Rainier Ave S, Seattle, WA 98118 ',
      subtitle: ' (In the upstairs lobby!)'
    },
    // {
    //   icon: <Clock className="w-6 h-6" />,
    //   title: 'Office Hours',
    //   details: 'Monday - Friday: 9 AM - 5 PM\nSaturday: 10 AM - 2 PM\nSunday: After service',
    //   subtitle: ''
    // }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 h-16">
              <img
                src="/hero-image3.jpg"
                alt="Cafe Logo"
                className="h-full aspect-square object-contain"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-[#335766] to-[#b1d0df] bg-clip-text text-transparent">
                Rangkham's Place Youth Cafe
              </div>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 👇 Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero4.jpg")' }}
        ></div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"></div> */}

        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Foreground Content */}
        <div className="container mx-auto px-4 text-center relative z-10  mt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Rangkham's Place Youth Cafe
            </h1>
            <div className="bg-[#335766]/20 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300 mt-20">
  <p className="text-sm md:text-2xl text-white/90">
    A transformative 10-week journey that combines practical job training and spiritual growth to empower youth for meaningful work and purpose.
  </p>
  <p className="pt-5 text-white/90">
    Apply today! Next cohort starts September 7th, 2025
  </p>
</div>


<a
  href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new" // Replace with your application URL
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-600"
>
  APPLY NOW
</a>

          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-[#b1d0df] to-[#335766] ">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Develop valuable skills that will serve you in work and life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="text-white/90 mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transformative 10-week journey that combines practical job training and spiritual growth to empower youth for meaningful work and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#335766] to-[#b1d0df] text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center text-white/90">
                  {detail.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{detail.title}</h3>
                <p className="text-white/90 whitespace-pre-line leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Work */}
      <section className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing achievements and projects from our participants
            </p>
          </div>

          <section className="w-full h-screen">
            <div className="w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/4nrERTCyPwI?si=SID1GuDkIZQgSCI8" // Use your video ID
                title="Full-Screen Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </section>


      {/* What You'll Learn */}




      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Moments from our program in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Videos */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our program in action through video highlights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-lg font-medium">
                  {item.placeholder}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#335766]  to-[#b1d0df]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our program graduates
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              >
                <div className="text-6xl text-pink-300 absolute top-4 left-6 font-serif">"</div>
                <div className="pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    {testimonial.content}
                  </p>
                  <p className="text-gray-900 font-bold">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className=" bg-[#335766] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch to learn more or submit your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{info.title}</h3>
                </div>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-2">
                  {info.details}
                </p>
                {info.subtitle && (
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Youth Barista Program - Rainier Avenue Church. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default YouthBaristaProgram;



export function Welcome() {
  return (
    <>
      <YouthBaristaProgram />
    </>
  )
}
