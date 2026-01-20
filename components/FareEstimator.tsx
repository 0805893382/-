
import React from 'react';
import { PhoneCall, Clock, CheckCircle, Info, ShieldCheck, Map, Truck, Headphones, MessageCircle } from 'lucide-react';

const FareEstimator: React.FC = () => {
  return (
    <section id="fare-estimator" className="py-32 px-6 bg-white relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue/10 rounded-full mb-6 text-blue">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Honest Pricing Policy</span>
            </div>
            <h2 className="font-archivo text-4xl md:text-6xl text-navy font-black leading-tight tracking-tighter mb-8">
              투명하고 정직한<br />
              <span className="text-blue">견적 안내</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              운송 요금은 거리, 차량, 물량, 시간대에 따라 달라집니다.<br />
              유통퀵화물은 보여주기식 자동 견적보다 <strong>전문 상담원의 1:1 검토</strong>를 통해 가장 합리적인 실하차 가격을 약속드립니다.
            </p>
            
            <div className="p-8 bg-slate-50 border border-border rounded-3xl mb-10">
              <h4 className="font-black text-navy mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-blue" /> 상담 시 준비하면 빠른 정보
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  '출발지 / 도착지 상세 주소', 
                  '물품의 종류, 수량 및 크기', 
                  '희망 차량(오토바이 ~ 25톤)', 
                  '상하차 방법 (지게차, 수작업 등)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="http://pf.kakao.com/_rgEaxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#FEE500] text-[#191919] font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <MessageCircle size={20} fill="#191919" /> 카톡으로 요금 문의
              </a>
              <a 
                href="tel:080-589-3382"
                className="px-8 py-5 bg-navy text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 hover:-translate-y-1 transition-all"
              >
                <PhoneCall size={20} /> 전화 견적 문의
              </a>
            </div>
            <p className="mt-6 text-center sm:text-left text-xs text-slate-400 font-bold uppercase tracking-widest">※ 상담 신청 시 1~3분 내로 담당자가 배정됩니다.</p>
          </div>

          <div className="bg-navy rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden group shadow-2xl shadow-blue/10 border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-white tracking-tight">24시 통합 배차 데스크</h4>
                  <p className="text-blue text-xs font-bold uppercase tracking-widest">Central Dispatch Center</p>
                </div>
                <div className="w-12 h-12 bg-blue/20 rounded-2xl flex items-center justify-center text-blue">
                  <Headphones size={24} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <Clock className="text-blue mb-3" size={20} />
                    <p className="text-white font-black text-lg">365일 24시</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase mt-1">Full-Time Support</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <Map className="text-blue mb-3" size={20} />
                    <p className="text-white font-black text-lg">전국 전지역</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase mt-1">Nationwide Coverage</p>
                  </div>
                </div>

                <div className="p-8 bg-blue/10 border border-blue/20 rounded-3xl">
                  <h5 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue" /> 유통퀵화물 안심 보장제
                  </h5>
                  <ul className="space-y-3">
                    {[
                      '적재물 배상 책임 보험 100% 가입',
                      '전담 배차 매니저 1:1 책임 관리',
                      '기업 전담 월 정산 및 후불 결제 지원',
                      '실시간 GPS 차량 위치 관제 시스템'
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-white/70 leading-relaxed font-medium">
                        <CheckCircle size={14} className="text-blue shrink-0 mt-0.5" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                   <div className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center text-blue">
                     <Truck size={20} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">전 차종 상시 대기 중</p>
                     <p className="text-white/30 text-[10px]">오토바이, 다마스, 1톤 ~ 25톤, 특수차량</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareEstimator;
