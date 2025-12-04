export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}