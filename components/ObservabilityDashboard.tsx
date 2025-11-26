import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Activity } from 'lucide-react';

const performanceData = [
  { time: '09:00', success: 85, latency: 120 },
  { time: '10:00', success: 88, latency: 115 },
  { time: '11:00', success: 82, latency: 140 },
  { time: '12:00', success: 91, latency: 110 },
  { time: '13:00', success: 94, latency: 105 },
  { time: '14:00', success: 93, latency: 108 },
  { time: '15:00', success: 89, latency: 125 },
];

const topicData = [
  { name: 'Pedidos', value: 450 },
  { name: 'Devoluciones', value: 320 },
  { name: 'Info Producto', value: 210 },
  { name: 'Soporte Técnico', value: 150 },
];

const ObservabilityDashboard: React.FC = () => {
  return (
    <section id="observability" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-purple-100 rounded-lg text-sf-purple">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Capa de Observabilidad</h2>
            <p className="text-gray-500">Monitorización en tiempo real del rendimiento de la flota de agentes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 1: Performance Timeline */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Tasa de Éxito de Agentes (Últimas 6h)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00A1E0" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#00A1E0" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Area type="monotone" dataKey="success" stroke="#00A1E0" strokeWidth={3} fillOpacity={1} fill="url(#colorSuccess)" name="Éxito %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Topics Volume */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Volumen por Tema</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topicData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{fill: '#374151', fontSize: 13, fontWeight: 500}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px'}} />
                  <Bar dataKey="value" fill="#8E5CF6" radius={[0, 4, 4, 0]} barSize={32} name="Conversaciones" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservabilityDashboard;