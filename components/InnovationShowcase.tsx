import React, { useState } from 'react';
import { Bot, Code2, FileSearch, Mic, Activity } from 'lucide-react';
import { Innovation } from '../types';

const innovations: Innovation[] = [
  {
    id: 'builder',
    title: 'Hybrid Agent Builder',
    subtitle: 'Lo mejor de dos mundos',
    description: 'Combina instrucciones en lenguaje natural (LLM) con lógica determinista y scripts para procesos críticos.',
    details: [
      'Resuelve la falta de determinismo de los LLMs.',
      'Permite flujos tipo "Si pasa A, haz B".',
      'Incluye asistencia de IA para construir agentes.',
    ],
    availability: 'Beta: 8 de Diciembre'
  },
  {
    id: 'code',
    title: 'Einstein for Code',
    subtitle: 'Desarrollo en Lenguaje Natural',
    description: 'IDE integrado en la plataforma que genera código a partir de conversaciones, conociendo el contexto de tu org.',
    details: [
      'Sin instalación, corre en el navegador.',
      'Incluido en todas las ediciones.',
      '50 prompts GPT-4/día, luego ilimitado con modelo Salesforce.',
    ],
    availability: 'Disponible (GA)'
  },
  {
    id: 'context',
    title: 'Deep Context Engineering',
    subtitle: 'RAG Avanzado Multimodal',
    description: 'Interpreta documentos complejos con tablas, imágenes y diagramas, entendiendo la semántica visual.',
    details: [
      'Playground para definir planes de interpretación.',
      'Proceso iterativo de prueba y refinamiento.',
      'Mapeo exacto a la fuente de la respuesta.',
    ],
    availability: 'Disponible (GA)'
  },
  {
    id: 'voice',
    title: 'Einstein for Voice',
    subtitle: 'Revolución en Contact Center',
    description: 'Agentes de voz con latencia ultra-baja y capacidad de interrupción.',
    details: [
      'Stack: Deepgram (STT) + Salesforce Planner + ElevenLabs (TTS).',
      'Gestión de picos de llamadas sin aumentar headcount.',
      'Español disponible en Febrero.',
    ],
    availability: 'GA (USA)'
  },
  {
    id: 'obs',
    title: 'Observabilidad',
    subtitle: 'Control a Escala',
    description: 'Dashboard para monitorizar la calidad, temas y rendimiento de miles de agentes simultáneos.',
    details: [
      'Análisis agregado en tiempo real.',
      'Detección de tendencias sin revisar chats individuales.',
      'Métricas de resolución y satisfacción.',
    ],
    availability: 'Disponible (GA)'
  }
];

const InnovationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('builder');
  const activeInnovation = innovations.find(i => i.id === activeTab) || innovations[0];

  const getIcon = (id: string) => {
    switch(id) {
      case 'builder': return Bot;
      case 'code': return Code2;
      case 'context': return FileSearch;
      case 'voice': return Mic;
      case 'obs': return Activity;
      default: return Bot;
    }
  };

  return (
    <section id="capabilities" className="py-16 bg-sf-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuevas Capacidades de Agent Force</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Tabs */}
          <div className="w-full lg:w-1/3 space-y-2">
            {innovations.map((item) => {
              const Icon = getIcon(item.id);
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center p-4 rounded-xl transition-all duration-200 text-left border ${
                    isActive 
                      ? 'bg-white border-sf-blue shadow-md text-sf-navy' 
                      : 'bg-transparent border-transparent hover:bg-white/50 text-gray-600'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${isActive ? 'bg-blue-50' : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-sf-blue' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <span className="block font-bold">{item.title}</span>
                    <span className="text-xs opacity-70">{item.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                {React.createElement(getIcon(activeInnovation.id), { className: "w-64 h-64 text-sf-blue" })}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{activeInnovation.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide border ${
                    activeInnovation.availability.includes('Beta') ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-green-50 text-green-600 border-green-200'
                  }`}>
                    {activeInnovation.availability}
                  </span>
                </div>
                <h4 className="text-lg text-sf-blue font-medium mb-6">{activeInnovation.subtitle}</h4>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeInnovation.description}
                </p>

                <div className="bg-sf-cloud/50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sf-purple"></span>
                    Características Clave
                  </h5>
                  <ul className="space-y-3">
                    {activeInnovation.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="mr-3 text-sf-blue">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;