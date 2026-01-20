import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FareEstimator from './components/FareEstimator';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import { 
  Truck, ShieldCheck, Clock, MapPin, Globe, Award, 
  ChevronRight, Zap, CreditCard, 
  Users2, CheckCircle, 
  PhoneCall, Headphones, HelpCircle,
  AlertCircle, Building2, Receipt, BarChart3, Briefcase,
  MessageCircle, Info, ClipboardList
} from 'lucide-react';

type View = 'home' | 'service' | 'estimate' | 'booking' | 'contract' | 'customer';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'service':
        return <ServiceView setView={setView} />;
      case 'estimate':
        return <EstimateView />;
      case 'booking':
        return <BookingView />;
      case 'contract':
        return <ContractView />;
      case 'customer':
        return <CustomerView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="bg-light min-h-screen font-sans">
      <Navbar currentView={view} setView={setView} />
      
      <main className="transition-all duration-500">
        {renderContent()}
      </main>

      <footer className="bg-navy text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <button onClick={() => setView('home')} className="font-sans text-3xl font-black tracking-tighter mb-8 block">
                유통퀵화물<span className="text-blue">.</span>
              </button>
              <p className="text-white/70 max-w-md leading-relaxed mb-8">
                빠른 배송보다 중요한 건 약속을 지키는 배송입니다.<br />
                데이터와 기술로 연결된 물류의 미래, 유통퀵화물이 선도합니다.
              </p>
              <div className="space-y-2 pt-4 border-t border-white/10">
                <p className="text-sm font-bold text-white/90">회사명 유통퀵화물 | 대표자 박지원</p>
                <p className="text-xs text-white/50 leading-relaxed">
                  사업자등록번호 362-16-02019 | 화물운송주선허가 제 동-3-2054호
                </p>
                <p className="text-xs text-white/40">이메일: yutong3382@naver.com</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-blue mb-8">Quick Links</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><button onClick={() => setView('service')} className="hover:text-white transition-colors">서비스 소개</button></li>
                <li><button onClick={() => setView('estimate')} className="hover:text-white transition-colors">견적 안내</button></li>
                <li><button onClick={() => setView('booking')} className="hover:text-white transition-colors">예약 프로세스</button></li>
                <li><button onClick={() => setView('contract')} className="hover:text-white transition-colors">계약 문의</button></li>
                <li><button onClick={() => setView('customer')} className="hover:text-white transition-colors">고객센터</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-blue mb-8">Contact</h5>
              <p className="text-3xl font-archivo font-black mb-2 text-white underline decoration-blue underline-offset-8">080-589-3382</p>
              <p className="text-[11px] text-white/60 font-medium mb-2 tracking-tight">365일 24시간 연중무휴 (전국 배차)</p>
              <p className="text-xs text-white/40 leading-relaxed">
                인천특별시 동구 방축로37번길 30
              </p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            <p>© 2025 YUTONG QUICK CARGO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <a href="http://pf.kakao.com/_rgEaxj" target="_blank" className="text-blue">Kakao Channel</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomeView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
          alt="Logistic Background" 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 border border-blue/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
            <span className="text-[10px] font-bold text-blue uppercase tracking-widest">Premium Logistics Partner</span>
          </div>
          <h1 className="font-archivo text-5xl md:text-7xl lg:text-8xl text-white font-black leading-[1.35] mb-8 tracking-tighter">
            다양한 차량<br />
            전국 어디든<br />
            <span className="text-blue">유통퀵화물</span>은<br />
            가능합니다.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl leading-relaxed">
            오토바이부터 25톤 트럭까지,<br />
            전국 24시간 빈틈없는 운송서비스를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setView('booking')} className="px-10 py-5 bg-blue text-white text-lg font-bold rounded-xl hover:scale-105 transition-all shadow-xl shadow-blue/20 text-center">
              실시간 배차 신청
            </button>
            <button onClick={() => setView('contract')} className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold rounded-xl hover:bg-white hover:text-navy transition-all text-center flex items-center justify-center gap-2">
              <Building2 size={20} /> 기업 파트너십 문의
            </button>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4">
           {[
             { icon: Award, label: '누적 배차', value: '50만건+' },
             { icon: Globe, label: '서비스 지역', value: '전국 24시' },
             { icon: ShieldCheck, label: '정시 배송율', value: '99.8%' },
             { icon: Clock, label: '적재물 보험', value: '100% 가입' },
           ].map((stat, i) => (
             <div key={i} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
               <stat.icon className="text-blue mb-4" size={32} />
               <p className="text-white/50 text-xs font-bold uppercase mb-1">{stat.label}</p>
               <p className="text-white text-2xl font-archivo font-black">{stat.value}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
    <Dashboard />
    <section className="py-20 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-navy mb-12">전국 어디서나 24시간 연결됩니다.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['서울/수도권', '강원권', '충청/전라권', '경상권/제주'].map((region, i) => (
             <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-border group hover:border-blue transition-all">
               <MapPin className="text-blue mb-4 mx-auto group-hover:scale-110 transition-transform" />
               <p className="font-bold text-navy">{region}</p>
               <p className="text-xs text-slate-400 mt-2">상시 배차 가능</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ContractView: React.FC = () => (
  <div className="pt-32 pb-32 animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-blue font-bold text-sm tracking-widest uppercase mb-4">Business Partnership</h2>
        <h3 className="text-5xl font-archivo font-black text-navy tracking-tighter mb-8 leading-[1.1]">
          비즈니스의 속도를 높이는<br />
          <span className="text-blue">물류 파트너십 솔루션</span>
        </h3>
        <p className="text-xl text-slate-500 leading-relaxed font-medium">
          매번 번거로운 결제와 복잡한 증빙 대신,<br />
          유통퀵화물의 통합 기업 물류 관리 서비스를 경험하세요.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { 
            icon: Receipt, 
            title: '월간 후불 정산', 
            desc: '매번 결제할 필요 없이 한 달간의 이용 내역을 한 번에 후불로 정산하여 회계 처리가 간편해집니다.' 
          },
          { 
            icon: BarChart3, 
            title: '통합 물류 대시보드', 
            desc: '기업 전용 아이디 제공을 통해 실시간 배송 현황과 물류 통계를 한눈에 관리할 수 있습니다.' 
          },
          { 
            icon: Briefcase, 
            title: '1:1 전담 매니저', 
            desc: '고객사의 물류 특성을 잘 아는 전담 매니저가 배차부터 CS까지 책임지고 관리해 드립니다.' 
          }
        ].map((benefit, i) => (
          <div key={i} className="p-10 bg-white border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center text-blue mb-8">
              <benefit.icon size={28} />
            </div>
            <h4 className="text-xl font-black text-navy mb-4">{benefit.title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-navy rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 blur-[100px]"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-3xl font-black mb-6">이미 수많은 기업이<br />유통퀵화물을 선택했습니다.</h4>
            <p className="text-white/60 mb-10 leading-relaxed">
              개인사업자부터 대기업까지, 월 평균 물동량이 많은 고객사라면<br />
              보다 전문적이고 체계적인 물류 관리가 필요합니다.
            </p>
            <div className="space-y-4">
               {[
                 '월간 이용 내역 리포트 제공',
                 '법인 전용 우선 배차권 부여',
                 '커스터마이징된 요금제 설계',
                 '세금계산서 및 영수증 통합 발행'
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 font-bold">
                   <CheckCircle className="text-blue" size={20} />
                   <span>{text}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue to-accent opacity-50"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue/20 rounded-xl flex items-center justify-center text-blue">
                <ClipboardList size={22} />
              </div>
              <h5 className="text-xl font-black">카톡 상담 준비 가이드</h5>
            </div>
            
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              상담원과 카카오톡 연결 시 아래 내용을<br /> 
              함께 남겨주시면 <span className="text-blue font-bold">더욱 신속한 전담 설계</span>가 가능합니다.
            </p>
            
            <div className="space-y-3 mb-10">
               {[
                 { label: '기업 정보', text: '기업명 / 담당자 성함' },
                 { label: '연락처', text: '직통 번호 또는 휴대폰 번호' },
                 { label: '물동량', text: '월 평균 예상 배송 건수' },
                 { label: '문의 내용', text: '정산 방식, 특수 차량 요청 등' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                   <span className="text-sm font-bold text-white/90">{item.text}</span>
                 </div>
               ))}
            </div>

            <a 
              href="http://pf.kakao.com/_rgEaxj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-5 bg-[#FEE500] text-[#191919] font-black rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={22} fill="#191919" className="group-hover:rotate-12 transition-transform" /> 
              파트너십 상담 시작하기
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-widest">
              <Info size={12} />
              <span>제공하신 정보는 신속한 상담 연결을 위해 사용됩니다</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => (
  <div className="pt-32 pb-20 px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-blue font-bold text-sm tracking-widest uppercase mb-4">Our Services</h2>
        <h3 className="text-5xl font-archivo font-black text-navy tracking-tighter mb-6">
          “우리는 무엇을, 어떻게,<br />안정적으로 운송하는가”
        </h3>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          유통퀵화물은 단순한 운송을 넘어, 고객의 비즈니스 신뢰를 배달합니다.
        </p>
      </div>

      <div className="space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center text-white mb-8">
              <Zap size={32} />
            </div>
            <h4 className="text-3xl font-black text-navy mb-6">① 퀵서비스 (Quick Service)</h4>
            <div className="space-y-4 mb-8">
              {[
                { t: '오토바이 퀵', d: '서류, 소형 물품 등 긴급한 배송에 최적화' },
                { t: '다마스 / 라보 퀵', d: '박스 짐, 중형 가전 등 오토바이로 불가한 물품' },
                { t: '당일 긴급 배송', d: '서울/수도권 당일 배송 및 긴급 물류 대응' },
                { t: '기업 전담 퀵', d: '정기적인 물량이 발생하는 법인 전담팀 운영' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle size={20} className="text-orange-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-navy">{item.t}</p>
                    <p className="text-sm text-slate-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-blue font-black italic">“단순한 퀵이 아닌, 책임지는 배송”</p>
          </div>
          <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="https://images.unsplash.com/photo-1571112674400-333f2740929d?q=80&w=1200" className="w-full h-full object-cover" alt="Quick Service" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200" className="w-full h-full object-cover" alt="Cargo Service" />
          </div>
          <div>
            <div className="w-16 h-16 bg-blue rounded-3xl flex items-center justify-center text-white mb-8">
              <Truck size={32} />
            </div>
            <h4 className="text-3xl font-black text-navy mb-6">② 화물운송 (Freight)</h4>
            <div className="space-y-4 mb-8 text-slate-600">
              <p className="font-medium">• 1톤 / 2.5톤 / 5톤 / 11톤 / 25톤 전 차종 보유</p>
              <p className="font-medium">• 카고, 윙바디, 냉동/냉장, 리프트 등 특수 차량 가능</p>
              <p className="font-medium">• 전국망 네트워크를 활용한 지역 간 장거리 화물</p>
              <p className="font-medium">• 파렛트, 대형 기계, 산업재 전문 운송 프로세스</p>
            </div>
            <div className="p-6 bg-blue/5 border border-blue/10 rounded-2xl">
              <p className="text-sm font-bold text-blue flex items-center gap-2 mb-2">
                <ShieldCheck size={16} /> 파손·분실 최소화
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                적재물 보험 100% 가입은 기본, 전문 고정 기사님 배치로 상하차부터 배송까지 전문적인 노하우로 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EstimateView: React.FC = () => (
  <div className="animate-in fade-in duration-500">
    <FareEstimator />
    <div className="max-w-4xl mx-auto px-6 pb-32 text-center">
       <div className="p-10 bg-blue/5 rounded-[2rem] border border-blue/10">
          <AlertCircle className="mx-auto text-blue mb-4" />
          <h4 className="text-xl font-black text-navy mb-4">정직함이 곧 신뢰입니다.</h4>
          <p className="text-slate-500 leading-relaxed mb-8">
            운송 요금은 거리뿐만 아니라 당일 교통 사정, 상하차 환경, 물품 가액 등 여러 변수가 존재합니다.<br />
            유통퀵화물은 자동 산출기로 보여주기식 견적을 내기보다, <strong>상담원이 직접 검토하여 가장 실질적이고 합리적인 요금</strong>을 안내드립니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a href="http://pf.kakao.com/_rgEaxj" target="_blank" className="p-4 bg-[#FEE500] text-[#191919] font-black rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <MessageCircle size={18} fill="#191919" /> 카톡으로 요금 문의
            </a>
            <a href="tel:080-589-3382" className="p-4 bg-navy text-white font-black rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <PhoneCall size={18} /> 전화 견적 문의
            </a>
          </div>
       </div>
    </div>
  </div>
);

const BookingView: React.FC = () => (
  <div className="pt-32 animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-blue font-bold text-sm tracking-widest uppercase mb-4">Real-time Order</h2>
      <h3 className="text-5xl font-archivo font-black text-navy tracking-tighter mb-8 leading-[1.4]">
        지금 바로 맡겨도 되는 회사인가?<br />
        <span className="text-blue">투명한 프로세스로 증명합니다.</span>
      </h3>
      
      <div className="grid md:grid-cols-4 gap-4 mt-16 mb-12">
        {[
          { s: '01', t: '상담 접수', d: '주문 정보 전달', i: Headphones },
          { s: '02', t: '요금 안내', d: '예상 견적 산출/결제', i: CreditCard },
          { s: '03', t: '기사 배차', d: '근거리 기사 매칭 완료', i: Users2 },
          { s: '04', t: '배송 & 완료', d: '안전 운송 및 완료', i: CheckCircle }
        ].map((step, i) => (
          <div key={i} className="p-8 bg-white border border-border rounded-3xl relative overflow-hidden group hover:border-blue transition-all">
            <step.i className="text-blue/10 absolute -right-4 -bottom-4 group-hover:text-blue/20 transition-colors" size={100} />
            <p className="text-blue font-black text-xs mb-4">STEP {step.s}</p>
            <h5 className="text-xl font-black text-navy mb-2">{step.t}</h5>
            <p className="text-sm text-slate-400 font-bold">{step.d}</p>
          </div>
        ))}
      </div>
    </div>
    <BookingForm />
  </div>
);

const CustomerView: React.FC = () => (
  <div className="pt-32 pb-32 animate-in fade-in duration-500 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-blue font-bold text-sm tracking-widest uppercase mb-4">Customer Support</h2>
        <h3 className="text-5xl font-archivo font-black text-navy tracking-tighter mb-6">
          “문제가 생겨도 책임질 회사인가?”
        </h3>
        <p className="text-xl text-slate-500 font-bold italic">“빠른 배송보다 중요한 건, 약속을 지키는 배송입니다.”</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h4 className="text-2xl font-black text-navy mb-10 flex items-center gap-3">
            <HelpCircle className="text-blue" /> 자주 묻는 질문 (FAQ)
          </h4>
          <div className="space-y-4">
            {[
              { q: '요금은 어떻게 산정되나요?', a: '기본 거리 요금에 차량 톤수, 작업 강도(수작업 여부), 시간대 할증(야간/공휴일)을 종합하여 산정합니다.' },
              { q: '세금계산서 발행이 가능한가요?', a: '네, 법인/개인 사업자 등록증을 전달주시면 익일 내로 전자세금계산서를 신속하게 발행해 드립니다.' },
              { q: '주문 취소 시 비용이 발생하나요?', a: '배차 접수가 시작되면 취소 시점에 따라 취소비가 발생합니다. 이 비용은 100% 기사님께 지급되므로 카드 결제나 현금영수증 처리가 불가능하며, 출발지 도착 이후나 예약건 당일 취소 시에는 운송료 환불이 불가합니다.' },
              { q: '짐이 생각보다 많아 적재가 불가능하거나 초과되면 어떻게 되나요?', a: '주문한 차량의 적재 용량을 초과하거나 접수된 수량보다 물품이 많은 경우, 추가 비용이 발생하거나 배차가 취소될 수 있습니다. 이때 발생하는 취소 비용은 고객님 부담입니다.' },
              { q: '결제 방식과 부가세는 어떻게 되나요?', a: '카드 결제 및 세금계산서 발행 시 안내드린 요금에 부가세가 별도로 발생합니다. 카드 결제 시에는 보안을 위해 주문 시 카드번호와 유효기간을 반드시 전달해 주셔야 합니다.' }
            ].map((faq, i) => (
              <details key={i} className="group border border-border rounded-2xl bg-white overflow-hidden">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none">
                  <span className="font-bold text-navy group-open:text-blue transition-colors">{faq.q}</span>
                  <ChevronRight className="text-slate-300 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 bg-slate-50 border-t border-border">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="p-10 bg-navy rounded-[2.5rem] text-white">
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">회사 소개 (Company Info)</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-blue uppercase mb-1">Company Name</p>
                <p className="font-bold">유통퀵화물</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-blue uppercase mb-1">Business Identity</p>
                <p className="text-sm text-white/70 leading-relaxed font-medium">전국 화물 운송 및 당일 퀵서비스 전문 기업</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-blue uppercase mb-1">Operating Philosophy</p>
                <p className="text-sm text-white/70 leading-relaxed font-medium">고객 신뢰 우선, 정직한 견적, 안전 운송 책임제</p>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <ShieldCheck className="text-blue" size={32} />
                  <div>
                    <p className="text-xs font-bold">화물운송주선허가 정식 등록</p>
                    <p className="text-[10px] text-white/30 italic">제 동-3-2054호</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;