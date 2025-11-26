import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Bot, User, Volume2, RefreshCw } from 'lucide-react';
import { ChatMessage, DemoState } from '../types';
import { initPizzaDemo, sendPizzaMessage } from '../services/geminiService';

const AstroPizzaDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [state, setState] = useState<DemoState>(DemoState.IDLE);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleStart = async () => {
    setState(DemoState.PROCESSING);
    setInitialized(true);
    const greeting = await initPizzaDemo();
    setMessages([{ role: 'model', text: greeting, timestamp: new Date() }]);
    setState(DemoState.IDLE);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setState(DemoState.PROCESSING);

    const responseText = await sendPizzaMessage(userMsg.text);
    
    setMessages(prev => [...prev, {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    }]);
    setState(DemoState.IDLE);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="demo" className="py-16 bg-gradient-to-br from-indigo-900 to-sf-navy text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 mb-4">
            <Mic className="w-4 h-4 text-green-400" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">"Astro Pizza" Voice Agent</h2>
          <p className="text-indigo-200 max-w-xl mx-auto">
            Simulación de la experiencia mostrada en Dreamforce. Este agente recuerda contexto, acepta correcciones en tiempo real y gestiona transacciones.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {!initialized ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Iniciar Simulación</h3>
                <p className="text-indigo-200 mb-6">Haz clic para conectar con el agente de pizzería.</p>
                <button 
                  onClick={handleStart}
                  className="bg-white text-sf-navy hover:bg-indigo-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
                >
                  Llamar a Astro Pizza
                </button>
              </div>
            ) : (
              <>
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'model' ? 'bg-sf-blue' : 'bg-purple-600'
                    }`}>
                      {msg.role === 'model' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                    </div>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      msg.role === 'model' 
                        ? 'bg-white/90 text-gray-800 rounded-tl-none' 
                        : 'bg-indigo-600 text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {state === DemoState.PROCESSING && (
                  <div className="flex items-center gap-2 text-indigo-300 text-sm ml-12">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Astro Pizza está pensando...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {initialized && (
            <div className="p-4 bg-black/20 border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje (Simulando voz)..."
                  className="w-full bg-white/10 border border-white/20 rounded-full pl-6 pr-14 py-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-sf-blue"
                  disabled={state === DemoState.PROCESSING}
                />
                <button 
                  onClick={handleSend}
                  disabled={state === DemoState.PROCESSING || !input.trim()}
                  className="absolute right-2 p-2 bg-sf-blue rounded-full text-white hover:bg-sf-blue/80 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-center text-indigo-300 flex justify-center gap-4">
                <span>Tip: "Quiero una pepperoni"</span>
                <span>Tip: "No, mejor carbonara"</span>
                <span>Tip: "¿Qué oferta hay hoy?"</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AstroPizzaDemo;