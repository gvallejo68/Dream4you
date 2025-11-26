import React from 'react';
import { Users, MonitorPlay, Calendar, MapPin } from 'lucide-react';

const StatCard: React.FC<{ icon: any; label: string; value: string; sub?: string }> = ({ icon: Icon, label, value, sub }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
    <div className="p-3 bg-sf-cloud rounded-lg text-sf-blue">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-green-600 font-medium">{sub}</p>}
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sf-cloud pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-sf-blue text-sm font-medium mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-sf-blue animate-pulse"></span>
            Informe de Síntesis
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            La Evolución hacia un <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sf-blue to-sf-purple">
              Ecosistema de Agentes
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Salesforce redefine su plataforma con "Agent Force". Desde el modelo puramente conversacional hacia uno transaccional y operativo, integrando humanos y agentes en 4 pilares estratégicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} label="Asistentes Físicos" value="56k" sub="Recuperación post-pandemia" />
          <StatCard icon={MonitorPlay} label="Salesforce+" value="140k" sub="Visualizaciones en directo" />
          <StatCard icon={MapPin} label="Ubicación" value="San Francisco" />
          <StatCard icon={Calendar} label="Próxima Edición" value="Sep 15-17" />
        </div>
      </div>
    </section>
  );
};

export default Hero;