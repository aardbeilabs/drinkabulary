'use client';

import { useState, useEffect } from 'react';
import type { Beer } from '@/types/beer';

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
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mt-12 mb-8 text-center">
        Our Beer Selection
      </h2>

      {Object.entries(beersByCategory).map(([category, categoryBeers]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold text-stone-700 dark:text-stone-200 viking:text-[#E5D5B7] mb-6 border-b-2 border-stone-300 dark:border-stone-600 viking:border-[#5C4A35] pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryBeers.map((beer) => (
              <div
                key={beer.id}
                className="bg-white dark:bg-stone-800 viking:bg-[#3D2B1F] rounded-lg shadow-lg viking:shadow-[#8B1A1A]/30 p-6 hover:shadow-xl viking:hover:shadow-[#CD7F32]/40 transition-all viking:border viking:border-[#5C4A35]"
              >
                <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">{beer.name}</h4>
                <div className="text-sm text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] mb-3">
                  <span className="font-semibold">{beer.brewery}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 viking:bg-[#8B1A1A] text-amber-800 dark:text-amber-200 viking:text-[#F5E6D3] rounded-full text-sm">
                    {beer.style}
                  </span>
                  <span className="text-sm text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] font-semibold">
                    {beer.abv !== 'unknown' ? `${beer.abv}% ABV` : 'ABV unknown'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-amber-700 dark:text-amber-500 viking:text-[#DAA520]">
                    {beer.price !== 'unknown' ? `${beer.price}€` : 'Price unknown'}
                  </div>
                  {beer.url !== 'unknown' && (
                    <a
                      href={beer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-500 dark:text-stone-400 viking:text-[#B8A588] hover:underline"
                    >
                      {beer.urlDisplay}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
