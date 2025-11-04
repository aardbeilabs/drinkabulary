'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Sun, Moon, Axe } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import type { View } from '@/types/beer';

interface HeaderProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Header({ language, onLanguageChange, currentView, onViewChange }: HeaderProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const languageRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-5 h-5" />;
    if (theme === 'dark') return <Moon className="w-5 h-5" />;
    return <Axe className="w-5 h-5" />; // Viking theme
  };

  const getThemeLabel = () => {
    if (theme === 'light') return 'Light';
    if (theme === 'dark') return 'Dark';
    return 'Viking';
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-800 viking:bg-[#2B1F17] text-stone-50 viking:text-[#F5E6D3] px-4 py-3 shadow-lg viking:shadow-[#5C4A35]/50">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/logo/valhalla.jpg"
              alt="Valhalla Beer Club Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-xl font-bold">Valhalla Beer Club</h1>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => onViewChange('chat')}
            className="hover:underline transition"
          >
            Chat
          </button>

          <button
            onClick={() => onViewChange('menu')}
            className="hover:underline transition"
          >
            Menu
          </button>

          <button
            onClick={() => onViewChange('team')}
            className="hover:underline transition"
          >
            Team
          </button>

          <button
            onClick={() => onViewChange('contacts')}
            className="hover:underline transition"
          >
            Contacts
          </button>
        </div>

        {/* Right: Settings */}
        <div className="flex items-center justify-end gap-4">
          {/* Theme Selector */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex items-center gap-1 hover:underline transition"
              aria-label="Select theme"
            >
              {getThemeIcon()}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isThemeOpen && (
              <div className="absolute right-0 mt-1 bg-stone-700 rounded shadow-lg overflow-hidden z-10 min-w-[120px]">
                <button
                  onClick={() => {
                    setTheme('light');
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-stone-600 transition"
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => {
                    setTheme('dark');
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-stone-600 transition"
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
                <button
                  onClick={() => {
                    setTheme('viking');
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-stone-600 transition"
                >
                  <Axe className="w-4 h-4" />
                  Viking
                </button>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 hover:underline transition"
            >
              {language}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-1 bg-stone-700 rounded shadow-lg overflow-hidden z-10">
                <button
                  onClick={() => {
                    onLanguageChange('EN');
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-stone-600 transition"
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('CS');
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-stone-600 transition"
                >
                  CS
                </button>
              </div>
            )}
          </div>

          <button className="hover:underline transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

