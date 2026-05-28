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

// iTech Robotics & Automation — Real Company Images
import irHero      from './assets/ir_hero.png';
import irAbout     from './assets/ir_about.png';
import irArcWeld   from './assets/ir_arc_welding.png';
import irSpotWeld  from './assets/ir_spot_welding.png';
import irHandling  from './assets/ir_handling.png';
import irManip     from './assets/ir_manipulator.png';
import irVision    from './assets/ir_vision.png';
import irBattery   from './assets/ir_battery.png';
import irSpm       from './assets/ir_spm.png';
import irPressLine from './assets/ir_press_line.png';
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
    time: 'Robotic Welding',
    guests: 'Medium Volume',
    notes: ''
  });
  const [resSubmitted, setResSubmitted] = useState(false);

  // Technical RFP Inquiry form
  const [hireForm, setHireForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '₹20 Lakhs - ₹1 Crore',
    details: ''
  });
  const [hireSubmitted, setHireSubmitted] = useState(false);

  // Gallery Interactive Tab Category
  const [galleryCategory, setGalleryCategory] = useState('automotive');

  // Career Job Accordion Active ID
  const [activeCareerAccordion, setActiveCareerAccordion] = useState(-1);

  // Job Application Modal States
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'PLC Programmer',
    experience: '3-5 Years',
    details: ''
  });
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  // Carousel Slides (Container 1) — Real iRobotics images
  const slides = [
    {
      tag: "Robotics & Automation",
      title: "ITECH ROBOTICS",
      desc: "Transforming factory production lines. Manufacturing cutting-edge robotic welding cells and bespoke automation setups for modern enterprises.",
      img: irHero
    },
    {
      tag: "Precision Engineering",
      title: "ARC WELDING CELLS",
      desc: "High-accuracy robotic arc welding lines built for two-wheelers, four-wheelers, railway components, heavy fabrication, and oil & gas industries.",
      img: irArcWeld
    },
    {
      tag: "EV Battery Assembly",
      title: "BATTERY AUTOMATION",
      desc: "Deploying high-speed cell sorting, advanced laser welding, and dynamic battery pack assembly automation built to global standards.",
      img: irBattery
    }
  ];

  // Our Philosophy Segments (Container 2)
  const originStorySegments = [
    {
      title: "Observed Bottlenecks",
      text: "In modern manufacturing lines, a recurring failure point emerged. Rigid setups, manual welding inconsistencies, and slow material handling bottlenecked production and compromised precision. Patching fixtures was common; resolving underlying automation was rare.",
      quote: "Inefficient production is the tax of manual shortcuts."
    },
    {
      title: "The Automation Shift",
      text: "By studying industrial lines under extreme manufacturing demands, we realized that factory systems must be intelligent, adaptable, and designed with high structural integrity to maximize throughput and ensure consistent quality.",
      quote: "Automation must adapt dynamically to achieve peak precision."
    },
    {
      title: "The iTech Vision",
      text: "iTech Robotics and Automation Pvt. Ltd. was founded to provide advanced automation solutions. We engineer heavy-duty robotic welding cells, precise custom handling manipulators, and high-speed EV battery lines that let factories grow without limits.",
      quote: "World-class robotics is not accidental; it is engineered."
    }
  ];

  // Engineering Core Services (Container 3) — Real iRobotics product images
  const services = [
    {
      id: 1,
      name: "Arc Welding Automation",
      price: "High Precision",
      ingredients: "Robotic Welding Cells, Multi-axis positioners, Advanced seam tracking, Torch cleaning stations",
      desc: "Architecting high-speed, zero-defect automated arc welding cells that deliver flawless weld joints on demanding cycles.",
      img: irArcWeld
    },
    {
      id: 2,
      name: "Spot Welding Automation",
      price: "High Throughput",
      ingredients: "Pneumatic/Servo guns, Heavy-payload robots, Multi-weld control panels, Automated tip dressers",
      desc: "Engineering high-efficiency spot welding cells optimized for automotive structures and high-speed sheet metal assemblies.",
      img: irSpotWeld
    },
    {
      id: 3,
      name: "Material Handling Automation",
      price: "Seamless Flow",
      ingredients: "Pick & place systems, Smart conveyor grids, Palletizing grippers, Autonomous mobile integration",
      desc: "Designing automated material transfer pipelines capable of moving, sorting, and palletizing components instantly on the floor.",
      img: irHandling
    },
    {
      id: 4,
      name: "Customize Handling Manipulator",
      price: "Bespoke Load",
      ingredients: "Pneumatic balancers, Smart ergonomic grippers, Overhead rail suspensions, Custom safety interlocks",
      desc: "Designing custom industrial manipulators to safely lift, rotate, and position complex payloads with minimal effort.",
      img: irManip
    },
    {
      id: 5,
      name: "Vision & Inspection Systems",
      price: "100% Quality",
      ingredients: "High-resolution cameras, AI defect detection, Real-time telemetry logs, Smart sorting actuators",
      desc: "Deploying intelligent optical inspection stations and semantic quality check algorithms to audit every part on the fly.",
      img: irVision
    },
    {
      id: 6,
      name: "Battery Assembly Automation",
      price: "Next-Gen EV",
      ingredients: "Cell sorting nodes, Laser welding grids, Thermal compound dispensing, BMS testing bays",
      desc: "Crafting highly secure, advanced battery pack assembly lines with fluid micro-automation across all manufacturing stages.",
      img: irBattery
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
        <div className="logo-main" style={{ fontSize: '1.2rem', letterSpacing: '0.15em' }}>ITECH</div>
        <button 
          className="btn-premium" 
          style={{ padding: '8px 16px', fontSize: '0.65rem', letterSpacing: '0.2em' }}
          onClick={() => setIsResModalOpen(true)}
        >
          AUDIT
        </button>
      </header>

      <div className="app-container">
        {/* ==========================================================================
           SIDEBAR (Fixed Left on Desktop, Slide-out Panel on Mobile)
           ========================================================================== */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">
            <div className="logo-main">ITECH</div>
            <div className="logo-sub">ROBOTICS</div>
          </div>

          <nav className="sidebar-nav">
            <a 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              The Partner
            </a>
            <a 
              className={`nav-item ${activeSection === 'story' ? 'active' : ''}`}
              onClick={() => scrollToSection('story')}
            >
              Our Philosophy
            </a>
            <a 
              className={`nav-item ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollToSection('menu')}
            >
              Capabilities
            </a>
            <a 
              className={`nav-item ${activeSection === 'hours' ? 'active' : ''}`}
              onClick={() => scrollToSection('hours')}
            >
              Factory Metrics
            </a>
            <a 
              className={`nav-item ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={() => scrollToSection('gallery')}
            >
              Industry Gallery
            </a>
            <a 
              className={`nav-item ${activeSection === 'associations' ? 'active' : ''}`}
              onClick={() => scrollToSection('associations')}
            >
              Associations
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
              Inquiries
            </a>
          </nav>

          <div className="sidebar-footer">
            <a href="tel:+917722065205" className="sidebar-footer-link">
              <Phone size={13} className="text-gold" />
              <span>+91 7722065205</span>
            </a>
            <a href="mailto:sales@irobotics.co.in" className="sidebar-footer-link">
              <Mail size={13} className="text-gold" />
              <span>sales@irobotics.co.in</span>
            </a>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://www.linkedin.com/company/itech-robotics-&-automation-pvt.ltd" target="_blank" rel="noreferrer" className="sidebar-footer-link" aria-label="LinkedIn">
                <LinkedIn size={16} />
              </a>
              <a href="https://www.youtube.com/@iTech_Robotics_And_Automation" target="_blank" rel="noreferrer" className="sidebar-footer-link" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
            <p style={{ fontSize: '0.6rem', marginTop: '15px' }}>
              © 2026 ITECH ROBOTICS & AUTOMATION. ALL RIGHTS RESERVED.
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
                      EXPLORE CONSULTATION
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
                <span className="section-label">OUR PHILOSOPHY</span>
                <h2 className="origin-title">Precision Over Complexity</h2>
                <div className="origin-paragraphs">
                  <p className="narrative-italic" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                    "Inconsistency is the enemy of productivity."
                  </p>
                  <p>
                    When our engineering team audited traditional manufacturing setups, recurring bottlenecks in welding, assembly, and parts handling were discovered. Under heavy production loads, throughput lagged while mechanical fixtures wore down. Operational costs grew while structural efficiency collapsed.
                  </p>
                  <p>
                    We decided that factory automation must be engineered differently. Real scaling productivity requires robust robotic systems, high-precision custom jigs, and smart vision inspection layers that adapt to dynamic workflows.
                  </p>
                </div>
                <div className="origin-quote">
                  <p className="narrative-italic">
                    "We do not build passive fixtures. We design automated robotic lines modeled after self-healing systems that scale output seamlessly under maximum load."
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
            <div className="watermark-emblem">ITECH</div>
            
            <div className="cocktail-header">
              <div style={{ textAlign: 'left' }}>
                <span className="section-label">ENGINEERING STACK</span>
                <h2>Our Capabilities</h2>
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
                <img src={irAbout} alt="iTech Robotics automation facility, Pune" />
              </div>

              {/* Asymmetric collage: Item 2 (Opening Hours -> Support SLAs) */}
              <div className="collage-item collage-hours">
                <span className="section-label">OPERATIONS & SUPPORT</span>
                <h3 className="collage-title">Factory Metrics</h3>
                <ul className="collage-list">
                  <li>
                    <span className="day-label">HEADQUARTERS</span>
                    <span className="time-label">PUNE, INDIA</span>
                  </li>
                  <li>
                    <span className="day-label">SERVICE COVERAGE</span>
                    <span className="time-label">NORTH, WEST, SOUTH</span>
                  </li>
                  <li>
                    <span className="day-label">EMERGENCY SUPPORT</span>
                    <span className="time-label">&lt; 24 HOURS</span>
                  </li>
                  <li>
                    <span className="day-label">SYSTEM UPTIME</span>
                    <span className="time-label" style={{ color: 'var(--accent-copper)' }}>99.98% RELIABILITY</span>
                  </li>
                </ul>
              </div>

              {/* Asymmetric collage: Item 3 (Acoustics -> System Philosophy) */}
              <div className="collage-item collage-music">
                <span className="section-label">AUTOMATION BLUEPRINT</span>
                <h3 className="collage-title">The Blueprint</h3>
                <p className="collage-quote">
                  "Heavy-duty, precision-engineered automation built to withstand continuous production demands."
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Our robotic systems are modeled after high-speed, synchronized automotive lines. By integrating high-grade Siemens/Allen-Bradley PLCs, premium servo actuators, and precision machined components, we protect your factory floor from costly downtime and mechanical failures.
                </p>
              </div>
            </div>
          </section>

          {/* NEW CONTAINER: Strategic Industry Gallery */}
          <section id="gallery" className="section-premium container-gallery" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 0' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>INDUSTRIAL SHOWCASE</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', letterSpacing: '0.15em' }}>IN ACTION GALLERY</h2>

            {/* Premium Tab Selector */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
              <button 
                className={galleryCategory === 'automotive' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('automotive')}
              >
                AUTOMOTIVE WELDING
              </button>
              <button 
                className={galleryCategory === 'heavy' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('heavy')}
              >
                HEAVY & SPECIALIZED
              </button>
              <button 
                className={galleryCategory === 'ev' ? 'btn-premium' : 'btn-premium-alt'} 
                style={{ fontSize: '0.75rem', padding: '10px 25px' }}
                onClick={() => setGalleryCategory('ev')}
              >
                ENERGY & EV SYSTEMS
              </button>
            </div>

            {/* Gallery Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '0 20px' }}>
              {galleryCategory === 'automotive' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irArcWeld} className="cocktail-card-img" alt="Two Wheeler Frame welding" />
                      <div className="cocktail-card-price">Two Wheeler</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Frame Welding Line</h3>
                      <p className="cocktail-desc">Fully automated robotic two-wheeler frame welding cell with customized multi-axis positioning fixtures.</p>
                      <p className="cocktail-ingredients">Robots, Multi-axis fixture, Safety locks</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irSpotWeld} className="cocktail-card-img" alt="Silencer Welding cell" />
                      <div className="cocktail-card-price">Two Wheeler</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Silencer Welding Automation</h3>
                      <p className="cocktail-desc">High-precision seam tracking system with automatic torch cleaner, delivering high-cosmetic weld beads.</p>
                      <p className="cocktail-ingredients">Seam tracker, Torch cleaner, Dual positioner</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irPressLine} className="cocktail-card-img" alt="Four Wheeler subframe welding" />
                      <div className="cocktail-card-price">Four Wheeler</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Sub-Frame Welding</h3>
                      <p className="cocktail-desc">Automobile cradle and sub-frame automated multi-spot robotic cell optimized for minimized heat distortion.</p>
                      <p className="cocktail-ingredients">Heavy spot guns, Servo positioner, 3W Cradle</p>
                    </div>
                  </div>
                </>
              )}

              {galleryCategory === 'heavy' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irSpm} className="cocktail-card-img" alt="Tractor Axle welding" />
                      <div className="cocktail-card-price">Agriculture</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Tractor Front Axle Cell</h3>
                      <p className="cocktail-desc">Advanced SPM welding cell integrating 2 high-payload robots for simultaneous structural tractor axle welds.</p>
                      <p className="cocktail-ingredients">2 Welding Robots, Heavy fixture, 1-min cycle</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irHandling} className="cocktail-card-img" alt="Wagon wheel gantry" />
                      <div className="cocktail-card-price">Railway</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Gigantic Gantry System</h3>
                      <p className="cocktail-desc">In-house designed overhead heavy gantry engineered to handle massive 1.4-ton railway wagon wheels.</p>
                      <p className="cocktail-ingredients">1.4-ton capacity, Heavy structure, PLC safety</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irManip} className="cocktail-card-img" alt="Chemical Barrel Handling" />
                      <div className="cocktail-card-price">Chemical</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Hazardous Barrel Handler</h3>
                      <p className="cocktail-desc">Robust manipulator system engineered to handle 1.2-ton chemical barrels safely in critical explosive environments.</p>
                      <p className="cocktail-ingredients">1.2-ton lift, Pneumatic balancer, Spark proof</p>
                    </div>
                  </div>
                </>
              )}

              {galleryCategory === 'ev' && (
                <>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irBattery} className="cocktail-card-img" alt="Cylindrical Battery Module" />
                      <div className="cocktail-card-price">EV Packs</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Cylindrical Assembly Line</h3>
                      <p className="cocktail-desc">High-speed modular EV cell battery welding and module routing system operating at speeds of over 40 PPM.</p>
                      <p className="cocktail-ingredients">40 PPM system, Laser Weld grid, Busbar routing</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irHero} className="cocktail-card-img" alt="Prismatic Pack Assembly" />
                      <div className="cocktail-card-price">EV Battery</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Prismatic Module Line</h3>
                      <p className="cocktail-desc">High-flexibility prismatic EV battery cells sorting, compound placing, and packing cell, operating at 12 PPM.</p>
                      <p className="cocktail-ingredients">12 PPM, 99.9% pass rate, Semi-automated</p>
                    </div>
                  </div>
                  <div className="cocktail-card">
                    <div className="cocktail-img-wrap">
                      <img src={irVision} className="cocktail-card-img" alt="Lead Acid battery inspection" />
                      <div className="cocktail-card-price">Quality Check</div>
                    </div>
                    <div className="cocktail-info">
                      <h3 className="cocktail-name">Battery Testing Grid</h3>
                      <p className="cocktail-desc">End-of-line lead-acid battery vision-guided dimension test, leakage check, and dynamic HRD load diagnostics.</p>
                      <p className="cocktail-ingredients">Vision sensor, Helium leak test, HRD logs</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* NEW CONTAINER: Associations / Partners Section */}
          <section id="associations" className="section-premium container-associations" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 20px', background: 'rgba(6,182,212,0.02)', overflow: 'hidden' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>GLOBAL TRUST</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px', letterSpacing: '0.15em' }}>CLIENT ASSOCIATIONS</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Our engineering footprint spans globally, servicing and collaborating with premier industrial partners across Europe, Central Russia, India, Sri Lanka, and East Asia.
            </p>

            {/* Responsive Dotted World Map Wrap */}
            <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '20px' }}>
              <div className="map-view-wrapper" style={{ minWidth: '850px' }}>
                <img src={irWorldMap} className="map-svg-bg" alt="Dotted World Map footprint" />

                {/* Hotspot & Logo 1: Eurobots (Spain/Europe West) */}
                <div className="map-hotspot" style={{ left: '46.8%', top: '39.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '42.8%', top: '34.5%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(to right, #4caf50, #f44336)' }}></span>
                    <div>
                      <div style={{ color: '#000', fontSize: '0.7rem', fontWeight: '900', lineHeight: 1 }}>EUROBOTS</div>
                      <div style={{ color: '#64748b', fontSize: '0.45rem', letterSpacing: '0.05em' }}>industrial robots</div>
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '46.8%', top: '34.5%', height: '22px', transform: 'rotate(50deg)' }}></div>

                {/* Hotspot & Logo 2: Techvagonmash (Russia) */}
                <div className="map-hotspot" style={{ left: '56.4%', top: '23.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '56.4%', top: '15.5%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '0.45rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2px' }}>RESEARCH AND PRODUCTION ENTERPRISE</span>
                    <div style={{ background: '#0f172a', color: '#fff', padding: '3px 8px', borderRadius: '2px', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                      TECHVAGONMASH
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '56.4%', top: '15.5%', height: '34px' }}></div>

                {/* Hotspot & Logo 3: iRobotics (India) */}
                <div className="map-hotspot" style={{ left: '70.2%', top: '53.4%' }}></div>
                <div className="association-pointer-card" style={{ left: '62.5%', top: '48.5%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '900', fontStyle: 'italic' }}>i</span>
                    <span style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: '900', letterSpacing: '0.02em' }}>Robotics</span>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '68.0%', top: '48.5%', height: '26px', transform: 'rotate(120deg)' }}></div>

                {/* Hotspot & Logo 4: Lalan Engineering (Sri Lanka) */}
                <div className="map-hotspot" style={{ left: '70.2%', top: '61.5%' }}></div>
                <div className="association-pointer-card" style={{ left: '76.8%', top: '63.2%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#0284c7' }}>🌀</span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: '#0369a1', fontWeight: '900', fontSize: '0.65rem', lineHeight: 1 }}>LALAN</span>
                      <span style={{ color: '#64748b', fontSize: '0.45rem', lineHeight: 1 }}>Engineering (Pvt) Ltd</span>
                    </div>
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '71.5%', top: '61.5%', height: '22px', transform: 'rotate(80deg)' }}></div>

                {/* Hotspot & Logo 5: M-Tech (China) */}
                <div className="map-hotspot" style={{ left: '78.5%', top: '44.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '76.2%', top: '38.5%' }}>
                  <div style={{ color: '#ea580c', borderTop: '2px solid #ea580c', borderBottom: '2px solid #ea580c', padding: '1px 6px', fontWeight: '900', letterSpacing: '0.05em', fontSize: '0.7rem' }}>
                    M-TECH
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '78.5%', top: '38.5%', height: '26px', transform: 'rotate(30deg)' }}></div>

                {/* Hotspot & Logo 6: Aotto (East Asia) */}
                <div className="map-hotspot" style={{ left: '83.2%', top: '46.8%' }}></div>
                <div className="association-pointer-card" style={{ left: '86.5%', top: '44.2%' }}>
                  <div style={{ color: '#dc2626', fontWeight: '900', fontSize: '0.85rem', letterSpacing: '-0.02em' }}>
                    Aotto
                  </div>
                </div>
                <div className="pointer-line" style={{ left: '84.2%', top: '44.2%', height: '18px', transform: 'rotate(-45deg)' }}></div>

              </div>
            </div>
          </section>

          {/* NEW CONTAINER: Careers / Open Positions Section */}
          <section id="careers" className="section-premium container-careers" style={{ borderTop: '1px solid var(--border-dim)', padding: '80px 20px' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>BUILD WITH US</span>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px', letterSpacing: '0.15em' }}>CAREER OPPORTUNITIES</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Join our elite engineering division. We are always looking for visionary roboticists, precise mechanical fixture designers, and meticulous PLC programmers to drive world-class industrial automation.
            </p>

            {/* Accordion Job List */}
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                {
                  id: 0,
                  title: 'EV Proposal Engineer',
                  exp: '3 Years Experience',
                  qual: 'Mechatronics / Mechanical Engineering, SolidWorks & AutoCAD proficiency',
                  role: 'Checking customer RFQs for technical feasibility, creating concept pricing grids, assisting sales leads in EV battery pack module assembly lines.'
                },
                {
                  id: 1,
                  title: 'PLC Programmer',
                  exp: '3 to 5 Years Experience',
                  qual: 'BE / B.Tech or Diploma in Electronics & Controls',
                  role: 'Developing full logic programs in Siemens, Allen-Bradley, Mitsubishi, or Delta. Robot controller programming for Fanuc, ABB, Yaskawa, and KUKA.'
                },
                {
                  id: 2,
                  title: 'Design Engineer',
                  exp: '1 to 4 Years Experience',
                  qual: 'Bachelor in Mechatronics or relevant field',
                  role: 'Preparing 3D concept designs of MIG/Spot welding fixtures and Special Purpose Machines (SPMs). Performing pneumatic & hydraulic circuit drawings & DAP presentations.'
                },
                {
                  id: 3,
                  title: 'DET / GET (Electrical & Mechatronics)',
                  exp: '0 to 1 Year Experience',
                  qual: 'Diploma or BE in Electrical or Mechatronics Engineering',
                  role: 'Robot and system maintenance on customer floors, field electrical wiring, and assisting commissioning engineers in onsite project installation.'
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
                      <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0 }}>{job.title}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper)' }}>{job.exp}</span>
                    </div>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                      {activeCareerAccordion === job.id ? '−' : '+'}
                    </span>
                  </div>

                  {/* Accordion Body */}
                  {activeCareerAccordion === job.id && (
                    <div style={{ padding: '25px', borderTop: '1px solid var(--border-dim)', background: 'rgba(0,0,0,0.2)' }}>
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
              <span className="section-label">AUTOMATION ENGAGEMENT</span>
              <h2 className="res-title">Optimize Your Production Line</h2>
              <p className="res-desc">
                Factory automation audits are highly recommended to review manufacturing setups, identify cycle bottlenecks, and map out high-precision robotic solutions tailored precisely to your output targets.
              </p>
              <div className="res-buttons">
                <button className="btn-premium" onClick={() => setIsResModalOpen(true)}>
                  BOOK AUTOMATION AUDIT
                </button>
                <button className="btn-premium-alt" onClick={() => setIsHireModalOpen(true)}>
                  REQUEST PARTNERSHIP RFP
                </button>
              </div>
            </div>
          </section>

          {/* Aperture letterbox cutout above Container 6 */}
          <div className="aperture-header">
            <div className="aperture-bg"></div>
            <div className="aperture-overlay">
              <span className="aperture-title">START THE INTEGRATION</span>
            </div>
          </div>

          {/* CONTAINER 6: Solid Slate Blue Footer Section */}
          <footer className="section-premium container-footer">
            <div className="footer-content">
              {/* Col 1: Brand */}
              <div className="footer-brand">
                <h2 style={{ fontSize: '2rem', letterSpacing: '0.15em', fontWeight: 200, marginBottom: '20px' }}>ITECH</h2>
                <p className="narrative-italic" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '25px' }}>
                  Your Automation Partner,<br />
                  where precision matters.
                </p>
                <p style={{ opacity: 0.7, fontSize: '0.8rem', lineHeight: '1.6' }}>
                  Gat No. 444/2, Plot No. 49,<br />
                  Success Property Venture, Nighojhe,<br />
                  Tal.: Khed, Dist.: Pune – 410501
                </p>
              </div>

              {/* Col 2: Navigation grid */}
              <div className="footer-nav-grid">
                <div className="footer-nav-col">
                  <span className="footer-title">THE COMPANY</span>
                  <a onClick={() => scrollToSection('home')} className="footer-link-classic">Home</a>
                  <a onClick={() => scrollToSection('story')} className="footer-link-classic">Philosophy</a>
                  <a onClick={() => scrollToSection('menu')} className="footer-link-classic">Capabilities</a>
                  <a onClick={() => scrollToSection('gallery')} className="footer-link-classic">Gallery</a>
                </div>
                <div className="footer-nav-col">
                  <span className="footer-title">ENGAGEMENT</span>
                  <a onClick={() => scrollToSection('hours')} className="footer-link-classic">Metrics</a>
                  <a onClick={() => scrollToSection('associations')} className="footer-link-classic">Associations</a>
                  <a onClick={() => scrollToSection('careers')} className="footer-link-classic">Careers</a>
                  <a onClick={() => scrollToSection('reserve')} className="footer-link-classic">Inquiries</a>
                </div>
              </div>

              {/* Col 3: Sliding Social & Contacts */}
              <div className="footer-social-links">
                <span className="footer-title">DIGITAL SPACES</span>
                <a href="https://www.linkedin.com/company/itech-robotics-&-automation-pvt.ltd" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <span>LinkedIn</span>
                  <ArrowRight size={16} />
                </a>
                <a href="https://www.youtube.com/@iTech_Robotics_And_Automation" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <span>YouTube</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:+917722065205" className="footer-social-btn">
                  <span>Direct Call</span>
                  <Phone size={16} />
                </a>
              </div>
            </div>

            <div className="footer-copyright">
              Designed with premium aesthetics. Developed in React for iTech Robotics and Automation.
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
                <h3 className="modal-title">SECURE AUTOMATION AUDIT</h3>
                <p className="modal-subtitle">Plant audit and consultation with a Lead Roboticist</p>
                <form className="res-form" onSubmit={handleResSubmit}>
                  <div className="form-group form-full-width">
                    <label htmlFor="res-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="res-name"
                      required 
                      value={resForm.name} 
                      onChange={(e) => setResForm({...resForm, name: e.target.value})} 
                      placeholder="Alexander Vance"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-email">Business Email *</label>
                    <input 
                      type="email" 
                      id="res-email"
                      required 
                      value={resForm.email} 
                      onChange={(e) => setResForm({...resForm, email: e.target.value})} 
                      placeholder="alex@vance.com"
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
                      placeholder="+91 7722065205"
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
                    <label htmlFor="res-time">Primary Automation Interest *</label>
                    <select 
                      id="res-time"
                      value={resForm.time} 
                      onChange={(e) => setResForm({...resForm, time: e.target.value})}
                    >
                      <option value="Robotic Welding">Robotic Arc/Spot Welding</option>
                      <option value="Material Handling">Material Handling & Manipulators</option>
                      <option value="Battery Assembly">EV Battery Pack Assembly</option>
                      <option value="Special Purpose Machines">Special Purpose Machines (SPMs)</option>
                      <option value="Vision & Inspection">Vision & Quality Inspection</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="res-guests">Target Production Capacity *</label>
                    <select 
                      id="res-guests"
                      value={resForm.guests} 
                      onChange={(e) => setResForm({...resForm, guests: e.target.value})}
                    >
                      <option value="Low Volume">Low-volume batch production</option>
                      <option value="Medium Volume">Medium-volume batch runs</option>
                      <option value="High Volume">High-volume continuous production</option>
                      <option value="Full Plant Overhaul">Entire plant automation overhaul</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="res-notes">Current Setup & Mechanical Bottlenecks</label>
                    <textarea 
                      id="res-notes"
                      rows="3" 
                      value={resForm.notes} 
                      onChange={(e) => setResForm({...resForm, notes: e.target.value})}
                      placeholder="Please let us know your current mechanical setup, welding challenges, or production targets..."
                    />
                  </div>

                  <div className="submit-btn-wrap">
                    <button type="submit" className="btn-premium submit-btn">
                      CONFIRM AUTOMATION AUDIT
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="res-success-message">
                <div className="success-icon-wrap">
                  <CheckCircle size={60} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h3 className="modal-title" style={{ color: 'var(--accent-copper)' }}>AUTOMATION AUDIT SECURED</h3>
                <p className="modal-subtitle">iTech Robotics Engineering Team</p>
                <div style={{ border: '1px solid var(--border-gold)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Layers size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Production Scope:</strong> {resForm.guests}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Calendar size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Target Date:</strong> {resForm.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Cpu size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Automation Focus:</strong> {resForm.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Audit Confirmation Code:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#IR-{Math.floor(1000 + Math.random() * 9000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  A plant evaluation questionnaire and calendar invite have been sent to <strong>{resForm.email}</strong>. 
                  Our lead robotics engineer will contact you on <strong>{resForm.phone}</strong> for confirmation.
                </p>
                <button 
                  className="btn-premium" 
                  style={{ marginTop: '30px', width: '100%' }}
                  onClick={() => {
                    setIsResModalOpen(false);
                    setResSubmitted(false);
                    setResForm({ name: '', email: '', phone: '', date: '', time: 'Robotic Welding', guests: 'Medium Volume', notes: '' });
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
                <h3 className="modal-title">REQUEST PARTNERSHIP RFP</h3>
                <p className="modal-subtitle">Factory-level robotics & automation initiatives</p>
                <form className="res-form" onSubmit={handleHireSubmit}>
                  <div className="form-group form-full-width">
                    <label htmlFor="hire-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="hire-name"
                      required 
                      value={hireForm.name} 
                      onChange={(e) => setHireForm({...hireForm, name: e.target.value})} 
                      placeholder="Victoria Sterling"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-email">Business Email *</label>
                    <input 
                      type="email" 
                      id="hire-email"
                      required 
                      value={hireForm.email} 
                      onChange={(e) => setHireForm({...hireForm, email: e.target.value})} 
                      placeholder="victoria@sterlingcorp.co.uk"
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
                      placeholder="+91 7722065205"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-date">Target Project Launch *</label>
                    <input 
                      type="date" 
                      id="hire-date"
                      required 
                      value={hireForm.date} 
                      onChange={(e) => setHireForm({...hireForm, date: e.target.value})} 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hire-guests">Estimated Budget Range *</label>
                    <select 
                      id="hire-guests"
                      value={hireForm.guests} 
                      onChange={(e) => setHireForm({...hireForm, guests: e.target.value})}
                    >
                      <option value="₹5 Lakhs - ₹20 Lakhs">₹500,000 — ₹2,000,000 (Modular Component)</option>
                      <option value="₹20 Lakhs - ₹1 Crore">₹2,000,000 — ₹10,000,000 (Core Integration)</option>
                      <option value="₹1 Crore - ₹5 Crores">₹10,000,000 — ₹50,000,000 (Line Overhaul)</option>
                      <option value="Enterprise Custom">₹50,000,000+ (Full Factory Automation)</option>
                    </select>
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="hire-details">RFP Scope Overview *</label>
                    <textarea 
                      id="hire-details"
                      rows="4" 
                      required
                      value={hireForm.details} 
                      onChange={(e) => setHireForm({...hireForm, details: e.target.value})}
                      placeholder="Please share high-level project milestones, cycle time benchmarks, or automation objectives..."
                    />
                  </div>

                  <div className="submit-btn-wrap">
                    <button type="submit" className="btn-premium submit-btn">
                      SEND PARTNERSHIP RFP
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="res-success-message">
                <div className="success-icon-wrap" style={{ color: 'var(--accent-copper)' }}>
                  <MessageSquare size={60} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h3 className="modal-title" style={{ color: 'var(--accent-copper)' }}>RFP REGISTRY SECURED</h3>
                <p className="modal-subtitle">Industrial Automation Division</p>
                <div style={{ border: '1px solid rgba(6, 182, 212, 0.3)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Calendar size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Target Launch:</strong> {hireForm.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Activity size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Budget Class:</strong> {hireForm.guests}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Inquiry Event Number:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#IR-RFP-{Math.floor(10000 + Math.random() * 90000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you, <strong>{hireForm.name}</strong>. Your RFP requirements have been forwarded to our lead automation engineers. 
                  A comprehensive technical and commercial proposal will be sent to <strong>{hireForm.email}</strong> within 24 hours.
                </p>
                <button 
                  className="btn-premium-alt" 
                  style={{ marginTop: '30px', width: '100%', borderColor: 'rgba(6, 182, 212, 0.4)', color: 'var(--text-primary)' }}
                  onClick={() => {
                    setIsHireModalOpen(false);
                    setHireSubmitted(false);
                    setHireForm({ name: '', email: '', phone: '', date: '', guests: '₹20 Lakhs - ₹1 Crore', details: '' });
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
                <p className="modal-subtitle">Join iTech Robotics Technical Division</p>
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
                      placeholder="Devendra Patil"
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
                      placeholder="devendra@outlook.com"
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
                      placeholder="+91 9876543210"
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
                      placeholder="Describe your design tools (AutoCAD, SolidWorks) or PLC expertise (Siemens, Fanuc, Kuka)..."
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
                <p className="modal-subtitle">iTech Careers Registry</p>
                <div style={{ border: '1px solid rgba(6, 182, 212, 0.3)', padding: '25px', background: 'var(--bg-primary)', margin: '25px 0', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <Layers size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Applied Role:</strong> {careerForm.role}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid var(--border-dim)', paddingTop: '15px' }}>
                    <Sparkles size={16} className="text-gold" />
                    <span style={{ fontSize: '0.85rem' }}><strong>Registry Index ID:</strong> <span style={{ letterSpacing: '0.1em', color: '#fff' }}><strong>#IR-CAREER-{Math.floor(1000 + Math.random() * 9000)}</strong></span></span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you, <strong>{careerForm.name}</strong>. Your profile has been successfully cataloged under career reference index. 
                  Our HR & Engineering leads will reach you at <strong>{careerForm.email}</strong> or <strong>{careerForm.phone}</strong> after technical verification.
                </p>
                <button 
                  className="btn-premium" 
                  style={{ marginTop: '30px', width: '100%' }}
                  onClick={() => {
                    setIsCareerModalOpen(false);
                    setCareerSubmitted(false);
                    setCareerForm({ name: '', email: '', phone: '', role: 'PLC Programmer', experience: '3-5 Years', details: '' });
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
