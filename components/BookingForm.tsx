
import React from 'react';
import { 
  MessageCircle, 
  Smartphone, 
  Clock, 
  CheckCircle, 
  PhoneCall,
  Zap,
  ShieldCheck,
  Truck
} from 'lucide-react';

const BookingForm: React.FC = () => {
  // 3D character avatar URLs using DiceBear for a consistent, illustrative professional look
  const driverAvatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4&eyebrows=default&eyes=default&mouth=smile",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden&backgroundColor=c0aede&eyebrows=flatNatural&eyes=eyeRoll&mouth=default",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo&backgroundColor=ffdfbf&eyebrows=default&eyes=hearts&mouth=smile",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&backgroundColor=d1d4f9&eyebrows=default&eyes=default&mouth=smile"
  ];

  return (
    <section id="실시간 주문" className="pt-10 pb-32 bg-light px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 border border-blue/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
            <span className="text-[10px] font-bold text-blue uppercase tracking-widest">Fastest Booking Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-archivo font-black text-navy mb-4 tracking-tighter">간편 실시간 주문</h2>
          <p className="text-slate-500 text-lg">복잡한 양식 입력 대신, 전문가와 실시간 대화로 빠르게 주문하세요.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Visual & Benefits */}
          <div className="lg:col-span-7 bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue/20 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8 leading-tight">
                스마트폰 하나로 끝내는<br />
                <span className="text-blue">원스톱 실시간 주문</span>
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "1분 내 답변", desc: "기다림 없이 전담 상담사가 즉시 응대합니다." },
                  { icon: Truck, title: "전 차종 즉시 배차", desc: "오토바이부터 25톤까지 전국 최다 기사 네트워크." },
                  { icon: ShieldCheck, title: "맞춤형 견적 제안", desc: "물량과 거리에 최적화된 정직한 요금을 안내합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-all shadow-inner">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {driverAvatars.map((url, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-white overflow-hidden shadow-xl ring-2 ring-blue/20">
                    <img src={url} alt={`driver-avatar-${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-white/70">
                <span className="text-white font-black">12,481명</span>의 기사님이 지금 대기 중입니다.
              </p>
            </div>
          </div>

          {/* Right Side: CTA Action */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-border rounded-[3rem] p-10 flex flex-col items-center text-center justify-center shadow-xl flex-1 group hover:border-blue transition-all duration-500">
              <div className="w-24 h-24 bg-[#FEE500] rounded-3xl flex items-center justify-center shadow-xl shadow-yellow-500/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle size={48} fill="#191919" className="text-[#191919]" />
              </div>
              <h4 className="text-2xl font-black text-navy mb-4">카카오톡 1:1 상담</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                상담원과 실시간으로 대화하며<br />
                출발지/도착지만 알려주세요.
              </p>
              <a 
                href="http://pf.kakao.com/_rgEaxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-5 bg-[#FEE500] text-[#191919] font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                상담 및 주문하기 <Smartphone size={18} />
              </a>
            </div>

            <div className="bg-navy rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-slate-900 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue group-hover:rotate-12 transition-transform">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Direct Call</p>
                  <p className="text-white font-black text-lg">080-589-3382</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/20 group-hover:text-white transition-colors">
                <Zap size={18} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
