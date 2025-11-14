'use client';

import { useState, useEffect } from 'react';
import type { Beer } from '@/types/beer';
import BeerCard from './BeerCard';

export default function BeerMenu() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/beers')
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0]">Loading menu...</div>
      </div>
    );
  }

  // Group beers by category
  const beersByCategory = beers.reduce((acc, beer) => {
    if (!acc[beer.category]) {
      acc[beer.category] = [];
    }
    acc[beer.category].push(beer);
    return acc;
  }, {} as Record<string, Beer[]>);

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mt-6 sm:mt-12 mb-6 sm:mb-8 text-center">
        Our Beer Selection
      </h2>

      {Object.entries(beersByCategory).map(([category, categoryBeers]) => (
        <div key={category} className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-700 dark:text-stone-200 viking:text-[#E5D5B7] mb-4 sm:mb-6 border-b-2 border-stone-300 dark:border-stone-600 viking:border-[#5C4A35] pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {categoryBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
