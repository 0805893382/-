
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '서비스', id: 'service' },
    { name: '견적문의', id: 'estimate' },
    { name: '실시간주문', id: 'booking' },
    { name: '계약문의', id: 'contract' },
    { name: '고객센터', id: 'customer' }
  ];

  const handleNavClick = (id: any) => {
    setView(id);
    setMobileMenuOpen(false);
  };

  const navThemeClass = (scrolled || currentView !== 'home') ? 'text-navy' : 'text-white';
  const navBgClass = (scrolled || currentView !== 'home') ? 'py-4 glass border-b border-border shadow-sm' : 'py-6 bg-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')} 
          className={`font-sans text-2xl font-black tracking-tighter transition-colors ${navThemeClass}`}
        >
          유통퀵화물<span className="text-blue">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.id)} 
              className={`text-sm font-semibold transition-all relative py-2 ${currentView === item.id ? 'text-blue' : navThemeClass} hover:text-blue`}
            >
              {item.name}
              {currentView === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue rounded-full animate-in slide-in-from-left-2"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="http://pf.kakao.com/_rgEaxj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#FEE500] text-[#191919] text-xs font-black rounded-full hover:shadow-lg transition-all"
          >
            <MessageCircle size={14} fill="#191919" /> 카톡 상담
          </a>
          <button 
            onClick={() => handleNavClick('booking')}
            className="px-6 py-2.5 bg-blue text-white text-sm font-bold rounded-full hover:bg-blue/90 hover:shadow-lg transition-all flex items-center gap-2"
          >
            배차 신청 <ArrowRight size={14} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-blue">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40 p-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-black text-left border-b border-slate-100 pb-4 ${currentView === item.id ? 'text-blue' : 'text-navy'}`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-10 flex flex-col gap-4">
              <a href="http://pf.kakao.com/_rgEaxj" className="w-full py-4 bg-[#FEE500] text-[#191919] font-black rounded-xl text-center">카톡 요금 문의</a>
              <a href="tel:080-589-3382" className="w-full py-4 bg-navy text-white font-black rounded-xl text-center">전화 고객센터</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
