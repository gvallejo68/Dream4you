import React from 'react';
import { User, Headset, Briefcase, Settings } from 'lucide-react';
import { Pillar } from '../types';

const pillars: Pillar[] = [
  {
    id: 'customer',
    title: 'Cliente',
    icon: User,
    description: 'El pilar tradicional. Gestión 360º de la relación y experiencia del cliente final.',
  },
  {
    id: 'agent',
    title: 'Agente',
    icon: Headset,
    description: 'Potenciación de humanos en Contact Center con IA para sugerencias y automatización.',
  },
  {
    id: 'employee',
    title: 'Empleado',
    icon: Briefcase,
    description: 'Productividad interna. Agentes para HR, IT y operaciones internas.',
    example: 'Caso Iberia: Agente "Sofía" para tripulación.'
  },
  {
    id: 'operations',
    title: 'Operaciones',
    icon: Settings,
    description: 'Expansión al back-end. ITSM, gestión de activos y Supply Chain Management.',
  }
];

const StrategicPillars: React.FC = () => {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Visión Estratégica: 4 Pilares</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            La nueva visión "a cuatro bandas" trasciende el CRM tradicional para impactar en toda la organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="group relative p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sf-blue/30">
              <div className="w-12 h-12 bg-sf-cloud rounded-xl flex items-center justify-center text-sf-navy mb-4 group-hover:bg-sf-blue group-hover:text-white transition-colors">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              {pillar.example && (
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-sf-purple bg-purple-50 px-2 py-1 rounded">Ejemplo:</span>
                  <p className="text-xs text-gray-500 mt-1 italic">{pillar.example}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;