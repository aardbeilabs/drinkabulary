import type { Beer } from '@/types/beer';

interface BeerCardProps {
  beer: Beer;
}

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className="bg-white dark:bg-stone-800 viking:bg-[#3D2B1F] rounded-lg shadow-lg viking:shadow-[#8B1A1A]/30 p-4 sm:p-6 hover:shadow-xl viking:hover:shadow-[#CD7F32]/40 transition-all viking:border viking:border-[#5C4A35]">
      <h4 className="text-lg sm:text-xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">
        {beer.name}
      </h4>
      <div className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] mb-3">
        <span className="font-semibold">{beer.brewery}</span>
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center mb-3">
        <span className="px-2 sm:px-3 py-1 bg-amber-100 dark:bg-amber-900 viking:bg-[#8B1A1A] text-amber-800 dark:text-amber-200 viking:text-[#F5E6D3] rounded-full text-xs sm:text-sm">
          {beer.style}
        </span>
        <span className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] font-semibold">
          {beer.abv !== 'unknown' ? `${beer.abv}% ABV` : 'ABV unknown'}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-500 viking:text-[#DAA520]">
          {beer.price !== 'unknown' ? `${beer.price}€` : 'Price unknown'}
        </div>
        {beer.url !== 'unknown' && (
          <a
            href={beer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 dark:text-stone-400 viking:text-[#B8A588] hover:underline break-all"
          >
            {beer.urlDisplay}
          </a>
        )}
      </div>
    </div>
  );
}
