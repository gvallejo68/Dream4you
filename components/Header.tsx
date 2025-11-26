import React from 'react';
import { Cloud, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-sf-blue fill-current" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Agent<span className="text-sf-blue italic">Force</span>
              <span className="text-xs ml-2 bg-sf-cloud px-2 py-1 rounded-full text-gray-500 font-normal">Synthesis Report</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
            <a href="#vision" className="hover:text-sf-blue transition-colors">Visión</a>
            <a href="#capabilities" className="hover:text-sf-blue transition-colors">Capacidades</a>
            <a href="#demo" className="hover:text-sf-blue transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-sf-purple" />
              Demo Voz
            </a>
            <a href="#observability" className="hover:text-sf-blue transition-colors">Observabilidad</a>
          </div>
          <div>
            <span className="text-xs font-mono text-gray-400">Dreamforce 2024</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;