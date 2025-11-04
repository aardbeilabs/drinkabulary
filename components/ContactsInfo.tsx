'use client';

import { Globe, Instagram, Mail } from 'lucide-react';

export default function ContactsInfo() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mt-12 mb-6 text-center">
        Contact Us
      </h2>
      <div className="bg-white dark:bg-stone-800 viking:bg-[#3D2B1F] rounded-lg shadow-lg viking:shadow-[#8B1A1A]/30 p-8 transition-colors viking:border viking:border-[#5C4A35]">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-700 viking:bg-[#2B1F17] rounded-lg hover:bg-stone-100 dark:hover:bg-stone-600 viking:hover:bg-[#3D2B1F] transition">
            <Globe className="w-6 h-6 text-stone-700 dark:text-stone-300 viking:text-[#CD7F32] mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">Website</h3>
              <a
                href="https://www.valhalla-beer.cz/"
                className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.valhalla-beer.cz/
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-700 viking:bg-[#2B1F17] rounded-lg hover:bg-stone-100 dark:hover:bg-stone-600 viking:hover:bg-[#3D2B1F] transition">
            <Instagram className="w-6 h-6 text-stone-700 dark:text-stone-300 viking:text-[#CD7F32] mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">Instagram</h3>
              <a
                href="https://www.instagram.com/valhalla_beer_club/"
                className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.instagram.com/valhalla_beer_club/
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-700 viking:bg-[#2B1F17] rounded-lg hover:bg-stone-100 dark:hover:bg-stone-600 viking:hover:bg-[#3D2B1F] transition">
            <Mail className="w-6 h-6 text-stone-700 dark:text-stone-300 viking:text-[#CD7F32] mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">Email</h3>
              <a
                href="mailto:lucerna@valhalla-beer.cz"
                className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] hover:underline"
              >
                lucerna@valhalla-beer.cz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-700 viking:border-[#5C4A35]">
          <h3 className="font-semibold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-3">Visit Us</h3>
          <p className="text-stone-600 dark:text-stone-300 viking:text-[#D4BFA0] mb-2">Vodičkova 36, 110 00 Nové Město</p>
          <a
              href="https://maps.app.goo.gl/KaPWLkCcaYECAy3E8"
              className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
