export interface Beer {
  id: number;
  category: string;
  brewery: string;
  name: string;
  style: string;
  abv: string; // Can be "unknown" if missing
  price: string; // Can be "unknown" if missing
  url: string; // Can be "unknown" if missing
  urlDisplay?: string; // Masked/shortened URL for display
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export type View = 'chat' | 'menu' | 'team' | 'contacts';