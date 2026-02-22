import React, { useState, useEffect } from 'react';
import { useNavAnimation } from './hooks/useNavAnimation';
import { useScrollAnimation } from './hooks/useScrollAnimation'; // Pastikan path benar
import { Linkedin, Github, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Tambah Navigation

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Tambah CSS Navigation

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tabStyle, containerRef, handleMouseEnter, resetTab } = useNavAnimation('.contact-btn');
  
  // Inisialisasi hook animasi
  const heroAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const projectAnim = useScrollAnimation();
  const skillAnim = useScrollAnimation(); 
  const contactAnim = useScrollAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => resetTab(), 150);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen, resetTab]);

  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    {
      title: "Shoping Kuy - PHP",
      desc: "Platform e-commerce klasik berbasis PHP dengan manajemen katalog produk.",
      tech: ["PHP", "CSS", "MySQL", "JS"],
      images: [
        "/img/shoping-kuy/sk-hero.png", 
        "/img/shoping-kuy/sk-menu.png", 
        "/img/shoping-kuy/sk-about.png", 
        "/img/shoping-kuy/sk-kategori.png", 
        "/img/shoping-kuy/sk-contact.png", 
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 
    {
      title: "Rental Mobil & Motor - Laravel",
      desc: "Website Rental Mobil dan Motor dengan pemesanan digital",
      tech: ["Laravel", "Bootstrap", "JS", "MySQL"],
      images: [
        "/img/rental/rental-home.png",  
        "/img/rental/rental-product.png",  
        "/img/rental/rental-order.png",  
        "/img/rental/rental-about.png",  
        "/img/rental/rental-admin.png",  
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 
    {
      title: "FMCG Sales Performance Diatribution Analysis",
      desc: "Menganalisis +19.000 transaksi retail untuk mengoptimalkan strategi penjualan dan efektivitas promosi.",
      tech: ["Looker Studio", "DB Browser", "Excel"],
      images: [
        "/img/data1/looker1.png", 
        "/img/data1/looker2.png", 
        "/img/data1/looker3.png", 
        "/img/data1/looker4.png", 
        "/img/data1/data5.png", 
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 
    {
      title: "Website UKM - Wordpress",
      desc: "Website UKM PENALARAN & KREATIFITAS UPN VETERAN Jawa Timur",
      tech: ["Wordpress"],
      images: [
        "/img/ukm/ukm-home.png", 
        "/img/ukm/ukm-jumlah.png", 
        "/img/ukm/ukm-bidang.png", 
        "/img/ukm/ukm-about.png", 
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 
    {
      title: "Final Project Design - Figma",
      desc: "Final project semester 3 membuat design aplikasi pelaporan warga",
      tech: ["Figma"],
      images: [
        "/img/figma1/fp-3.png",
        "/img/figma1/fp-4.png",
        "/img/figma1/figma-wf.png",
        "/img/figma1/fp-1.png",
        "/img/figma1/fp-2.png",
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 
    {
      title: "Portofolio - TailwindCSS",
      desc: "Website portofolio sebagai tugas Sekolah Menengah Kejurusan",
      tech: ["HTML", "Tailwind", "JS"],
      images: [
        "/img/pf/pf-home.png",  
        "/img/pf/pf-contact.png",  
        "/img/pf/pf-blog.png",  
      ],
      link: "http://localhost/shoping%20kuy/landing.php"
    }, 

  ];

  const skillCategories = [
      {
        category: "Frontend Dev",
        skills: [
          { name: "React JS", level: 50 },
          { name: "Tailwind CSS", level: 60 },
          { name: "JavaScript", level: 25 },
          { name: "Bootstrap", level: 85 }
        ]
      },
      {
        category: "Backend Dev",
        skills: [
          { name: "PHP / Laravel", level: 75 },
          { name: "MySQL / SQL", level: 70 },
          { name: "Node.js", level: 10 },
          { name: "WordPress", level: 90 }
        ]
      },
      {
        category: "Data & Analysis",
        skills: [
          { name: "Python (Data)", level: 10 },
          { name: "Power BI", level: 20 },
          { name: "Excel Advanced", level: 50 },
          { name: "Machine Learning", level: 5 }
        ]
      }
  ];

  const visibleProjects = showAllProjects ? allProjects : allProjects.slice(0, 6);
  const featuredProjects = allProjects.slice(0, 3);
  const remainingProjects = allProjects.slice(3);

  return (
    <div className="bg-slate-950 overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-indigo-600/90 backdrop-blur-md z-50 border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center relative" ref={containerRef}>
          <div className="text-xl font-extrabold tracking-tighter text-white z-[70]">
            RAYNAR.<span className="text-white/80">ID</span>
          </div>

          <div className="hidden md:flex items-center relative py-2" onMouseLeave={resetTab}>
            <div 
              className="absolute bg-slate-900 rounded-full transition-all duration-300 ease-out h-10 pointer-events-none"
              style={{
                left: `${tabStyle.left}px`,
                width: `${tabStyle.width}px`,
                opacity: tabStyle.opacity,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
            <div className="flex items-center space-x-2 text-sm font-semibold text-white">
              <a href="#home" onMouseEnter={handleMouseEnter} className="px-5 py-2 rounded-full z-10">Home</a>
              <a href="#about" onMouseEnter={handleMouseEnter} className="px-5 py-2 rounded-full z-10">About</a>
              <a href="#projects" onMouseEnter={handleMouseEnter} className="px-5 py-2 rounded-full z-10">Projects</a>
              <a href="#skills" onMouseEnter={handleMouseEnter} className="px-5 py-2 rounded-full z-10">Skills</a>
              <a href="#contact" onMouseEnter={handleMouseEnter} className="contact-btn px-6 py-2 rounded-full z-10">
                Contact Me
              </a>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-[70] text-white">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <div className={`fixed inset-x-0 top-0 bg-slate-900 shadow-2xl transition-all duration-500 md:hidden z-[60] overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="relative flex flex-col items-center pt-24 pb-12 space-y-4" onMouseLeave={resetTab}>
              <div 
                className="absolute bg-indigo-600 rounded-xl transition-all duration-300 pointer-events-none z-0"
                style={{
                  top: `${tabStyle.top}px`,
                  height: `${tabStyle.height}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '85%',
                  opacity: tabStyle.opacity
                }}
              />
              {['Home', 'About', 'Projects', 'Skills'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onMouseEnter={handleMouseEnter} onClick={() => setIsMenuOpen(false)} className="relative z-10 text-xl font-bold text-slate-300 py-3 w-[85%] text-center">
                  {item}
                </a>
              ))}
              <a href="mailto:raynarham23@gmail.com" onMouseEnter={handleMouseEnter} className="contact-btn relative z-10 text-white py-3 rounded-xl font-bold w-[85%] text-center border border-white/10">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex items-center pt-16 px-6 bg-slate-950">
        <div ref={heroAnim.elementRef} 
          className={`max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full ${heroAnim.animationClass}`}>
          <div className="flex-1 text-left">
            <h2 className="text-indigo-400 font-bold tracking-widest text-xl uppercase mb-4">Halo Semua! Saya</h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-200 leading-[1.1] mb-4">
              Muhammad <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Raynar Hammam
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
              Information Systems Undergraduate specializing in data analytics and software development.
            </p>
            <div className="flex flex-row gap-4">
              <a href="mailto:muhammadraynar@example.com" className="flex-1 sm:flex-none px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all text-center">
                Hubungi Saya
              </a>
              <a href="#projects" className="flex-1 sm:flex-none px-8 py-3 border-2 border-slate-500 text-slate-300 font-bold rounded-xl hover:border-indigo-500 transition-all text-center">
                Lihat Project
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-indigo-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-indigo-600 shadow-2xl bg-slate-800">
                <img src="/img/profile.png" alt="Raynar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="min-h-[100dvh] w-full flex flex-col bg-slate-800/20 px-6 justify-center overflow-hidden">
        <div 
          ref={aboutAnim.elementRef} 
          className={`max-w-6xl mx-auto w-full ${aboutAnim.animationClass} flex flex-col 
            /* Penarik ke atas: */
            -mt-12 md:-mt-20`} 
        >
          {/* -mt-12 di mobile dan -mt-20 di desktop akan menarik seluruh konten About 
            ke atas secara halus tanpa merusak struktur grid.
          */}
          
          {/* Section Heading */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2">
              Get To Know
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-white relative inline-block">
              About Me
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-indigo-600 rounded-full"></span>
            </h1>
          </div>

          {/* Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* ... isi card tetap sama seperti versi favoritmu ... */}
            
            {/* Card 1: Tentang Saya */}
            <div className="bg-slate-900/50 p-7 md:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300 shadow-xl flex flex-col justify-center">
              <h3 className="text-indigo-500 font-bold tracking-wider uppercase text-base md:text-lg mb-1">
                Sekilas
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Biodata & Minat 
              </h2>
              <p className="text-slate-400 text-[15px] md:text-base leading-relaxed text-justify">
                Mahasiswa Sistem Informasi dengan latar belakang <span className="text-indigo-400 font-semibold">RPL</span>. Memadukan pengalaman <span className="text-indigo-300 font-bold"> Software Development </span> sejak sekolah menengah dengan analisis strategi bisnis. Fokus pada integrasi <span className="text-indigo-300 font-bold" > Data Analytics </span> untuk menciptakan solusi teknologi yang efisien dan relevan dengan industri.
              </p>
            </div>

            {/* Card 2: Let's Connect */}
            <div className="bg-slate-900/50 p-7 md:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  Let's Connect
                </h2>
                <p className="text-slate-400 text-[15px] md:text-base leading-relaxed mb-6 md:mb-8">
                  Saya selalu terbuka untuk berdiskusi mengenai proyek baru, peluang kolaborasi, 
                  atau sekadar berbagi ide seputar teknologi dan analisis data. Mari terhubung 
                  melalui media sosial saya di bawah ini.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 md:gap-5 flex-wrap">
                {/* ... map social icons yang ada WhatsApp-nya ... */}
                {[
                  { name: 'LinkedIn', icon: <Linkedin size={22} />, url: '#' },
                  { name: 'GitHub', icon: <Github size={22} />, url: '#' },
                  { name: 'Email', icon: <Mail size={22} />, url: 'mailto:muhammadraynar@example.com' },
                  { 
                    name: 'WhatsApp', 
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    ), 
                    url: 'https://wa.me/628123456789' 
                  }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300 shadow-lg active:scale-90">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="min-h-screen py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
        
        <div ref={projectAnim.elementRef} className={`max-w-6xl mx-auto w-full ${projectAnim.animationClass} -mt-4 md:-mt-16`}>
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-lg mb-2">
                Portfolio
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-white">
                Featured Projects
              </h1>
            </div>
            <p className="text-slate-400 max-w-md text-sm md:text-base italic border-l-2 border-indigo-500 pl-4">
              Kumpulan proyek yang saya kerjakan baik di sekolah, kuliah, maupun saat mengikuti bootcamp.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? allProjects : allProjects.slice(0, 3)).map((project, index) => (
              <div key={index} className="group relative bg-slate-900/40 rounded-3xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl flex flex-col"
              >
                {/* --- BAGIAN CAROUSEL DENGAN PANAH --- */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800 group/swiper">
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation]} // Tambah Navigation di sini
                    pagination={{ clickable: true }}
                    navigation={true} // Aktifkan panah
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="h-full w-full"
                  >
                    {project.images.map((img, imgIdx) => (
                      <SwiperSlide key={imgIdx}>
                        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img 
                          src={img} 
                          alt={`${project.title} - ${imgIdx}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom CSS untuk Panah & Pagination */}
                  <style>{`
                    /* Sembunyikan panah default, hanya muncul saat hover pada foto */
                    .swiper-button-next, .swiper-button-prev {
                      color: white !important;
                      transform: scale(0.35);
                      transition: all 0.3s;
                      opacity: 0;
                      background: rgba(79, 70, 229, 0.6); /* Warna Indigo transparan */
                      padding: 40px;
                      border-radius: 50%;
                    }
                    .group\/swiper:hover .swiper-button-next,
                    .group\/swiper:hover .swiper-button-prev {
                      opacity: 1;
                      transform: scale(0.45);
                    }
                    .swiper-button-next:after, .swiper-button-prev:after {
                      font-size: 40px !important;
                      font-weight: bold;
                    }
                    .swiper-pagination-bullet { background: #94a3b8 !important; opacity: 0.5; }
                    .swiper-pagination-bullet-active { background: #6366f1 !important; opacity: 1; width: 20px; border-radius: 4px; transition: all 0.3s; }
                  `}</style>
                </div>

                {/* --- CONTENT & BUTTON INVERSE COLOR --- */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[12px] font-bold uppercase tracking-tighter px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 h-10">
                    {project.desc}
                  </p>

                  {/* --- BUTTON VIEW DETAILS (INVERSE) --- */}
                  <div className="mt-auto">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      /* Warna Default: bg-indigo-600
                        Warna Hover: bg-slate-800 
                      */
                      className="w-full py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Project Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol See All Portfolio - Muncul hanya jika belum diklik dan total project > 3 */}
          {!showAllProjects && allProjects.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setShowAllProjects(true)}
                className="px-10 py-3 bg-indigo-900 text-white font-bold rounded-full hover:bg-slate-800 border-2 border-indigo-600 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                See All Portfolio
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="min-h-[100dvh] py-16 px-6 bg-slate-800/20 relative flex flex-col justify-center overflow-hidden">
        {/* Dekorasi Background */}
        <div ref={skillAnim.elementRef} className={`max-w-6xl mx-auto w-full -mt-12 md:-mt-16 ${skillAnim.animationClass}`}>

            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-lg mb-2">Capabilities</h2>
              <h1 className="text-3xl md:text-5xl font-black text-white">Technical Skills</h1>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                    {cat.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group">
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300 font-medium group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-indigo-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote/Subtext agar frame tidak terlihat kosong di layar lebar */}
            <p className="text-center text-slate-500 text-sm mt-12 italic max-w-2xl mx-auto">
              "Terus belajar dan beradaptasi dengan teknologi terbaru untuk memberikan solusi yang paling efisien."
            </p>
          </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="min-h-[100dvh] py-16 px-6 bg-slate-950 relative flex flex-col justify-center overflow-hidden">
        {/* Background Glow Premium */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>

        <div 
          ref={contactAnim.elementRef} // Gunakan contactAnim yang sudah dideklarasikan
          className={`max-w-6xl mx-auto w-full -mt-10 md:-mt-16 ${contactAnim.animationClass}`}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-lg mb-2">Get In Touch</h2>
            <h1 className="text-3xl md:text-5xl font-black text-white">Let's Work Together</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
            {/* Kolom Kiri: Contact Info (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                  <p className="text-slate-400 mb-8 text-sm md:text-base leading-relaxed">
                    Punya ide menarik atau ingin berkolaborasi? Hubungi kontak berikut.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Mail className="text-indigo-500" size={20} />, label: "Email", value: "muhammadraynar@example.com", href: "mailto:muhammadraynar@example.com" },
                      { icon: <Linkedin className="text-indigo-500" size={20} />, label: "LinkedIn", value: "Muhammad Raynar Hammam", href: "#" },
                      { icon: <Github className="text-indigo-500" size={20} />, label: "GitHub", value: "mraynarr", href: "#" },
                    ].map((item, i) => (
                      <a key={i} href={item.href} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
                          <p className="text-slate-200 group-hover:text-indigo-400 transition-colors text-sm md:text-base">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-slate-500 text-xs italic">
                    *Respon biasanya dalam waktu kurang dari 24 jam.
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Contact Form (3/5) */}
            <div className="lg:col-span-3">
              <form className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-2xl h-full space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-3">Nama Lengkap</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-3">Alamat Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-3">Subjek</label>
                  <input 
                    type="text" 
                    placeholder="Tujuan pesan Anda"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase ml-1 mb-3">Pesan</label>
                  <textarea 
                    rows="4"
                    placeholder="Ceritakan proyek atau ide Anda..."
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-slate-800 border-2 border-transparent hover:border-slate-700 transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-3 group"
                >
                  Kirim Pesan
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-slate-800/20 pt-20 pb-10 border-t border-slate-900 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            
            {/* Kolom 1: Brand & Bio */}
            <div className="max-w-xs">
              <div className="text-2xl font-black tracking-tighter text-white mb-6">
                RAYNAR.<span className="text-indigo-600">ID</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Membangun jembatan antara kode yang efisien dan analisis data yang akurat. 
                Berfokus pada pengembangan solusi digital yang memberikan nilai nyata.
              </p>
            </div>

            {/* Kolom 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Pendidikan</h4>
              <ul className="space-y-4">
                {['UPN Veteran Jawa Timur', 'SMK Negeri 2 Surabaya', 'SMP Negeri 26 Surabaya'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Social & Connect */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <div className="flex gap-4">
                {[
                  { 
                    icon: <Linkedin size={18} />, 
                    url: "#", 
                    color: "hover:bg-indigo-600" 
                  },
                  { 
                    icon: <Github size={18} />, 
                    url: "#", 
                    color: "hover:bg-indigo-600" 
                  },
                  { 
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    ), 
                    url: "https://wa.me/6281234567890", // Ganti dengan nomor WA kamu
                    color: "hover:bg-indigo-600" 
                  },
                  { 
                    icon: <Mail size={18} />, 
                    url: "mailto:muhammadraynar@example.com", 
                    color: "hover:bg-indigo-600" 
                  }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300 shadow-lg active:scale-95`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="mt-6 text-slate-500 text-sm font-medium">Surabaya, Indonesia</p>
            </div>
          </div>

          {/* Bottom Bar: Copyright */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Muhammad Raynar Hammam. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-slate-700 text-[10px] uppercase tracking-[0.2em]">Built with React & Tailwind</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;