import { useState, useEffect } from 'react';
import { Star, Check, ArrowRight, Send, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type Currency = 'MAD' | 'EUR' | 'USD';

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [currency, setCurrency] = useState<Currency>('MAD');
  const navigate = useNavigate();
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const formatPrice = (madPrice: number) => {
    if (currency === 'MAD') return `${madPrice.toLocaleString()} MAD`;
    if (currency === 'EUR') return `${Math.round(madPrice * 0.093)}€`;
    if (currency === 'USD') return `$${Math.round(madPrice * 0.10)}`;
    return '';
  };

  const handleOrder = (serviceName: string, basePrice: number) => {
    sessionStorage.setItem('checkoutProduct', JSON.stringify({
      name: serviceName,
      price: formatPrice(basePrice),
    }));
    navigate('/checkout');
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>NACY ST - Creative Web Agency Morocco</title>
        <meta name="description" content="NACY ST is a creative studio based in Tanger, Morocco, offering Website Creation, AI Photo Shooting, and Video Production. Where strategy meets intelligence." />
      </Helmet>

      <div className="w-full overflow-hidden">
        
        {/* 1. Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center">
          <div className="animate-fadeIn inline-block bg-surface px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-muted mb-8 border border-gray-100">
            Creative Studio · Tanger, Morocco
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto mb-6 leading-tight flex flex-col">
            <span className="text-white animate-fadeUp" style={{ animationDelay: '100ms', WebkitTextStroke: '1px #1d1d1f' }}>WE BUILD</span>
            <span className="text-accent animate-fadeUp" style={{ animationDelay: '200ms' }}>WHAT OTHERS</span>
            <span className="text-transparent animate-fadeUp" style={{ animationDelay: '300ms', WebkitTextStroke: '2px #1d1d1f' }}>ONLY PROMISE.</span>
          </h1>
          
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10 animate-fadeUp" style={{ animationDelay: '400ms' }}>
            Websites. Visuals. Videos. Delivered with precision,<br className="hidden sm:block"/> 
            crafted for impact — wherever your audience is.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fadeUp" style={{ animationDelay: '500ms' }}>
            <button onClick={scrollToContact} className="bg-foreground text-white px-8 py-4 rounded-full font-medium text-lg min-w-[200px] transition-transform hover:scale-95">
              Start a project
            </button>
            <button onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-surface text-foreground border border-gray-200 px-8 py-4 rounded-full font-medium text-lg min-w-[200px] hover:bg-gray-100 transition-colors">
              See our work
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 text-center animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <div><p className="text-3xl font-bold tracking-tight">100%</p><p className="text-sm text-muted mt-1">Custom work</p></div>
            <div><p className="text-3xl font-bold tracking-tight">48H</p><p className="text-sm text-muted mt-1">First delivery</p></div>
            <div><p className="text-3xl font-bold tracking-tight">3</p><p className="text-sm text-muted mt-1">Core services</p></div>
            <div><p className="text-3xl font-bold tracking-tight">Worldwide</p><p className="text-sm text-muted mt-1">Clients</p></div>
          </div>
        </section>

        {/* Certification Badges */}
        <section className="py-10 border-y border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <div className="flex flex-col items-center group">
              <svg className="h-10 text-gray-400 group-hover:text-[#4285F4] transition-colors duration-300 fill-current" viewBox="0 0 24 24" width="40" height="40">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs text-muted mt-2 font-medium">Google Certified</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <svg className="h-10 text-gray-400 group-hover:text-[#0056D2] transition-colors duration-300 fill-current" viewBox="0 0 100 100" width="40" height="40">
                <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 85c-19.3 0-35-15.7-35-35S30.7 15 50 15s35 15.7 35 35-15.7 35-35 35z"/>
                <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"/>
              </svg>
              <span className="text-xs text-muted mt-2 font-medium">Coursera Certified</span>
            </div>

            <div className="flex flex-col items-center group">
              <svg className="h-10 text-gray-400 group-hover:text-[#00B67A] transition-colors duration-300 fill-current" viewBox="0 0 100 100" width="40" height="40">
                <path d="M50 0l15.5 31.4L100 36.4 75 60.8l5.9 34.5L50 79.1 19.1 95.3 25 60.8 0 36.4l34.5-5L50 0z"/>
              </svg>
              <span className="text-xs text-muted mt-2 font-medium">Trustpilot Verified</span>
            </div>
          </div>
        </section>

        {/* MarqueeBand */}
        <section className="w-full bg-surface py-6 border-b border-gray-100 overflow-hidden hover:[&>div]:!animate-none">
          <div 
            className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]"
            style={{ width: '200%' }}
          >
            {Array(4).fill(['WEB CREATION', 'AI PHOTO SHOOTING', 'VIDEO PRODUCTION', 'BRAND STRATEGY']).flat().map((item, i) => (
              <span key={i} className="text-xl md:text-2xl font-semibold tracking-widest text-muted mx-8">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">Our Services.</h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-16">
            We use the latest tools — including AI — to deliver results that agencies three times our size can't match at this price.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 animate-scaleIn" style={{ animationDelay: '0ms' }}>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Website Creation</h3>
              <p className="text-muted text-sm mb-6 min-h-[60px]">
                Custom websites built to convert. Clean code, sharp design, built for performance and growth.
              </p>
              <ul className="space-y-3 mb-10 text-sm text-foreground">
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Custom design, no templates</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> SEO-ready from day one</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Mobile-first, fast loading</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> 1 month of post-launch support</li>
              </ul>
              <div className="mt-auto">
                <button onClick={scrollToContact} className="w-full bg-white border border-gray-200 py-3 rounded-full font-medium transition-colors hover:bg-gray-50">
                  Start my project
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 animate-scaleIn" style={{ animationDelay: '80ms' }}>
              <h3 className="text-2xl font-bold tracking-tight mb-4">AI Photo Shooting</h3>
              <p className="text-muted text-sm mb-6 min-h-[60px]">
                Studio-quality visuals without the studio cost. Products, portraits, brand imagery — all elevated.
              </p>
              <ul className="space-y-3 mb-10 text-sm text-foreground">
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Pack of 45 HD visuals</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Custom backgrounds and lighting</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> AI-enhanced retouching</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Product and portrait specialization</li>
              </ul>
              <div className="mt-auto">
                <button onClick={scrollToContact} className="w-full bg-white border border-gray-200 py-3 rounded-full font-medium transition-colors hover:bg-gray-50">
                  Book a shoot
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-surface p-8 rounded-3xl border border-gray-100 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 animate-scaleIn" style={{ animationDelay: '160ms' }}>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Video Production</h3>
              <p className="text-muted text-sm mb-6 min-h-[60px]">
                Short-form content built for attention. Reels, product videos, brand films — edited for every platform.
              </p>
              <ul className="space-y-3 mb-10 text-sm text-foreground">
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Product video, Reels, TikTok format</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Professional editing + subtitles</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Voiceover available</li>
                <li className="flex items-center"><Check size={16} className="text-accent mr-3 flex-shrink-0" /> Optimized for IG, TikTok, YouTube</li>
              </ul>
              <div className="mt-auto">
                <button onClick={scrollToContact} className="w-full bg-white border border-gray-200 py-3 rounded-full font-medium transition-colors hover:bg-gray-50">
                  Discuss my project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WhyUs */}
        <section id="why-us" className="py-24 bg-surface mt-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Why us.</h2>
              <p className="text-lg text-muted mb-10 max-w-lg">
                We build relationships on transparency, precision design, and measurable impact.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="border-l-2 border-foreground pl-4">
                   <p className="text-4xl font-bold">2x</p>
                   <p className="text-sm text-muted mt-2">Faster load times</p>
                 </div>
                 <div className="border-l-2 border-foreground pl-4">
                   <p className="text-4xl font-bold">+140%</p>
                   <p className="text-sm text-muted mt-2">Client engagement</p>
                 </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Smarter tools, sharper results", text: "We integrate AI into our process where it matters — cutting production time without cutting quality." },
                { title: "Performance focused", text: "Code optimized for speed and conversion." },
                { title: "Brand DNA compliant", text: "Design that respects and elevates your visual identity." },
                { title: "Rapid iteration", text: "Continuous tracking and fast updates." }
              ].map((point, i) => (
                <div key={i} className="flex items-start bg-white p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-50 animate-scaleIn" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="bg-surface text-foreground p-2 rounded-full mr-4 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <p className="text-base font-bold">{point.title}</p>
                    <p className="text-sm text-muted mt-1">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Transparent Pricing.</h2>
            <p className="text-lg text-muted mb-8">Simple packages adapted to all ambitions.</p>
            
            {/* Currency Switcher */}
            <div className="inline-flex bg-surface p-1 rounded-full relative">
              <div 
                className="absolute top-1 bottom-1 w-20 bg-white rounded-full shadow-sm border border-gray-200 transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(${currency === 'MAD' ? '0' : currency === 'EUR' ? '100%' : '200%'})` 
                }}
              />
              <button 
                onClick={() => setCurrency('MAD')} 
                className={`w-20 py-2 text-sm font-medium relative z-10 transition-colors ${currency === 'MAD' ? 'text-foreground' : 'text-muted hover:text-foreground'}`}
              >
                MAD
              </button>
              <button 
                onClick={() => setCurrency('EUR')} 
                className={`w-20 py-2 text-sm font-medium relative z-10 transition-colors ${currency === 'EUR' ? 'text-foreground' : 'text-muted hover:text-foreground'}`}
              >
                EUR
              </button>
              <button 
                onClick={() => setCurrency('USD')} 
                className={`w-20 py-2 text-sm font-medium relative z-10 transition-colors ${currency === 'USD' ? 'text-foreground' : 'text-muted hover:text-foreground'}`}
              >
                USD
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Service 1 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col hover:-translate-y-[4px] transition-transform animate-scaleIn" style={{ animationDelay: '0ms' }}>
              <h3 className="text-xl font-bold mb-2">Website Creation</h3>
              <p className="text-3xl font-bold my-6">{formatPrice(3499)}</p>
              <ul className="space-y-4 mb-8 text-sm text-muted flex-grow">
                <li><Check size={16} className="inline mr-2 text-foreground" /> Custom design</li>
                <li><Check size={16} className="inline mr-2 text-foreground" /> SEO setup</li>
                <li><Check size={16} className="inline mr-2 text-foreground" /> Mobile-first</li>
                <li><Check size={16} className="inline mr-2 text-foreground" /> 1 month support</li>
              </ul>
              <button onClick={() => handleOrder('Website Creation', 3499)} className="w-full bg-white border border-gray-200 hover:bg-gray-50 py-3 rounded-full font-medium transition-colors">
                Start my project
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col hover:-translate-y-[4px] transition-transform animate-scaleIn" style={{ animationDelay: '80ms' }}>
              <h3 className="text-xl font-bold mb-2">AI Photo Shooting</h3>
              <p className="text-3xl font-bold my-6">{formatPrice(950)}</p>
              <ul className="space-y-4 mb-6 text-sm text-muted flex-grow">
                <li><Check size={16} className="inline mr-2 text-foreground" /> Pack of 45 HD visuals</li>
                <li><Check size={16} className="inline mr-2 text-foreground" /> Custom backgrounds</li>
                <li><Check size={16} className="inline mr-2 text-foreground" /> AI retouching</li>
              </ul>
              <p className="text-xs text-muted mb-8 italic">Need something custom? Contact us for a tailored quote.</p>
              <button onClick={() => handleOrder('AI Photo Shooting', 950)} className="w-full bg-white border border-gray-200 hover:bg-gray-50 py-3 rounded-full font-medium transition-colors">
                Book a shoot
              </button>
            </div>

            {/* Service 3 Volume */}
            <div className="bg-foreground text-white rounded-3xl p-8 border-2 border-accent relative hover:-translate-y-[4px] transition-transform animate-scaleIn" style={{ animationDelay: '160ms', outline: '2px solid transparent' }}>
              <h3 className="text-xl font-bold mb-6">Video Production</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span>1 video</span>
                  <span className="font-bold">{formatPrice(350)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-3">
                  <span>2 videos <span className="bg-accent/20 text-accent text-[10px] px-2 py-0.5 rounded ml-2 uppercase font-bold">Save {formatPrice(50)}</span></span>
                  <span className="font-bold">{formatPrice(650)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-3">
                  <span>3 videos <span className="bg-accent/20 text-accent text-[10px] px-2 py-0.5 rounded ml-2 uppercase font-bold">Save {formatPrice(150)}</span></span>
                  <span className="font-bold">{formatPrice(900)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-3">
                  <span>4 videos <span className="bg-accent/20 text-accent text-[10px] px-2 py-0.5 rounded ml-2 uppercase font-bold">Save {formatPrice(300)}</span></span>
                  <span className="font-bold">{formatPrice(1100)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-8 italic">Need more or something specific? Let's talk.</p>
              <button onClick={scrollToContact} className="w-full bg-accent hover:bg-blue-600 py-3 rounded-full font-medium transition-colors">
                Discuss my project
              </button>
            </div>
            
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-surface px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to start?</h2>
              <p className="text-lg text-muted mb-12 max-w-md">
                Fill out the form to get a free quote in less than 24 hours.
              </p>
              <div className="space-y-6 text-foreground font-medium">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm border border-gray-100">
                    <Send size={18} className="text-accent" />
                  </div>
                  eaagagency@gmail.cm
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm border border-gray-100">
                    <MessageCircle size={18} className="text-accent" />
                  </div>
                  +212 7 10 90 05 02
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 animate-scaleIn" style={{ animationDelay: '200ms' }}>
              {formState === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Message sent!</h3>
                  <p className="text-muted">We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="contact-prenom">First Name</label>
                      <input required type="text" id="contact-prenom" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="contact-nom">Last Name</label>
                      <input required type="text" id="contact-nom" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="contact-email">Email</label>
                    <input required type="email" id="contact-email" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="contact-tel">Phone</label>
                    <input type="tel" id="contact-tel" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="contact-service">Service needed</label>
                    <select id="contact-service" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white appearance-none">
                      <option value="">Select an option</option>
                      <option value="web">Website Creation</option>
                      <option value="photo">AI Photo Shooting</option>
                      <option value="video">Video Production</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="contact-msg">Message (optional)</label>
                    <textarea rows={4} id="contact-msg" className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white resize-none" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-foreground text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-transform hover:scale-95 flex justify-center items-center"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTABand */}
        <section className="bg-accent py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              A project in mind? Let's talk now.
            </h2>
            <a href="https://wa.me/212710900502" target="_blank" rel="noreferrer" className="inline-flex items-center bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-95">
              <MessageCircle className="mr-3" size={24} />
              Direct WhatsApp 
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
