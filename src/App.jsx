import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle,
  MessageSquare,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Shield,
  Activity
} from 'lucide-react';
import './App.css';

// Unique Schools LLP — Brand Images
import usHero      from './assets/us_hero.png';
import usAbout     from './assets/us_about.png';
import usApp       from './assets/us_app.png';
import usMonitor   from './assets/us_monitor.png';
import usSites     from './assets/us_sites.png';
import usDiary     from './assets/us_diary.png';
import irWorldMap  from './assets/world_map.svg';

// Premium Custom Brand SVGs
const LinkedIn = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

function App() {
  // Mobile Sidebar Toggle state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Navigation active section state (scroll-linked)
  const [activeSection, setActiveSection] = useState('home');

  // Carousel (Container 1) state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselInterval = useRef(null);

  // Origin Interactive state (Container 2)
  const [originStep, setOriginStep] = useState(0);

  // Cocktail Slider state (Container 3)
  const [cocktailIndex, setCocktailIndex] = useState(0);

  // Modals state (Container 5)
  const [isResModalOpen, setIsResModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  // Discovery Consultation Booking form
  const [resForm, setResForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: 'us app',
    guests: '200-500 Students',
    notes: ''
  });
  const [resSubmitted, setResSubmitted] = useState(false);

  // Technical RFP Inquiry form
  const [hireForm, setHireForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '200-500 Students',
    details: ''
  });
  const [hireSubmitted, setHireSubmitted] = useState(false);

  // Gallery Interactive Tab Category
  const [galleryCategory, setGalleryCategory] = useState('parents');

  // Career Job Accordion Active ID
  const [activeCareerAccordion, setActiveCareerAccordion] = useState(-1);

  // Job Application Modal States
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Full-Stack Engineer',
    experience: '3+ Years',
    details: ''
  });
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  // Carousel Slides (Container 1) — Unique Schools brand images
  const slides = [
    {
      tag: "School Communication App",
      title: "US APP PLATFORM",
      desc: "Centralize school-home communications. Digital permission slips, news, calendar events, and payments, all within a custom-branded mobile application.",
      img: usHero
    },
    {
      tag: "Administrative Control",
      title: "US MONITOR SYSTEM",
      desc: "Simplify administrative duties outside the classroom. Track attendance, manage policies, and control parent forms in real time.",
      img: usMonitor
    },
    {
      tag: "Student Wellbeing & Resilience",
      title: "US DIARY PROGRAMME",
      desc: "Support student wellbeing and resilience. Combining custom printed resilience student diaries with digital classroom resources.",
      img: usDiary
    }
  ];

  // Our Philosophy Segments (Container 2)
  const originStorySegments = [
    {
      title: "Observed Bottlenecks",
      text: "Traditional schools rely on disjointed, paper-based communications. Physical notes get lost, consent forms go unsigned, fee collections lag, and school secretaries spend up to 20 hours a week chasing paperwork rather than supporting teachers.",
      quote: "Administrative friction takes valuable focus away from classroom learning."
    },
    {
      title: "The Digital Solution",
      text: "By designing custom-branded school apps and integrated staff dashboards, we join things up. Parents sign forms, pay fees, and read urgent notices instantly on their mobile devices, creating seamless digital workflows.",
      quote: "Modern technology must bridge the communication gap between home and school."
    },
    {
      title: "The Unique Schools Vision",
      text: "Unique Schools was established to provide custom-tailored digital tools for schools. Tested in over 140 schools in Ireland, our platforms replace paper trails with simple, positive, human interactions that keep the entire community connected.",
      quote: "We simplify the details outside the classroom so you can focus on the learning inside it."
    }
  ];

  // Unique Schools Core Services (Container 3)
  const services = [
    {
      id: 1,
      name: "us app",
      price: "Central Hub",
      ingredients: "Digital Permission Slips, Absentee Notes, Fee Payments, School News & Calendars",
      desc: "A custom-branded mobile application for your school, centralizing all interactions between parents, teachers, and students.",
      img: usApp
    },
    {
      id: 2,
      name: "us monitor",
      price: "Admin Portal",
      ingredients: "Detention Management, Digital Form Audits, School-wide Communications, Attendance Tracking",
      desc: "Simplify administrative tasks outside the classroom. Track submissions, manage policies, and audit data with ease.",
      img: usMonitor
    },
    {
      id: 3,
      name: "us sites",
      price: "Web Presence",
      ingredients: "Secure Hosting, Custom Domain, Dynamic Calendars, Mobile-Optimized Portals",
      desc: "Beautifully designed school websites that act as the front face of your institution, fully integrated with your mobile app.",
      img: usSites
    },
    {
      id: 4,
      name: "us diary",
      price: "Student Wellbeing",
      ingredients: "Resilience student diaries, Wellbeing planners, Hero wristband integrations, Monthly spot prizes",
      desc: "Custom school diaries integrated with resilience activities to support student mental health and daily planning.",
      img: usDiary
    },
    {
      id: 5,
      name: "Be A Hero Resilience Programme",
      price: "8-Month Initiative",
      ingredients: "Resilience Student Diary, Free Hero wristbands, Monthly challenges, Teacher resources",
      desc: "An integrated resilience and wellbeing programme designed to build student self-esteem, focus, and strength.",
      img: usAbout
    },
    {
      id: 6,
      name: "Premium Support SLAs",
      price: "24-Hour Response",
      ingredients: "Parent support desk, Staff ticket management, App troubleshooting, Feature updates",
      desc: "Dedicated support email queues for both parents and school staff to resolve any technical queries within 24 hours.",
      img: usHero
    }
  ];

  // Setup Carousel Loop
  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  const startCarousel = () => {
    stopCarousel();
    carouselInterval.current = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stopCarousel = () => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
    }
  };

  const selectSlide = (index) => {
    setCarouselIndex(index);
    startCarousel();
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % slides.length);
    startCarousel();
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startCarousel();
  };

  // Scroll Spy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'menu', 'gallery', 'associations', 'careers', 'hours', 'reserve'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sidebar navigation click
  const scrollToSection = (id) => {
    setIsSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Service Slider arrows navigation (Responsive widths)
  const nextCocktail = () => {
    if (window.innerWidth <= 768) {
      setCocktailIndex((prev) => Math.min(prev + 1, services.length - 1));
    } else if (window.innerWidth <= 1024) {
      setCocktailIndex((prev) => Math.min(prev + 2, services.length - 2));
    } else {
      setCocktailIndex((prev) => Math.min(prev + 1, services.length - 3));
    }
  };

  const prevCocktail = () => {
    if (window.innerWidth <= 768) {
      setCocktailIndex((prev) => Math.max(prev - 1, 0));
    } else if (window.innerWidth <= 1024) {
      setCocktailIndex((prev) => Math.max(prev - 2, 0));
    } else {
      setCocktailIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Lock scroll when modals are open (Mobile Safe overlay)
  useEffect(() => {
    if (isResModalOpen || isHireModalOpen || isCareerModalOpen || isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResModalOpen, isHireModalOpen, isCareerModalOpen, isSidebarOpen]);

  // Handle Form Submissions
  const handleResSubmit = (e) => {
    e.preventDefault();
    if (!resForm.name || !resForm.email || !resForm.phone || !resForm.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setResSubmitted(true);
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    if (!hireForm.name || !hireForm.email || !hireForm.phone || !hireForm.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setHireSubmitted(true);
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    if (!careerForm.name || !careerForm.email || !careerForm.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setCareerSubmitted(true);
  };

  return (
    <>
      {/* 1. Cinematic Film Grain Overlay */}
      <div className="film-grain"></div>

      {/* Mobile Top Header (Hidden on Desktop) */}
      <header className="mobile-header">
        <button 
          className="hamburger-btn" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <div className="logo-main" style={{ fontSize: '1.2rem', letterSpacing: '0.15em' }}>UNIQUE</div>
        <button 
          className="btn-premium" 
          style={{ padding: '8px 16px', fontSize: '0.65rem', letterSpacing: '0.2em' }}
          onClick={() => setIsResModalOpen(true)}
        >
          DEMO
        </button>
      </header>

      <div className="app-container">
        {/* ==========================================================================
           SIDEBAR (Fixed Left on Desktop, Slide-out Panel on Mobile)
           ========================================================================== */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">
            <div className="logo-main">UNIQUE</div>
            <div className="logo-sub">SCHOOLS</div>
          </div>

          <nav className="sidebar-nav">
            <a 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Our Mission
            </a>
            <a 
              className={`nav-item ${activeSection === 'story' ? 'active' : ''}`}
              onClick={() => scrollToSection('story')}
            >
              Our Approach
            </a>
            <a 
              className={`nav-item ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollToSection('menu')}
            >
              Product Suite
            </a>
            <a 
              className={`nav-item ${activeSection === 'hours' ? 'active' : ''}`}
              onClick={() => scrollToSection('hours')}
            >
              Key Metrics
            </a>
            <a 
              className={`nav-item ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={() => scrollToSection('gallery')}
            >
              Solutions Gallery
            </a>
            <a 
              className={`nav-item ${activeSection === 'associations' ? 'active' : ''}`}
              onClick={() => scrollToSection('associations')}
            >
              Our Schools
            </a>
            <a 
              className={`nav-item ${activeSection === 'careers' ? 'active' : ''}`}
              onClick={() => scrollToSection('careers')}
            >
              Careers
            </a>
            <a 
              className={`nav-item ${activeSection === 'reserve' ? 'active' : ''}`}
              onClick={() => scrollToSection('reserve')}
            >
              Get In Touch
            </a>
          </nav>

          <div className="sidebar-footer">
            <a href="tel:018869458" className="sidebar-footer-link">
              <Phone size={13} className="text-gold" />
              <span>01 886 9458</span>
            </a>
            <a href="mailto:james@uniqueschools.ie" className="sidebar-footer-link">
              <Mail size={13} className="text-gold" />
              <span>james@uniqueschools.ie</span>
            </a>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://www.linkedin.com/company/unique-schools" target="_blank" rel="noreferrer" className="sidebar-footer-link" aria-label="LinkedIn">
                <LinkedIn size={16} />
              </a>
              <a href="https://uniqueschools.ie" target="_blank" rel="noreferrer" className="sidebar-footer-link" aria-label="Website">
                <Sparkles size={16} />
              </a>
            </div>
            <p style={{ fontSize: '0.6rem', marginTop: '15px' }}>
              © 2025 UNIQUE SCHOOLS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </aside>

        {/* Back-shadow click for Mobile sidebar dismissal */}
        {isSidebarOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.65)',
              zIndex: 95,
            }}
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* ==========================================================================
           MAIN CONTENT AREA (Right of fixed sidebar)
           ========================================================================== */}
        <main className="main-content">
          {/* Ambient Lighting Gradients */}
          <div className="ambient-glow-top"></div>
          <div className="ambient-glow-bottom"></div>

          {/* CONTAINER 1: Immersive Hero Carousel */}
          <section id="home" className="container-splash">
            <div className="carousel-viewport">
              {slides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className={`carousel-slide ${idx === carouselIndex ? 'active' : ''}`}
                >
                  <img src={slide.img} className="carousel-image" alt={slide.title} />
                  <div className="carousel-content">
                    <span className="carousel-tagline">{slide.tag}</span>
                    <h1 className="carousel-title">{slide.title}</h1>
                    <p className="carousel-desc">{slide.desc}</p>
                    <button className="btn-premium" onClick={() => scrollToSection('reserve')}>
                      EXPLORE SOLUTIONS
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  className={`carousel-indicator ${idx === carouselIndex ? 'active' : ''}`}
                  onClick={() => selectSlide(idx)}
                ></div>
              ))}
            </div>

            <div className="carousel-arrows">
              <button className="carousel-arrow-btn" onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft size={20} />
              </button>
              <button className="carousel-arrow-btn" onClick={nextSlide} aria-label="Next slide">
                <ChevronRight size={20} />
              </button>
            </div>
          </section>

          {/* CONTAINER 2: Narrative Origin Info Block */}
          <section id="story" className="section-premium container-origin">
            <div className="origin-glow"></div>
            <div className="origin-grid">
              <div className="origin-text-block">
                <span className="section-label">OUR APPROACH</span>
                <h2 className="origin-title">Human Connections Over Complexity</h2>
                <div className="origin-paragraphs">
                  <p className="narrative-italic" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                    "Complexity is the enemy of connection."
                  </p>
                  <p>
                    When we analyzed school communications, we found that traditional channels—paper permission slips, physical diaries, manual checks, and separate payment systems—were breaking down. School staff spent hours chasing paperwork, while parents struggled to find critical updates in fragmented platforms.
                  </p>
                  <p>
                    We believed that school administration must be built differently. Bringing parents, teachers, and student services closer together requires custom-branded mobile apps, automated digital forms, and centralized hubs that fit right in your pocket.
                  </p>
                </div>
                <div className="origin-quote">
                  <p className="narrative-italic">
                    "We do not build generic software. We design tailored school portals modeled after positive human interactions that simplify administration under any load."
                  </p>
                </div>
              </div>

              {/* Interactive Story Panel */}
              <div 
                className="origin-interactive-story"
                onClick={() => setOriginStep((prev) => (prev + 1) % originStorySegments.length)}
              >
                <span className="section-label" style={{ fontSize: '0.6rem' }}>
                  STEP {originStep + 1} OF 3
                </span>
                <h3 style={{ fontSize: '1rem', margin: '15px 0', letterSpacing: '0.15em' }}>
                  {originStorySegments[originStep].title}
                </h3>
                <p className="narrative-italic" style={{ fontSize: '1.05rem', opacity: 0.95, minHeight: '130px' }}>
                  "{originStorySegments[originStep].text}"
                </p>
                <div style={{ color: 'var(--accent-copper)', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '20px' }}>
                  — {originStorySegments[originStep].quote}
                </div>
                <span className="story-interactive-hint">
                  Tap to Reveal Next Chapter
                </span>
              </div>
            </div>
          </section>

          {/* CONTAINER 3: Core Service Slider */}
          <section id="menu" className="section-premium container-cocktails">
            {/* Watermark Logo behind slider */}
            <div className="watermark-emblem">UNIQUE</div>
            
            <div className="cocktail-header">
              <div style={{ textAlign: 'left' }}>
                <span className="section-label">INTEGRATED ECOSYSTEM</span>
                <h2>Our Product Suite</h2>
              </div>
              <div className="cocktail-nav-arrows">
                <button 
                  className="cocktail-nav-btn" 
                  onClick={prevCocktail} 
                  disabled={cocktailIndex === 0}
                  style={{ opacity: cocktailIndex === 0 ? 0.3 : 1, cursor: cocktailIndex === 0 ? 'default' : 'pointer' }}
                  aria-label="Slide Left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="cocktail-nav-btn" 
                  onClick={nextCocktail}
                  disabled={cocktailIndex >= services.length - (window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3)}
                  style={{ 
                    opacity: cocktailIndex >= services.length - (window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3) ? 0.3 : 1,
                    cursor: cocktailIndex >= services.length - (window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3) ? 'default' : 'pointer'
                  }}
                  aria-label="Slide Right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="cocktail-slider-container">
              <div 
                className="cocktail-slider-track"
                style={{ 
                  transform: `translateX(calc(-${cocktailIndex * (window.innerWidth <= 768 ? 100 : window.innerWidth <= 1024 ? 50 : 33.333)}% - ${cocktailIndex * 20}px))` 
                }}
              >
                {services.map((service) => (
                  <div className="cocktail-card" key={service.id}>
                    <div className="cocktail-img-wrap">
                      <img src={service.img} className="cocktail-card-img" alt={service.name} />
                      <div className="cocktail-card-price">{service.price}</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">{service.name}</h3>
                      <p className="cocktail-desc">{service.desc}</p>
                      <p className="cocktail-ingredients">{service.ingredients}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTAINER 4: Static Content Collage / Masonry */}
          <section id="hours" className="section-premium container-collage">
            <div className="collage-grid">
              {/* Asymmetric collage: Item 1 (Image) */}
              <div className="collage-item collage-large-img">
                <img src={usAbout} alt="Unique Schools support and community, Ireland" />
              </div>

              {/* Asymmetric collage: Item 2 (Opening Hours -> Support SLAs) */}
              <div className="collage-item collage-hours">
                <span className="section-label">OPERATIONS & SUPPORT</span>
                <h3 className="collage-title">Key Metrics</h3>
                <ul className="collage-list">
                  <li>
                    <span className="day-label">HEADQUARTERS</span>
                    <span className="time-label">DUBLIN, IRELAND</span>
                  </li>
                  <li>
                    <span className="day-label">ADOPTION RATE</span>
                    <span className="time-label">140+ IRISH SCHOOLS</span>
                  </li>
                  <li>
                    <span className="day-label">SUPPORT SLA</span>
                    <span className="time-label">&lt; 24 HOURS RESPONSE</span>
                  </li>
                  <li>
                    <span className="day-label">MONTHLY ACTIVITY</span>
                    <span className="time-label" style={{ color: 'var(--accent-copper)' }}>1.4M+ CONNECTIONS</span>
                  </li>
                </ul>
              </div>

              {/* Asymmetric collage: Item 3 (Acoustics -> System Philosophy) */}
              <div className="collage-item collage-music">
                <span className="section-label">SYSTEM BLUEPRINT</span>
                <h3 className="collage-title">The Connected School</h3>
                <p className="collage-quote">
                  "Centralizing administrative tasks so educators can focus on teaching."
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Our school digital ecosystem is built for high security, ease-of-use, and instant sync. By replacing paper circulars with push-notified mobile forms, secure payment checkouts, and real-time attendance trackers, we reduce school office workloads by up to 75% and eliminate print budgets entirely.
                </p>
              </div>
            </div>
          </section>

          {/* NEW CONTAINER: Strategic Industry Gallery */}
          <section id="gallery" className="section-premium container-gallery" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 0' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>SOLUTION SHOWCASE</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', letterSpacing: '0.15em' }}>SOLUTIONS IN ACTION</h2>

            {/* Premium Tab Selector */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
              <button 
                className={galleryCategory === 'parents' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('parents')}
              >
                PARENT HUB
              </button>
              <button 
                className={galleryCategory === 'staff' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('staff')}
              >
                SCHOOL STAFF
              </button>
              <button 
                className={galleryCategory === 'students' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('students')}
              >
                STUDENT WELLBEING
              </button>
            </div>

            {/* Gallery Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '0 20px' }}>
              {galleryCategory === 'parents' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usApp} className="cocktail-card-img" alt="Digital Permission Slips" />
                      <div className="cocktail-card-price">us app</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Digital Permission Slips</h3>
                      <p className="cocktail-desc">Parents sign consent forms and fill out absentee notes in 3 taps, saving school administration time and paper trails.</p>
                      <p className="cocktail-ingredients">Push notifications, Mobile sign-off, Secure history</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usHero} className="cocktail-card-img" alt="Unified Payments" />
                      <div className="cocktail-card-price">us app</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Unified Payments</h3>
                      <p className="cocktail-desc">Pay school fees, book lists, and school trips securely in-app using credit cards, debit cards, or digital wallets.</p>
                      <p className="cocktail-ingredients">Secure checkout, Installments, Receipt tracking</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usAbout} className="cocktail-card-img" alt="Real-time School Feed" />
                      <div className="cocktail-card-price">us app</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Real-time School Feed</h3>
                      <p className="cocktail-desc">Receive immediate push announcements, event reminders, newsletters, and calendar updates directly on home screens.</p>
                      <p className="cocktail-ingredients">Instant alerts, Class calendars, Custom feed</p>
                    </div>
                  </div>
                </>
              )}

              {galleryCategory === 'staff' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usMonitor} className="cocktail-card-img" alt="Detention Management" />
                      <div className="cocktail-card-price">us monitor</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Detention Management</h3>
                      <p className="cocktail-desc">Log detentions digitally, automatically notify parents, and track student completion inside one centralized portal.</p>
                      <p className="cocktail-ingredients">Auto-alert emails, Status logs, Staff dashboard</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usSites} className="cocktail-card-img" alt="School Site CMS" />
                      <div className="cocktail-card-price">us sites</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">School Site CMS</h3>
                      <p className="cocktail-desc">Edit enrollment forms, policies, notices, and calendar entries. Changes sync immediately to the public school website.</p>
                      <p className="cocktail-ingredients">Web hosting, Instant sync, Custom domains</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usMonitor} className="cocktail-card-img" alt="Form Analytics" />
                      <div className="cocktail-card-price">us monitor</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Form Analytics & Reports</h3>
                      <p className="cocktail-desc">Track permission slip responses in real-time. Export class lists showing signed and unsigned responses instantly.</p>
                      <p className="cocktail-ingredients">CSV export, Response charts, Teacher folders</p>
                    </div>
                  </div>
                </>
              )}

              {galleryCategory === 'students' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usDiary} className="cocktail-card-img" alt="Resilience Student Diary" />
                      <div className="cocktail-card-price">us diary</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Resilience Student Diary</h3>
                      <p className="cocktail-desc">Custom school diaries integrated with weekly planners, homework sheets, and structured student resilience exercises.</p>
                      <p className="collage-quote" style={{ fontSize: '0.8rem', fontStyle: 'normal', margin: 0, padding: '10px 0 0 0', borderTop: '1px solid var(--border-dim)' }}>
                        Printed diary, Planner layout, Wellbeing prompts
                      </p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usAbout} className="cocktail-card-img" alt="Be A Hero Programme" />
                      <div className="cocktail-card-price">programme</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Be A Hero Programme</h3>
                      <p className="cocktail-desc">An 8-month resilience curriculum that empowers students through digital content, wristbands, and wellbeing lessons.</p>
                      <p className="cocktail-ingredients">Hero wristband, Monthly email prompts, School lessons</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={usHero} className="cocktail-card-img" alt="Monthly Spot Prizes" />
                      <div className="cocktail-card-price">engagement</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Monthly Spot Prizes</h3>
                      <p className="cocktail-desc">Encourage student wellbeing and participation in resilience challenges with monthly spot prizes delivered to schools.</p>
                      <p className="cocktail-ingredients">Student incentives, School deliveries, Monthly draws</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* NEW CONTAINER: Associations / Partners Section */}
          <section id="associations" className="section-premium container-associations" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 20px', background: 'rgba(6,182,212,0.02)', overflow: 'hidden' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>LOCAL TRUST</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px', letterSpacing: '0.15em' }}>SCHOOL ASSOCIATIONS</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Our digital platforms support school systems and parent communication networks across all counties in Ireland, serving over 140 educational institutions.
            </p>

            {/* Responsive Dotted World Map Wrap */}
            <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '20px' }}>
              <div className="map-view-wrapper" style={{ minWidth: '850px' }}>
                <img src={irWorldMap} className="map-svg-bg" alt="Dotted World Map footprint" />

                {/* Hotspot & Logo 1: Eurobots (Spain/Europe West) -> DUBLIN */}
                <div className="map-hotspot" style={{ left: '46.8%', top: '39.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '42.8%', top: '34.5%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(to right, #2563eb, #0891b2)' }}></span>
                    <div>
                      <div style={{ color: '#000', fontSize: '0.7rem', fontWeight: '900', lineHeight: 1 }}>DUBLIN</div>
                      <div style={{ color: '#64748b', fontSize: '0.45rem', letterSpacing: '0.05em' }}>34 schools active</div>
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '46.8%', top: '34.5%', height: '22px', transform: 'rotate(50deg)' }}></div>

                {/* Hotspot & Logo 2: Techvagonmash (Russia) -> GALWAY */}
                <div className="map-hotspot" style={{ left: '56.4%', top: '23.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '56.4%', top: '15.5%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '0.45rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2px' }}>CONNACHT REGION</span>
                    <div style={{ background: '#0f172a', color: '#fff', padding: '3px 8px', borderRadius: '2px', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                      GALWAY (18 Schools)
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '56.4%', top: '15.5%', height: '34px' }}></div>

                {/* Hotspot & Logo 3: iRobotics (India) -> Cork */}
                <div className="map-hotspot" style={{ left: '70.2%', top: '53.4%' }}></div>
                <div className="association-pointer-card" style={{ left: '62.5%', top: '48.5%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#2563eb', fontSize: '1rem', fontWeight: '900', fontStyle: 'italic' }}>C</span>
                    <span style={{ color: '#0891b2', fontSize: '0.85rem', fontWeight: '900', letterSpacing: '0.02em' }}>ORK (26 active)</span>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '68.0%', top: '48.5%', height: '26px', transform: 'rotate(120deg)' }}></div>

                {/* Hotspot & Logo 4: Lalan Engineering (Sri Lanka) -> LIMERICK */}
                <div className="map-hotspot" style={{ left: '70.2%', top: '61.5%' }}></div>
                <div className="association-pointer-card" style={{ left: '76.8%', top: '63.2%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#2563eb' }}>🌀</span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: '#0891b2', fontWeight: '900', fontSize: '0.65rem', lineHeight: 1 }}>LIMERICK</span>
                      <span style={{ color: '#64748b', fontSize: '0.45rem', lineHeight: 1 }}>12 schools active</span>
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '71.5%', top: '61.5%', height: '22px', transform: 'rotate(80deg)' }}></div>

                {/* Hotspot & Logo 5: M-Tech (China) -> KILDARE */}
                <div className="map-hotspot" style={{ left: '78.5%', top: '44.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '76.2%', top: '38.5%' }}>
                  <div style={{ color: '#2563eb', borderTop: '2px solid #2563eb', borderBottom: '2px solid #0891b2', padding: '1px 6px', fontWeight: '900', letterSpacing: '0.05em', fontSize: '0.7rem' }}>
                    KILDARE (15)
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '78.5%', top: '38.5%', height: '26px', transform: 'rotate(30deg)' }}></div>

                {/* Hotspot & Logo 6: Aotto (East Asia) -> WICKLOW */}
                <div className="map-hotspot" style={{ left: '83.2%', top: '46.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '86.5%', top: '44.2%' }}>
                  <div style={{ color: '#2563eb', fontWeight: '900', fontSize: '0.85rem', letterSpacing: '-0.02em' }}>
                    WICKLOW (11)
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '84.2%', top: '44.2%', height: '18px', transform: 'rotate(-45deg)' }}></div>

              </div>
            </div>
          </section>

          {/* NEW CONTAINER: Careers / Open Positions Section */}
          <section id="careers" className="section-premium container-careers" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 20px' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>JOIN OUR TEAM</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px', letterSpacing: '0.15em' }}>CAREER OPENINGS</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Join our dedicated team. We are always looking for passionate full-stack engineers, customer onboarding specialists, and school support leads to build and scale next-generation school platforms.
            </p>

            {/* Accordion Job List */}
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                {
                  id: 0,
                  title: 'Senior Full-Stack Engineer',
                  exp: '3+ Years Experience',
                  qual: 'React, Node.js, AWS, PostgreSQL, Mobile App deployment experience',
                  role: 'Designing and developing features for our core us app and admin dashboards, optimizing DB queries, and scaling backend APIs.'
                },
                {
                  id: 1,
                  title: 'School Onboarding Specialist',
                  exp: '2+ Years Experience',
                  qual: 'Customer Success, School Operations, or Training experience',
                  role: 'Guiding school staff through onboarding, setting up school site directories, and conducting training webcasts for school admins.'
                },
                {
                  id: 2,
                  title: 'UI/UX Product Designer',
                  exp: '2+ Years Experience',
                  qual: 'Figma, Design Systems, Mobile/Web interaction design portfolio',
                  role: 'Designing beautiful, intuitive interfaces for the mobile parent portal and school dashboards, prioritizing simplicity and accessibility.'
                },
                {
                  id: 3,
                  title: 'Mobile Support Specialist',
                  exp: '1+ Years Experience',
                  qual: 'Customer Support (Zendesk/Intercom), basic technical troubleshooting',
                  role: 'Responding to parent and school staff support tickets, diagnosing mobile app issues, and coordinating bug reports with engineering.'
                }
              ].map((job) => (
                <div 
                  key={job.id} 
                  style={{
                    border: '1px solid var(--border-dim)',
                    background: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Accordion Header */}
                  <div 
                    onClick={() => setActiveCareerAccordion(activeCareerAccordion === job.id ? -1 : job.id)}
                    style={{
                      padding: '20px 25px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      background: activeCareerAccordion === job.id ? 'rgba(6, 182, 212, 0.05)' : 'transparent',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>{job.title}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper)' }}>{job.exp}</span>
                    </div>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                      {activeCareerAccordion === job.id ? '−' : '+'}
                    </span>
                  </div>

                  {/* Accordion Body */}
                  {activeCareerAccordion === job.id && (
                    <div style={{ padding: '25px', borderTop: '1px solid var(--border-dim)', background: 'rgba(0,0,0,0.02)' }}>
                      <div style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'block', marginBottom: '5px' }}>KEY QUALIFICATION:</strong>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{job.qual}</p>
                      </div>
                      <div style={{ marginBottom: '20px' }}>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'block', marginBottom: '5px' }}>JOB RESPONSIBILITIES:</strong>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{job.role}</p>
                      </div>
                      <button 
                        className="btn-premium"
                        style={{ fontSize: '0.7rem', padding: '8px 20px' }}
                        onClick={() => {
                          setCareerForm({
                            ...careerForm,
                            role: job.title,
                            experience: job.exp
                          });
                          setIsCareerModalOpen(true);
                        }}
                      >
                        APPLY FOR THIS ROLE
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CONTAINER 5: Cinematic Reservation Area & Dual Buttons */}
          <section id="reserve" className="section-premium container-reservations">
            <div className="reservations-box">
              <span className="section-label">DIGITAL ENGAGEMENT</span>
              <h2 className="res-title">Simplify School Communications</h2>
              <p className="res-desc">
                Book a custom live demo to review your current school channels, identify administrative bottlenecks, and see how our tailored apps can simplify parent communications and office workloads.
              </p>
              <div className="res-buttons">
                <button className="btn-premium" onClick={() => setIsResModalOpen(true)}>
                  SCHEDULE LIVE DEMO
                </button>
                <button className="btn-premium-alt" onClick={() => setIsHireModalOpen(true)}>
                  REQUEST SCHOOL PROPOSAL
                </button>
              </div>
            </div>
          </section>

          {/* Aperture letterbox cutout above Container 6 */}
          <div className="aperture-header">
            <div className="aperture-bg"></div>
            <div className="aperture-overlay">
              <span className="aperture-title">CONNECT YOUR SCHOOL</span>
            </div>
          </div>

          {/* CONTAINER 6: Solid Slate Blue Footer Section */}
          <footer className="section-premium container-footer">
            <div className="footer-content">
              {/* Col 1: Brand */}
              <div className="footer-brand">
                <h2 style={{ fontSize: '2rem', letterSpacing: '0.15em', fontWeight: 200, marginBottom: '20px' }}>UNIQUE</h2>
                <p className="narrative-italic" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '25px' }}>
                  Your Digital School Partner,<br />
                  where connection matters.
                </p>
                <p style={{ opacity: 0.7, fontSize: '0.8rem', lineHeight: '1.6' }}>
                  First Floor, Block 3 Airvista Office Park,<br />
                  Swords Road, Santry,<br />
                  Dublin 9, D09 VK65
                </p>
              </div>

              {/* Col 2: Navigation grid */}
              <div className="footer-nav-grid">
                <div className="footer-nav-col">
                  <span className="footer-title">THE COMPANY</span>
                  <a onClick={() => scrollToSection('home')} className="footer-link-classic">Home</a>
                  <a onClick={() => scrollToSection('story')} className="footer-link-classic">Approach</a>
                  <a onClick={() => scrollToSection('menu')} className="footer-link-classic">Product Suite</a>
                  <a onClick={() => scrollToSection('gallery')} className="footer-link-classic">Gallery</a>
                </div>
                <div className="footer-nav-col">
                  <span className="footer-title">ENGAGEMENT</span>
                  <a onClick={() => scrollToSection('hours')} className="footer-link-classic">Metrics</a>
                  <a onClick={() => scrollToSection('associations')} className="footer-link-classic">Our Schools</a>
                  <a onClick={() => scrollToSection('careers')} className="footer-link-classic">Careers</a>
                  <a onClick={() => scrollToSection('reserve')} className="footer-link-classic">Inquiries</a>
                </div>
              </div>

              {/* Col 3: Sliding Social & Contacts */}
              <div className="footer-social-links">
                <span className="footer-title">DIGITAL SPACES</span>
                <a href="https://www.linkedin.com/company/unique-schools" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <span>LinkedIn</span>
                  <ArrowRight size={16} />
                </a>
                <a href="https://uniqueschools.ie" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <span>School Website</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:018869458" className="footer-social-btn">
                  <span>Direct Call</span>
                  <Phone size={16} />
                </a>
              </div>
            </div>

            <div className="footer-copyright">
              Designed with premium aesthetics. Developed in React for Unique Schools LLP.
            </div>
          </footer>
        </main>
      </div>

      {/* ==========================================================================
         MODAL: DISCOVERY TOPOLOGY CALL
         ========================================================================== */}
      {isResModalOpen && (
        <div className="modal-overlay" onClick={() => setIsResModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsResModalOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>

            {!resSubmitted ? (
              <>
                <h3 className="modal-title">SCHEDULE LIVE DEMO</h3>
                <p className="modal-subtitle">Custom platform preview with a Product Consultant</p>
                <form className="res-form" onSubmit={handleResSubmit}>
                  <div className="form-group form-full-width">
                    <label htmlFor="res-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="res-name"
                      required 
                      value={resForm.name} 
                      onChange={(e) => setResForm({...resForm, name: e.target.value})} 
                      placeholder="James Higgins"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-email">School/Staff Email *</label>
                    <input 
                      type="email" 
                      id="res-email"
                      required 
                      value={resForm.email} 
                      onChange={(e) => setResForm({...resForm, email: e.target.value})} 
                      placeholder="principal@school.ie"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-phone">Direct Phone *</label>
                    <input 
                      type="tel" 
                      id="res-phone"
                      required 
                      value={resForm.phone} 
                      onChange={(e) => setResForm({...resForm, phone: e.target.value})} 
                      placeholder="01 886 9458"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-date">Preferred Date *</label>
                    <input 
                      type="date" 
                      id="res-date"
                      required 
                      value={resForm.date} 
                      onChange={(e) => setResForm({...resForm, date: e.target.value})} 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-time">Primary Product Interest *</label>
                    <select 
                      id="res-time"
                      value={resForm.time} 
                      onChange={(e) => setResForm({...resForm, time: e.target.value})}
                    >
                      <option value="us app">us app Mobile Parent Portal</option>
                      <option value="us monitor">us monitor Administration Portal</option>
                      <option value="us sites">us sites School Websites</option>
                      <option value="us diary">us diary Student Wellbeing</option>
                      <option value="Be A Hero">Be A Hero Resilience Programme</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="res-guests">School Enrollment Size *</label>
                    <select 
                      id="res-guests"
                      value={resForm.guests} 
                      onChange={(e) => setResForm({...resForm, guests: e.target.value})}
                    >
                      <option value="Under 200 Students">Under 200 Students</option>
                      <option value="200-500 Students">200-500 Students</option>
                      <option value="500-1000 Students">500-1000 Students</option>
                      <option value="1000+ Students">1000+ Students</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="res-notes">Current Challenges & Requirements</label>
                    <textarea 
                      id="res-notes"
                      rows="3" 
                      value={resForm.notes} 
                      onChange={(e) => setResForm({...resForm, notes: e.target.value})}
                      placeholder="Please let us know your current school management systems, paper communications challenges, or school goals..."
                    />
                  </div>

                  <div className="submit-btn-wrap">
                    <button type="submit" className="btn-premium submit-btn">
                      CONFIRM DEMO SCHEDULE
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="res-success-message">
                <div className="success-icon-wrap">
                  <CheckCircle size={60} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h3 className="modal-title" style={{ color: 'var(--accent-copper)' }}>DEMO RESERVATION SECURED</h3>
                <p className="modal-subtitle">Unique Schools Support Team</p>
                <div style={{ border: '1px solid var(--border-gold)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Layers size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>School Size:</strong> {resForm.guests}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Calendar size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Target Date:</strong> {resForm.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Cpu size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Product Focus:</strong> {resForm.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Demo Confirmation Code:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#US-{Math.floor(1000 + Math.random() * 9000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  A platform demonstration agenda and calendar invite have been sent to <strong>{resForm.email}</strong>. 
                  Our onboarding consultant will contact you on <strong>{resForm.phone}</strong> for final verification.
                </p>
                <button 
                  className="btn-premium" 
                  style={{ marginTop: '30px', width: '100%' }}
                  onClick={() => {
                    setIsResModalOpen(false);
                    setResSubmitted(false);
                    setResForm({ name: '', email: '', phone: '', date: '', time: 'us app', guests: '200-500 Students', notes: '' });
                  }}
                >
                  RETURN TO THE PLATFORM
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================================================
         MODAL: REQUEST TECHNICAL RFP
         ========================================================================== */}
      {isHireModalOpen && (
        <div className="modal-overlay" onClick={() => setIsHireModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsHireModalOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>

            {!hireSubmitted ? (
              <>
                <h3 className="modal-title">REQUEST SCHOOL PROPOSAL</h3>
                <p className="modal-subtitle">Custom products & resilience programmes consultation</p>
                <form className="res-form" onSubmit={handleHireSubmit}>
                  <div className="form-group form-full-width">
                    <label htmlFor="hire-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="hire-name"
                      required 
                      value={hireForm.name} 
                      onChange={(e) => setHireForm({...hireForm, name: e.target.value})} 
                      placeholder="Brendan Byrne"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-email">School/Staff Email *</label>
                    <input 
                      type="email" 
                      id="hire-email"
                      required 
                      value={hireForm.email} 
                      onChange={(e) => setHireForm({...hireForm, email: e.target.value})} 
                      placeholder="bbyrne@colaiste.ie"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-phone">Direct Phone *</label>
                    <input 
                      type="tel" 
                      id="hire-phone"
                      required 
                      value={hireForm.phone} 
                      onChange={(e) => setHireForm({...hireForm, phone: e.target.value})} 
                      placeholder="01 886 9458"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-date">Target Launch Date *</label>
                    <input 
                      type="date" 
                      id="hire-date"
                      required 
                      value={hireForm.date} 
                      onChange={(e) => setHireForm({...hireForm, date: e.target.value})} 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-guests">School Enrollment *</label>
                    <select 
                      id="hire-guests"
                      value={hireForm.guests} 
                      onChange={(e) => setHireForm({...hireForm, guests: e.target.value})}
                    >
                      <option value="Under 200 Students">Under 200 Students</option>
                      <option value="200-500 Students">200-500 Students</option>
                      <option value="500-1000 Students">500-1000 Students</option>
                      <option value="1000+ Students">1000+ Students</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="hire-details">Proposal Scope & Requirements *</label>
                    <textarea 
                      id="hire-details"
                      rows="4" 
                      required
                      value={hireForm.details} 
                      onChange={(e) => setHireForm({...hireForm, details: e.target.value})}
                      placeholder="Please let us know which products you're interested in, any specific school guidelines, or launch expectations..."
                    />
                  </div>

                  <div className="submit-btn-wrap">
                    <button type="submit" className="btn-premium submit-btn">
                      SEND PROPOSAL REQUEST
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="res-success-message">
                <div className="success-icon-wrap" style={{ color: 'var(--accent-copper)' }}>
                  <MessageSquare size={60} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h3 className="modal-title" style={{ color: 'var(--accent-copper)' }}>PROPOSAL REQUEST REGISTERED</h3>
                <p className="modal-subtitle">School Solutions Division</p>
                <div style={{ border: '1px solid rgba(6, 182, 212, 0.3)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Calendar size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Target Launch:</strong> {hireForm.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Activity size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>School Size:</strong> {hireForm.guests}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Inquiry Reference Number:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#US-PROP-{Math.floor(10000 + Math.random() * 90000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you, <strong>{hireForm.name}</strong>. Your proposal requirements have been forwarded to our school consultants. 
                  A custom budget proposal and onboarding outline will be sent to <strong>{hireForm.email}</strong> within 24 hours.
                </p>
                <button 
                  className="btn-premium-alt" 
                  style={{ marginTop: '30px', width: '100%', borderColor: 'rgba(6, 182, 212, 0.4)', color: 'var(--text-primary)' }}
                  onClick={() => {
                    setIsHireModalOpen(false);
                    setHireSubmitted(false);
                    setHireForm({ name: '', email: '', phone: '', date: '', guests: '200-500 Students', details: '' });
                  }}
                >
                  RETURN TO THE PLATFORM
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* ==========================================================================
         MODAL: CAREER APPLICATION FORM
         ========================================================================== */}
      {isCareerModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCareerModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsCareerModalOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>

            {!careerSubmitted ? (
              <>
                <h3 className="modal-title">SUBMIT JOB APPLICATION</h3>
                <p className="modal-subtitle">Join Unique Schools Product Division</p>
                <form className="res-form" onSubmit={handleCareerSubmit}>
                  <div className="form-group form-full-width">
                    <label htmlFor="job-role">Role of Interest</label>
                    <input 
                      type="text" 
                      id="job-role"
                      disabled
                      value={`${careerForm.role} (${careerForm.experience})`} 
                      style={{ opacity: 0.8, cursor: 'not-allowed', background: 'rgba(255,255,255,0.05)' }}
                    />
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="career-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="career-name"
                      required 
                      value={careerForm.name} 
                      onChange={(e) => setCareerForm({...careerForm, name: e.target.value})} 
                      placeholder="Sarah O'Connor"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="career-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="career-email"
                      required 
                      value={careerForm.email} 
                      onChange={(e) => setCareerForm({...careerForm, email: e.target.value})} 
                      placeholder="sarah.oconnor@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="career-phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="career-phone"
                      required 
                      value={careerForm.phone} 
                      onChange={(e) => setCareerForm({...careerForm, phone: e.target.value})} 
                      placeholder="087 123 4567"
                    />
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="career-details">Professional Overview & Tech Stack *</label>
                    <textarea 
                      id="career-details"
                      rows="4" 
                      required
                      value={careerForm.details} 
                      onChange={(e) => setCareerForm({...careerForm, details: e.target.value})}
                      placeholder="Describe your technology stack, experience working with educational systems, or support workflows..."
                    />
                  </div>

                  <div className="submit-btn-wrap">
                    <button type="submit" className="btn-premium submit-btn">
                      SUBMIT APPLICATION
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="res-success-message">
                <div className="success-icon-wrap" style={{ color: 'var(--accent-copper)' }}>
                  <Users size={60} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h3 className="modal-title" style={{ color: 'var(--accent-copper)' }}>APPLICATION RECEIVED</h3>
                <p className="modal-subtitle">Unique Schools Careers Registry</p>
                <div style={{ border: '1px solid rgba(6, 182, 212, 0.3)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Layers size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Applied Role:</strong> {careerForm.role}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Registry Index ID:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#US-CAREER-{Math.floor(1000 + Math.random() * 9000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you, <strong>{careerForm.name}</strong>. Your profile has been successfully cataloged under career reference index. 
                  Our HR & Product leads will reach you at <strong>{careerForm.email}</strong> or <strong>{careerForm.phone}</strong> after technical verification.
                </p>
                <button 
                  className="btn-premium" 
                  style={{ marginTop: '30px', width: '100%' }}
                  onClick={() => {
                    setIsCareerModalOpen(false);
                    setCareerSubmitted(false);
                    setCareerForm({ name: '', email: '', phone: '', role: 'Full-Stack Engineer', experience: '3+ Years', details: '' });
                  }}
                >
                  RETURN TO THE PLATFORM
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
