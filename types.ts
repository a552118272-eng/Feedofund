import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface StatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface TokenConversion {
  id: string;
  token: string;
  amount: number;
  mealEquivalent: number;
  timestamp: Date;
}

export interface CommunityPost {
  id: string;
  title: string;
  date: string;
  type: 'image' | 'video';
  url: string;
  description?: string;
}