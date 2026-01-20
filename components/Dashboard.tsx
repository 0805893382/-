
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Shield, Users, Radio } from 'lucide-react';

const data = [
  { name: '00', volume: 120 },
  { name: '04', volume: 150 },
  { name: '08', volume: 420 },
  { name: '12', volume: 550 },
  { name: '16', volume: 480 },
  { name: '20', volume: 700 },
  { name: '24', volume: 300 },
];

const Dashboard: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 rounded-full mb-4">
            <Radio size={14} className="text-blue animate-pulse" />
            <span className="text-[10px] font-bold text-navy uppercase tracking-widest">Live Network Monitor</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-archivo font-black text-navy mb-4 tracking-tighter">실시간 스마트 관제 시스템</h2>
          <p className="text-slate-500">투명한 데이터 공개를 통해 서비스 품질을 실시간으로 증명합니다.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
           {[
             { label: '배차 성공률', value: '99.2%', icon: Activity, color: 'text-blue' },
             { label: '전담 기사수', value: '12,481', icon: Users, color: 'text-indigo-500' },
             { label: '보장 한도', value: '10억+', icon: Shield, color: 'text-green-500' },
             { label: '실시간 가동률', value: '86.4%', icon: Radio, color: 'text-rose-500' },
           ].map((item, i) => (
             <div key={i} className="bg-white border border-border p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all">
               <item.icon className={`${item.color} mb-6`} size={32} />
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
               <p className="text-3xl font-archivo font-black text-navy">{item.value}</p>
             </div>
           ))}
        </div>

        <div className="bg-white border border-border p-10 rounded-[2.5rem] shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-lg font-black text-navy">전국 물류 운송량 추이</h3>
              <p className="text-xs text-slate-400 font-bold uppercase mt-1">Daily Shipping Flow Volume</p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span className="w-3 h-3 rounded-full bg-blue"></span> 전국 총계
              </span>
            </div>
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0052FF" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#0052FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0A1128', border: 'none', borderRadius: '16px', color: '#fff'}}
                  itemStyle={{color: '#38BDF8', fontWeight: 'bold'}}
                />
                <Area type="monotone" dataKey="volume" stroke="#0052FF" strokeWidth={4} fillOpacity={1} fill="url(#colorVolume)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
