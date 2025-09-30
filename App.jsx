import React, { useState, useEffect, useRef } from "react";

// Enhanced Deepscan Landing with Advanced Animations & Functional Backend
export default function DeepscanLanding() {
  const [activeProject, setActiveProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Theme and language state
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'general' // general, demo, sponsor
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formErrors, setFormErrors] = useState({});

  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);

  // Initialize particles for background animation
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360,
    }));
    setParticles(newParticles);
    setIsLoaded(true);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Complete translations
  const texts = {
    en: {
      projectTeam: 'Project Team',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
      sponsor: 'Sponsor',
      
      heroTitle: 'Deepscan — Robust Submarine ROVs',
      heroSubtitle: 'We are Deepscan — champions of the Azerbaijan ROV Challenge (1st place).',
      heroDescription: 'We design compact, modular ROVs for inspection, research and environmental monitoring. Explore our prototypes and meet the team below.',
      seeProjects: 'See Projects',
      requestDemo: 'Request Demo',
      
      badge: '🏆 Azerbaijan ROV Challenge — 1st',
      basedIn: '📍 Based in Ganja, Azerbaijan',
      
      missionLabel: 'Our Mission',
      mission: 'Make underwater data collection accessible',
      focusLabel: 'Our Focus',
      focus: 'Reliable hardware, simple autonomy, low-cost sensors',
      
      prototypesHeader: 'Prototypes & Projects',
      meetTeam: 'Meet the Team',
      
      developerRole: 'Developer',
      electronicsRole: 'Electronics Engineer',
      mechatronicsRole: 'Mechatronics Engineer',
      akbarBio: 'Full‑stack developer — builds UI & cloud services; programs the ROV firmware and autonomy using MAVLink and AI.',
      eldarBio: 'Sensors, communication and power electronics specialist. Designs robust underwater communication systems.',
      yasarBio: 'Mechanical design, actuators and hull systems. Expert in underwater vehicle dynamics and materials.',
      
      deepdrone1Desc: 'The original competition ROV (formerly Deepscan-1). A compact, modular ROV built for inspection and basic survey tasks. Reliable, easy to maintain and optimized for field repairs.',
      deepdrone2Desc: 'Advanced DeepDrone with onboard AI for image analysis, refined movement dynamics and a minimal, robust design for real missions.',
      
      interested: 'Interested in partnering or sponsoring?',
      helpUs: 'Help us develop the next-generation prototypes of our ROVs',
      sponsorLong: 'We are open to hardware sponsors, mentorship, and lab space. Your logo will appear on the team hull and website.',
      contactUs: 'Contact Us',
      viewGitHub: 'View GitHub',
      
      getInTouch: 'Get in touch',
      sendUsMessage: '— send us a message',
      contactDescription: 'Ready to discuss your underwater robotics needs? We\'d love to hear from you.',
      
      quickFacts: 'Quick Facts',
      followUs: 'Follow Us',
      quickFact1: 'Azerbaijan ROV Challenge — 1st place',
      quickFact2: 'Based in Ganja, Azerbaijan',  
      quickFact3: 'Rapid fabrication and modular design',
      githubRepo: 'View GitHub Repository',
      
      prototypeLabel: 'Prototype',
      prototypes: 'Prototypes',
      champions: 'Champions',
      details: 'Details',
      specs: 'Specs',
      specsHeader: 'Technical Specifications',
      image: 'Image',
      
      placeholderName: 'Your name',
      placeholderEmail: 'Email address',
      placeholderIdea: 'Tell us about your project or idea',
      send: 'Send Message',
      requestDemoShort: 'Request Demo',
      sending: 'Sending...',
      messageSent: 'Message sent successfully! We\'ll get back to you soon.',
      messageError: 'Failed to send message. Please try again.',
      
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email',
      messageRequired: 'Message is required',
      
      darkLabel: 'Dark',
      lightLabel: 'Light',
      englishLabel: 'English',
      azeriLabel: 'Azərbaycan',
      
      close: 'Close',
      linkedIn: 'LinkedIn',
      gitHub: 'GitHub',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      documentation: 'Documentation',
      copyright: `© ${new Date().getFullYear()} Deepscan — Built by the team. Proud Azerbaijan ROV Challenge Champions.`,
      
      // New functional texts
      demoRequested: 'Demo request sent! We\'ll contact you within 24 hours.',
      sponsorInterest: 'Sponsor inquiry sent! Our team will reach out soon.',
      navToSection: 'Navigate to section',
      openInNewTab: 'Open in new tab',
      downloadSpecs: 'Download Specifications',
      watchVideo: 'Watch Demo Video',
    },
    az: {
      projectTeam: 'Layihə Komandası',
      projects: 'Layihələr',
      team: 'Komanda',
      contact: 'Əlaqə',
      sponsor: 'Sponsor',
      
      heroTitle: 'Deepscan — Dayanıqlı Sualtı ROV-lar',
      heroSubtitle: 'Biz Deepscan — Azərbaycan ROV Çempionatı qalibləri (1-ci yer).',
      heroDescription: 'Biz yoxlama, tədqiqat və ətraf mühit monitorinqi üçün kompakt, modul ROV-lar dizayn edirik. Prototiplərimizi və komandamızı kəşf edin.',
      seeProjects: 'Layihələrə Bax',
      requestDemo: 'Demo Tələb Et',
      
      badge: '🏆 Azərbaycan ROV Çempionatı — 1-ci',
      basedIn: '📍 Gəncə, Azərbaycan',
      
      missionLabel: 'Missiyamız',
      mission: 'Sualtı məlumat toplamanı əlçatan etmək',
      focusLabel: 'Fokusumuz',
      focus: 'Etibarlı avadanlıq, sadə avtonomiya, ucuz sensorlar',
      
      prototypesHeader: 'Prototiplər və Layihələr',
      meetTeam: 'Komanda ilə Tanış Olun',
      
      developerRole: 'Proqramçı',
      electronicsRole: 'Elektronika Mühəndisi',
      mechatronicsRole: 'Mexatronika Mühəndisi',
      akbarBio: 'Full-stack proqramçı — UI və bulud xidmətləri yaradır; MAVLink və AI istifadə edərək ROV firmware və avtonomiyasını proqramlaşdırır.',
      eldarBio: 'Sensor, kommunikasiya və güc elektronikası üzrə mütəxəssis. Dayanıqlı sualtı kommunikasiya sistemləri dizayn edir.',
      yasarBio: 'Mexaniki dizayn, aktuatorlar və gövdə sistemləri. Sualtı aparatların dinamikası və materialları üzrə ekspert.',
      
      deepdrone1Desc: 'Orijinal yarışma ROV-u (əvvəlki adı Deepscan-1). Yoxlama və əsas sorğu tapşırıqları üçün kompakt, modul ROV. Etibarlı, saxlanması asan və sahədə təmir üçün optimallaşdırılmış.',
      deepdrone2Desc: 'Təsvir analizi üçün onboard AI, təkmilləşdirilmiş hərəkət dinamikası və həqiqi missiyalar üçün minimal, möhkəm dizayna malik qabaqcıl DeepDrone.',
      
      interested: 'Əməkdaşlıq və sponsorluq üçün maraqlısınız?',
      helpUs: 'ROV-larımızın növbəti nəsil prototiplərinin inkişafında bizə kömək edin',
      sponsorLong: 'Biz avadanlıq sponsorları, mentorluq və laboratoriya sahəsi axtarırıq. Logonuz komanda gövdəsində və saytda görünəcək.',
      contactUs: 'Bizimlə Əlaqə',
      viewGitHub: 'GitHub-a Bax',
      
      getInTouch: 'Bizimlə Əlaqə',
      sendUsMessage: '— bizə mesaj göndərin',
      contactDescription: 'Sualtı robotika ehtiyaclarınızı müzakirə etməyə hazırsınız? Sizdən eşitmək istərdik.',
      
      quickFacts: 'Qısa Məlumat',
      followUs: 'Bizi İzləyin',
      quickFact1: 'Azərbaycan ROV Çempionatı — 1-ci yer',
      quickFact2: 'Gəncə, Azərbaycan',
      quickFact3: 'Sürətli istehsal və modul dizayn',
      githubRepo: 'GitHub Deposuna Bax',
      
      prototypeLabel: 'Prototip',
      prototypes: 'Prototiplər',
      champions: 'Çempionlar',
      details: 'Ətraflı',
      specs: 'Texniki',
      specsHeader: 'Texniki Xüsusiyyətlər',
      image: 'Şəkil',
      
      placeholderName: 'Adınız',
      placeholderEmail: 'E-poçt ünvanı',
      placeholderIdea: 'Layihəniz və ya ideyanız haqqında bizə danışın',
      send: 'Mesaj Göndər',
      requestDemoShort: 'Demo Tələb Et',
      sending: 'Göndərilir...',
      messageSent: 'Mesaj uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
      messageError: 'Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.',
      
      nameRequired: 'Ad tələb olunur',
      emailRequired: 'E-poçt tələb olunur',
      emailInvalid: 'Zəhmət olmasa düzgün e-poçt daxil edin',
      messageRequired: 'Mesaj tələb olunur',
      
      darkLabel: 'Qaranlıq',
      lightLabel: 'İşıqlı',
      englishLabel: 'English',
      azeriLabel: 'Azərbaycan',
      
      close: 'Bağla',
      linkedIn: 'LinkedIn',
      gitHub: 'GitHub',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      documentation: 'Sənədlər',
      copyright: `© ${new Date().getFullYear()} Deepscan — Komanda tərəfindən hazırlanmışdır. Qürurla Azərbaycan ROV Çempionları.`,
      
      demoRequested: 'Demo tələbi göndərildi! 24 saat ərzində sizinlə əlaqə saxlayacağıq.',
      sponsorInterest: 'Sponsor sorğusu göndərildi! Komandamız tezliklə əlaqə saxlayacaq.',
      navToSection: 'Bölməyə keç',
      openInNewTab: 'Yeni tabda aç',
      downloadSpecs: 'Texniki Xüsusiyyətləri Yüklə',
      watchVideo: 'Demo Videosuna Bax',
    }
  };

  // Header hide/show on scroll
  const [showNav, setShowNav] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = y - lastY.current;
          if (delta > 8 && y > 100) setShowNav(false);
          else if (delta < -2 || y < 100) setShowNav(true);
          lastY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Team data
  const team = [
    { 
      name: "Akbar B.", 
      role: texts[lang].developerRole, 
      bio: texts[lang].akbarBio,
      initial: "A",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Node.js", "MAVLink", "AI/ML"]
    },
    { 
      name: "Eldar H.", 
      role: texts[lang].electronicsRole, 
      bio: texts[lang].eldarBio,
      initial: "E",
      color: "from-purple-500 to-pink-500",
      skills: ["PCB Design", "RF Systems", "Power Management"]
    },
    { 
      name: "Yasar S.", 
      role: texts[lang].mechatronicsRole, 
      bio: texts[lang].yasarBio,
      initial: "Y",
      color: "from-green-500 to-teal-500",
      skills: ["CAD Design", "Fluid Dynamics", "Materials"]
    },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "DeepDrone 1.0",
      subtitle: lang === 'en' ? "Competition prototype — winner" : "Yarışma prototipi — qalib",
      desc: texts[lang].deepdrone1Desc,
      color: "from-cyan-500 to-blue-600",
      status: "Completed",
      year: "2024",
      specs: [
        lang === 'en' ? "1× Full HD camera with low-light mode" : "1× Aşağı işıqda rejimi olan Full HD kamera",
        lang === 'en' ? "6× brushless thrusters + 6 ESCs (vectorable mounting)" : "6× fırçasız itələyici + 6 ESC (vektoral quraşdırma)",
        lang === 'en' ? "Advanced weight distribution & trim system" : "İrəli çəki paylanması və trim sistemi",
        lang === 'en' ? "Pressure-rated aluminum/composite hull (~100 m)" : "Təzyiq dəyərli alüminium/kompozit gövdə (~100 m)",
        lang === 'en' ? "Modular payload bay for sensors or small manipulator" : "Sensorlar və ya kiçik manipulator üçün modul yük bölməsi",
        lang === 'en' ? "Tethered and wireless telemetry options" : "Bağlı və simsiz telemetriya seçimləri",
        lang === 'en' ? "6S LiPo battery pack with hot-swap capability" : "İsti dəyişmə qabiliyyəti olan 6S LiPo batareya paketi"
      ]
    },
    {
      id: 2,
      title: "DeepDrone 2.0",
      subtitle: lang === 'en' ? "Next‑gen — improved control & mobility" : "Növbəti nəsil — təkmilləşdirilmiş idarəetmə və mobillik",
      desc: texts[lang].deepdrone2Desc,
      color: "from-violet-500 to-purple-600",
      status: "In Development",
      year: "2025",
      specs: [
        lang === 'en' ? "Onboard AI accelerator for real-time image analysis and object detection" : "Real vaxt təsvir analizi və obyekt aşkarlama üçün onboard AI sürətləndirici",
        lang === 'en' ? "Improved thruster control with PID + feedforward tuning" : "PID + feedforward tənzimlənməsi ilə təkmilləşdirilmiş itələyici nəzarəti",
        lang === 'en' ? "Finer speed control, better station-keeping and faster acceleration" : "Daha incə sürət nəzarəti, daha yaxşı stansiya saxlama və daha sürətli sürətlənmə",
        lang === 'en' ? "Compact, minimal hull for reduced drag and easier maintenance" : "Azaldılmış müqavimət və daha asan baxım üçün kompakt, minimal gövdə",
        lang === 'en' ? "Enhanced telemetry, mission logging, and autonomous mission modes" : "Təkmilləşdirilmiş telemetriya, missiya qeydiyyatı və muxtar missiya rejimləri",
        lang === 'en' ? "Redundant power & telemetry paths; improved sensor fusion" : "Ehtiyat güc və telemetriya yolları; təkmilləşdirilmiş sensor birləşmə"
      ]
    }
  ];

  // Backend simulation functions
  const simulateAPICall = (duration = 2000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 90% success rate for demo
        if (Math.random() > 0.1) {
          resolve({ success: true });
        } else {
          reject(new Error('Network error'));
        }
      }, duration);
    });
  };

  // Form handling
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = texts[lang].nameRequired;
    }
    
    if (!formData.email.trim()) {
      errors.email = texts[lang].emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = texts[lang].emailInvalid;
    }
    
    if (!formData.message.trim()) {
      errors.message = texts[lang].messageRequired;
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setFormStatus('sending');
    
    try {
      await simulateAPICall();
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', type: 'general' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  // Quick action handlers
  const handleDemoRequest = async () => {
    setFormData(prev => ({ ...prev, type: 'demo' }));
    setFormStatus('sending');
    try {
      await simulateAPICall(1500);
      setFormStatus('demo-success');
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleSponsorInquiry = async () => {
    setFormData(prev => ({ ...prev, type: 'sponsor' }));
    setFormStatus('sending');
    try {
      await simulateAPICall(1500);
      setFormStatus('sponsor-success');
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const openProject = (p) => {
    setActiveProject(p);
    setShowModal(true);
  };

  // Color helpers with enhanced gradients
  const rootBg = isDark 
    ? "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100" 
    : "bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900";
  
  const cardBg = isDark ? "bg-slate-900/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";
  const cardElev = isDark ? "shadow-2xl shadow-slate-950/30" : "shadow-xl shadow-slate-200/50";
  const muted = isDark ? "text-slate-400" : "text-slate-600";
  const subtle = isDark ? "bg-slate-800/50" : "bg-slate-100/80";
  const border = isDark ? "border-slate-700/50" : "border-slate-200/50";
  
  const primaryBtn = isDark 
    ? "bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-900 shadow-lg hover:shadow-sky-500/25" 
    : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-sky-600/25";
  
  const secondaryBtn = isDark 
    ? `border border-slate-600/50 hover:border-slate-500 hover:bg-slate-800/50 backdrop-blur-sm` 
    : `border border-slate-300/50 hover:border-slate-400 hover:bg-slate-50/80 backdrop-blur-sm`;

  const t = texts[lang];

  // Loading screen
  if (!isLoaded) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${rootBg}`}>
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-sky-500/20 border-t-sky-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${rootBg} transition-all duration-700 relative overflow-hidden`}>
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 ${isDark ? 'bg-sky-400/20' : 'bg-sky-600/10'} rounded-full animate-pulse`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${particle.speed}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Fixed Nav */}
      <div className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className={`max-w-7xl mx-auto px-6 py-4 backdrop-blur-xl ${isDark ? 'bg-black/60 border-slate-700/30' : 'bg-white/80 border-slate-200/30'} rounded-b-3xl border-b shadow-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <div className={`w-14 h-14 flex items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-700 shadow-xl text-slate-900 font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                DS
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  Deepscan
                </div>
                <div className={`${muted} text-sm`}>{t.projectTeam}</div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {[
                { text: t.projects, href: 'projects' },
                { text: t.team, href: 'team' },
                { text: t.contact, href: 'contact' }
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => smoothScrollTo(item.href)}
                  className={`text-sm font-medium hover:text-sky-400 transition-all duration-300 relative group ${muted}`}
                  title={t.navToSection}
                >
                  {item.text}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}

              {/* Enhanced Language toggle */}
              <button 
                onClick={() => setLang(l => l === 'en' ? 'az' : 'en')} 
                className={`px-5 py-2 rounded-xl flex items-center gap-3 border ${border} hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium backdrop-blur-sm`}
                title="Switch language"
              >
                <span className="text-lg">{lang === 'en' ? '🇬🇧' : '🇦🇿'}</span>
                <span className="text-sm">{lang === 'en' ? 'English' : 'Azərbaycan'}</span>
              </button>

              {/* Enhanced Theme toggle */}
              <button 
                onClick={() => setIsDark(d => !d)} 
                className={`px-5 py-2 rounded-xl flex items-center gap-3 border ${border} hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-sm group`}
                title="Toggle theme"
              >
                <div className="relative w-6 h-6 transition-transform duration-500 group-hover:rotate-180">
                  {isDark ? (
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{isDark ? t.darkLabel : t.lightLabel}</span>
              </button>

              <button
                onClick={handleSponsorInquiry}
                disabled={formStatus === 'sending'}
                className={`px-8 py-3 rounded-xl ${primaryBtn} font-bold transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <span className="relative">{t.sponsor}</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-24" />

      {/* Enhanced Hero Section */}
      <header className="max-w-7xl mx-auto px-6 py-20" id="hero">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <div className={`px-6 py-3 rounded-full ${subtle} backdrop-blur-sm text-sm font-semibold animate-bounce border ${border}`}>
                  {t.badge}
                </div>
                <div className={`px-6 py-3 rounded-full ${subtle} backdrop-blur-sm text-sm font-medium border ${border}`}>
                  {t.basedIn}
                </div>
              </div>
              
              <h1 className="text-5xl xl:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Deepscan
                </span>
                <br />
                <span className="text-3xl xl:text-4xl font-bold">
                  {lang === 'en' ? 'Robust Submarine ROVs' : 'Dayanıqlı Sualtı ROV-lar'}
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className={`text-xl ${muted} font-semibold`}>{t.heroSubtitle}</p>
                <p className="text-2xl leading-relaxed font-light">{t.heroDescription}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => smoothScrollTo('projects')}
                className={`group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl ${primaryBtn} font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <span className="relative">{t.seeProjects}</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button 
                onClick={handleDemoRequest}
                disabled={formStatus === 'sending'}
                className={`px-10 py-5 rounded-2xl border-2 ${border} hover:scale-105 transition-all duration-300 font-bold text-xl backdrop-blur-sm hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group`}
              >
                <span className="group-hover:text-sky-400 transition-colors duration-300">{t.requestDemo}</span>
              </button>
            </div>

            {/* Enhanced feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
              <div 
                className={`p-8 rounded-3xl ${cardBg} ${cardElev} hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border ${border}`}
                onMouseEnter={() => setHoveredCard('mission')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`text-sm ${muted} mb-3 font-semibold tracking-wide uppercase`}>{t.missionLabel}</div>
                <div className="font-bold text-xl group-hover:text-sky-400 transition-colors duration-300 leading-relaxed">
                  {t.mission}
                </div>
                <div className={`mt-4 w-full h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full transform origin-left transition-transform duration-500 ${hoveredCard === 'mission' ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
              <div 
                className={`p-8 rounded-3xl ${cardBg} ${cardElev} hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border ${border}`}
                onMouseEnter={() => setHoveredCard('focus')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`text-sm ${muted} mb-3 font-semibold tracking-wide uppercase`}>{t.focusLabel}</div>
                <div className="font-bold text-xl group-hover:text-sky-400 transition-colors duration-300 leading-relaxed">
                  {t.focus}
                </div>
                <div className={`mt-4 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform origin-left transition-transform duration-500 ${hoveredCard === 'focus' ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            </div>
          </div>

          {/* Enhanced hero visual */}
          <div className={`relative p-10 rounded-3xl ${cardBg} ${cardElev} overflow-hidden border ${border} group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative">
              <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="oceanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isDark ? "#0f172a" : "#e0f2fe"} />
                    <stop offset="50%" stopColor={isDark ? "#1e293b" : "#bae6fd"} />
                    <stop offset="100%" stopColor={isDark ? "#334155" : "#7dd3fc"} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#oceanGradient)" rx="24" />

                {/* Enhanced animated waves */}
                <g opacity="0.4">
                  <path d="M0,300 Q150,250 300,280 T600,270 L600,400 L0,400 Z" fill="#06b6d4" filter="url(#shadow)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 30,0; 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M0,320 Q100,280 200,300 T400,290 T600,300 L600,400 L0,400 Z" fill="#0891b2" filter="url(#shadow)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; -20,0; 0,0"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M0,340 Q80,320 160,335 T320,325 T480,330 T600,325 L600,400 L0,400 Z" fill="#0e7490" opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 15,0; 0,0"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                {/* Enhanced ROV with multiple animations */}
                <g transform="translate(200,150)" filter="url(#glow)">
                  <ellipse cx="100" cy="80" rx="70" ry="40" fill="#0ea5e9" opacity="0.95" filter="url(#shadow)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-8; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  
                  {/* ROV details */}
                  <rect x="145" y="70" width="45" height="20" rx="10" fill="#1e40af" filter="url(#shadow)" />
                  <circle cx="75" cy="60" r="12" fill="#fbbf24" opacity="0.9">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Thrusters */}
                  <rect x="50" y="105" width="25" height="15" rx="6" fill="#374151" filter="url(#shadow)" />
                  <rect x="125" y="105" width="25" height="15" rx="6" fill="#374151" filter="url(#shadow)" />
                  
                  {/* Enhanced thruster effects */}
                  <g opacity="0.8">
                    <circle cx="35" cy="80" r="4" fill="#60a5fa">
                      <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="35" cy="95" r="4" fill="#60a5fa">
                      <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" begin="0.3s" />
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" begin="0.3s" />
                    </circle>
                    <circle cx="165" cy="87" r="3" fill="#34d399">
                      <animate attributeName="r" values="2;6;2" dur="1.2s" repeatCount="indefinite" begin="0.6s" />
                      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.2s" repeatCount="indefinite" begin="0.6s" />
                    </circle>
                  </g>
                  
                  {/* Camera gimbal */}
                  <rect x="85" y="45" width="30" height="20" rx="8" fill="#6b7280" filter="url(#shadow)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 100 55; 10 100 55; -10 100 55; 0 100 55"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>

                {/* Enhanced floating trophy badge */}
                <g transform="translate(20,20)" filter="url(#shadow)">
                  <rect x="0" y="0" width="200" height="45" rx="15" fill={isDark ? "#1e293b" : "#f8fafc"} opacity="0.95" />
                  <rect x="2" y="2" width="196" height="41" rx="13" fill="url(#oceanGradient)" opacity="0.1" />
                  <text x="15" y="28" fill={isDark ? "#fbbf24" : "#d97706"} fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="bold">
                    🏆 {t.badge.replace('🏆 ', '')}
                  </text>
                </g>

                {/* Depth indicators */}
                <g transform="translate(520,60)" opacity="0.7">
                  <rect x="0" y="0" width="60" height="80" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} opacity="0.9" />
                  <text x="8" y="20" fill={isDark ? "#60a5fa" : "#0369a1"} fontSize="12" fontFamily="monospace">DEPTH</text>
                  <text x="12" y="40" fill={isDark ? "#34d399" : "#059669"} fontSize="14" fontFamily="monospace" fontWeight="bold">45.2m</text>
                  <text x="8" y="60" fill={isDark ? "#fbbf24" : "#d97706"} fontSize="10" fontFamily="monospace">MAX 100m</text>
                </g>
              </svg>
              
              {/* Enhanced floating stats */}
              <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-4">
                {[
                  { number: "2", label: t.prototypes, color: "from-cyan-400 to-blue-500" },
                  { number: "3", label: t.team, color: "from-purple-400 to-pink-500" },
                  { number: "1st", label: t.champions, color: "from-yellow-400 to-orange-500" }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-2xl ${cardBg} shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 text-center cursor-pointer border ${border} group`}
                    onMouseEnter={() => setHoveredCard(`stat-${i}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`font-black text-lg bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className={`text-xs ${muted} font-semibold mt-1 group-hover:text-sky-400 transition-colors duration-300`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Status Messages */}
      {(formStatus === 'demo-success' || formStatus === 'sponsor-success' || formStatus === 'success') && (
        <div className="fixed top-28 right-6 z-40">
          <div className={`p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl animate-bounce border border-green-400/30 backdrop-blur-sm`}>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="font-semibold">
                {formStatus === 'demo-success' ? t.demoRequested : 
                 formStatus === 'sponsor-success' ? t.sponsorInterest : t.messageSent}
              </span>
            </div>
          </div>
        </div>
      )}

      {formStatus === 'error' && (
        <div className="fixed top-28 right-6 z-40">
          <div className={`p-6 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-2xl animate-bounce border border-red-400/30 backdrop-blur-sm`}>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span className="font-semibold">{t.messageError}</span>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            {t.prototypesHeader}
          </h2>
          <p className={`${muted} text-xl max-w-3xl mx-auto leading-relaxed`}>
            {lang === 'en' ? 'Our journey from competition winner to next-generation autonomous systems' : 'Yarışma qalibindən növbəti nəsil muxtar sistemlərə gedən yolumuz'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative ${cardBg} rounded-3xl p-10 ${cardElev} hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 cursor-pointer border ${border} overflow-hidden`}
              onMouseEnter={() => setHoveredCard(`project-${project.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openProject(project)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-8">
                  <div className={`w-40 h-32 rounded-2xl bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-all duration-500 relative overflow-hidden border border-white/10`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                    <div className="relative flex flex-col items-center">
                      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"/>
                      </svg>
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black group-hover:text-sky-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className={`${muted} text-lg font-semibold`}>{project.subtitle}</div>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                          <div className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : 'bg-blue-400'} animate-pulse`}></div>
                          {project.status}
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full ${subtle} text-sm font-semibold border ${border}`}>
                        {t.prototypeLabel}
                      </div>
                    </div>
                    
                    <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-lg leading-relaxed`}>
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openProject(project);
                        }}
                        className={`group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                        <span className="relative">{t.details}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </button>
                      
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className={`px-8 py-3 rounded-xl border-2 ${border} hover:scale-105 transition-all duration-300 font-bold backdrop-blur-sm hover:shadow-xl group`}
                        title={t.downloadSpecs}
                      >
                        <span className="group-hover:text-sky-400 transition-colors duration-300">{t.specs}</span>
                      </button>
                      
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className={`px-6 py-3 rounded-xl ${subtle} hover:scale-105 transition-all duration-300 font-semibold border ${border} group`}
                        title={t.viewGitHub}
                      >
                        <span className="group-hover:text-purple-400 transition-colors duration-300">{t.gitHub}</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-500 ${hoveredCard === `project-${project.id}` ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            {t.meetTeam}
          </h2>
          <p className={`${muted} text-xl max-w-3xl mx-auto leading-relaxed`}>
            {lang === 'en' ? 'The talented engineers behind Deepscan\'s innovative ROV technology' : 'Deepscan-ın innovativ ROV texnologiyasının arxasındakı istedadlı mühəndislər'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div 
              key={i} 
              className={`group ${cardBg} rounded-3xl p-10 text-center ${cardElev} hover:shadow-3xl hover:-translate-y-6 transition-all duration-700 cursor-pointer border ${border} relative overflow-hidden`}
              onMouseEnter={() => setHoveredCard(`member-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 space-y-8">
                <div className="relative">
                  <div className={`mx-auto w-40 h-40 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                    <span className="relative">{member.initial}</span>
                  </div>
                  
                  {/* Floating skill badges */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-100 scale-75">
                    <div className={`px-3 py-1 rounded-full ${cardBg} shadow-xl text-xs font-bold border ${border}`}>
                      {member.skills[0]}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-100 scale-75">
                    <div className={`px-3 py-1 rounded-full ${cardBg} shadow-xl text-xs font-bold border ${border}`}>
                      {member.skills[1]}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black group-hover:text-sky-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className={`${muted} font-bold text-lg mt-2`}>{member.role}</div>
                  </div>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} leading-relaxed text-lg`}>
                    {member.bio}
                  </p>
                </div>
                
                <div className="flex justify-center gap-4 pt-6">
                  <button 
                    className={`px-6 py-3 rounded-xl ${subtle} hover:scale-105 transition-all duration-300 font-semibold border ${border} group`}
                    title={`${member.name} - ${t.linkedIn}`}
                  >
                    <span className="group-hover:text-blue-400 transition-colors duration-300">{t.linkedIn}</span>
                  </button>
                  <button 
                    className={`px-6 py-3 rounded-xl ${subtle} hover:scale-105 transition-all duration-300 font-semibold border ${border} group`}
                    title={`${member.name} - ${t.gitHub}`}
                  >
                    <span className="group-hover:text-purple-400 transition-colors duration-300">{t.gitHub}</span>
                  </button>
                </div>
                
                {/* Skills showcase */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 pt-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, idx) => (
                      <div key={idx} className={`px-3 py-1 rounded-full ${subtle} text-xs font-medium border ${border}`}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Sponsor Section */}
      <section id="sponsor" className="max-w-7xl mx-auto px-6 py-24">
        <div className={`relative ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-white via-slate-50 to-white'} rounded-3xl p-16 ${cardElev} border ${border} overflow-hidden group`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`${muted} text-xl font-semibold`}>{t.interested}</div>
                <h3 className="text-4xl font-black bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  {t.helpUs}
                </h3>
              </div>
              <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-xl leading-relaxed`}>
                {t.sponsorLong}
              </p>
              
              {/* Benefits showcase */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "🚀", text: lang === 'en' ? "Innovation Partnership" : "İnnovasiya Əməkdaşlığı" },
                  { icon: "🎯", text: lang === 'en' ? "Brand Visibility" : "Brend Görünürlüyü" },
                  { icon: "🔬", text: lang === 'en' ? "R&D Collaboration" : "T&İ Əməkdaşlığı" },
                  { icon: "🌊", text: lang === 'en' ? "Ocean Impact" : "Okean Təsiri" }
                ].map((benefit, i) => (
                  <div key={i} className={`p-4 rounded-xl ${subtle} border ${border} hover:scale-105 transition-all duration-300 group`}>
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="text-sm font-semibold group-hover:text-sky-400 transition-colors duration-300">
                      {benefit.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <button 
                onClick={handleSponsorInquiry}
                disabled={formStatus === 'sending'}
                className={`group inline-flex items-center justify-center gap-3 px-10 py-6 rounded-2xl ${primaryBtn} font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <svg className="w-6 h-6 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="relative">{formStatus === 'sending' ? texts[lang].sending : t.contactUs}</span>
              </button>
              
              <button 
                onClick={() => window.open('#', '_blank')}
                className={`px-10 py-6 rounded-2xl border-2 ${border} hover:scale-105 transition-all duration-300 font-black text-xl backdrop-blur-sm hover:shadow-xl group flex items-center justify-center gap-3`}
                title={t.openInNewTab}
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span className="group-hover:text-sky-400 transition-colors duration-300">{t.viewGitHub}</span>
              </button>
              
              <button 
                className={`px-8 py-4 rounded-xl ${subtle} border ${border} hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group`}
                title={t.documentation}
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span className="group-hover:text-purple-400 transition-colors duration-300">{t.documentation}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className={`${cardBg} rounded-3xl p-12 ${cardElev} border ${border} relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {t.getInTouch}
                </h3>
                <p className={`${muted} text-xl leading-relaxed`}>
                  {t.contactDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className={`block text-sm font-semibold ${muted} mb-2`}>
                      {t.placeholderName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-slate-800/50 text-slate-200 border-slate-600/50' : 'bg-slate-50/50 text-slate-900 border-slate-300/50'} border-2 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 transition-all duration-300 backdrop-blur-sm group-hover:border-sky-400/50`}
                      placeholder={t.placeholderName}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-2 animate-pulse">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="group">
                    <label className={`block text-sm font-semibold ${muted} mb-2`}>
                      {t.placeholderEmail} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-slate-800/50 text-slate-200 border-slate-600/50' : 'bg-slate-50/50 text-slate-900 border-slate-300/50'} border-2 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 transition-all duration-300 backdrop-blur-sm group-hover:border-sky-400/50`}
                      placeholder={t.placeholderEmail}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-2 animate-pulse">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="group">
                  <label className={`block text-sm font-semibold ${muted} mb-2`}>
                    {t.placeholderIdea} *
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-slate-800/50 text-slate-200 border-slate-600/50' : 'bg-slate-50/50 text-slate-900 border-slate-300/50'} border-2 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 transition-all duration-300 resize-none backdrop-blur-sm group-hover:border-sky-400/50`}
                    placeholder={t.placeholderIdea}
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-sm mt-2 animate-pulse">{formErrors.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`group flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl ${primaryBtn} font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span className="relative">{t.sending}</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                        <span className="relative">{t.send}</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleDemoRequest}
                    disabled={formStatus === 'sending'}
                    className={`px-8 py-5 rounded-xl border-2 ${border} hover:scale-105 transition-all duration-300 font-black text-lg backdrop-blur-sm hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group`}
                  >
                    <span className="group-hover:text-sky-400 transition-colors duration-300">{t.requestDemoShort}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Quick Facts & Social */}
          <div className={`${cardBg} rounded-3xl p-12 ${cardElev} border ${border} relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.quickFacts}
                </h3>
                <ul className="space-y-6">
                  {[
                    { icon: "🏆", text: t.quickFact1, color: "from-yellow-400 to-orange-500" },
                    { icon: "📍", text: t.quickFact2, color: "from-green-400 to-emerald-500" },
                    { icon: "🛠️", text: t.quickFact3, color: "from-blue-400 to-cyan-500" }
                  ].map((fact, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${fact.color} group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-lg group-hover:text-sky-400 transition-colors duration-300`}>
                        {fact.text}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-125 transition-transform duration-300"></div>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className={`text-lg hover:text-sky-400 transition-colors duration-300 underline underline-offset-4 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                    >
                      {t.githubRepo}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={`text-2xl font-black mb-8 ${muted}`}>{t.followUs}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: t.twitter, color: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-400/30" },
                    { name: t.instagram, color: "hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-400/30" },
                    { name: t.linkedIn, color: "hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-400/30" },
                    { name: t.youtube, color: "hover:bg-red-500/10 hover:text-red-400 hover:border-red-400/30" }
                  ].map((social, i) => (
                    <button 
                      key={i}
                      onClick={() => window.open('#', '_blank')}
                      className={`p-4 rounded-2xl ${subtle} hover:scale-105 transition-all duration-300 text-center font-bold border ${border} ${social.color}`}
                      title={`${t.openInNewTab} - ${social.name}`}
                    >
                      {social.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="pt-8 border-t border-slate-700/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className={`${muted} font-semibold`}>
                      {lang === 'en' ? 'contact.service.deepscan@gmail.com' : 'contact.service.deepscan@gmail.com'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span className={`${muted} font-semibold`}>
                      {lang === 'en' ? '+994 55 256 85 82' : '+994 55 256 85 82'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className={`text-center text-lg mt-20 pt-12 border-t ${border} ${muted} relative`}>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`px-6 py-2 ${cardBg} rounded-full border ${border} shadow-lg`}>
              <div className="text-2xl">🌊</div>
            </div>
          </div>
          <p className="font-semibold">{t.copyright}</p>
        </div>
      </footer>

      {/* Enhanced Modal for project details */}
      {showModal && activeProject && (
        <div 
          className={`fixed inset-0 ${isDark ? 'bg-black/80' : 'bg-black/60'} flex items-center justify-center z-50 p-6 backdrop-blur-lg`} 
          onClick={() => setShowModal(false)}
        >
          <div 
            className={`${cardBg} rounded-3xl p-12 w-full max-w-5xl max-h-[90vh] overflow-y-auto ${cardElev} transform transition-all duration-500 border ${border} relative overflow-hidden group`} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between gap-8 mb-12">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className={`text-4xl font-black bg-gradient-to-r ${activeProject.color} bg-clip-text text-transparent`}>
                      {activeProject.title}
                    </h3>
                    <div className={`px-4 py-2 rounded-full ${activeProject.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'} text-sm font-bold`}>
                      {activeProject.status}
                    </div>
                  </div>
                  <p className={`${muted} text-xl font-semibold`}>{activeProject.subtitle}</p>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-xl leading-relaxed`}>
                    {activeProject.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-full ${subtle} text-sm font-semibold border ${border}`}>
                    {activeProject.year}
                  </div>
                  <button 
                    onClick={() => setShowModal(false)}
                    className={`p-3 rounded-full ${subtle} border ${border} hover:scale-110 transition-all duration-300 group`}
                    title={t.close}
                  >
                    <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  {t.specsHeader}
                </h4>
                <div className="grid gap-6">
                  {activeProject.specs.map((spec, i) => (
                    <div key={i} className={`flex items-start gap-6 p-6 rounded-2xl ${subtle} border ${border} hover:scale-[1.02] transition-all duration-300 group`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeProject.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-lg leading-relaxed flex-1 group-hover:text-sky-400 transition-colors duration-300`}>
                        {spec}
                      </span>
                      <div className={`px-3 py-1 rounded-full ${cardBg} text-xs font-bold ${border} border opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setShowModal(false)}
                  className={`px-8 py-4 rounded-xl border-2 ${border} hover:scale-105 transition-all duration-300 font-bold text-lg backdrop-blur-sm hover:shadow-xl group`}
                >
                  <span className="group-hover:text-sky-400 transition-colors duration-300">{t.close}</span>
                </button>
                
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className={`px-8 py-4 rounded-xl bg-gradient-to-r ${activeProject.color} text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl group relative overflow-hidden`}
                  title={t.viewGitHub}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    {t.viewGitHub}
                  </span>
                </button>
                
                <button 
                  className={`px-8 py-4 rounded-xl ${subtle} border ${border} hover:scale-105 transition-all duration-300 font-bold text-lg group`}
                  title={t.downloadSpecs}
                >
                  <span className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    {t.downloadSpecs}
                  </span>
                </button>
                
                <button 
                  onClick={handleDemoRequest}
                  disabled={formStatus === 'sending'}
                  className={`px-8 py-4 rounded-xl ${primaryBtn} font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    {t.watchVideo}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}