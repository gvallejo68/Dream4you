import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StrategicPillars from './components/StrategicPillars';
import InnovationShowcase from './components/InnovationShowcase';
import ObservabilityDashboard from './components/ObservabilityDashboard';
import AstroPizzaDemo from './components/AstroPizzaDemo';
import ReportAssistant from './components/ReportAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StrategicPillars />
        <InnovationShowcase />
        <AstroPizzaDemo />
        <ObservabilityDashboard />
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Salesforce Agent Force Synthesis Report.</p>
          <p className="mt-2">Created for Dreamforce Review. Powered by Google Gemini.</p>
        </div>
      </footer>

      <ReportAssistant />
    </div>
  );
};

export default App;