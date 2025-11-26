export interface Pillar {
  id: string;
  title: string;
  icon: any;
  description: string;
  example?: string;
}

export interface Innovation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  availability: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum DemoState {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING', // Simulated
  PROCESSING = 'PROCESSING',
  SPEAKING = 'SPEAKING'
}
