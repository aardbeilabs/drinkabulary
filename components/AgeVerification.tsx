'use client';

import Image from 'next/image';

interface AgeVerificationProps {
  onConfirm: () => void;
}

export default function AgeVerification({ onConfirm }: AgeVerificationProps) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex items-center justify-center p-4 transition-colors">
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-2xl p-8 max-w-md w-full text-center transition-colors">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48">
            <Image
              src="/logo/valhalla.jpg"
              alt="Valhalla Beer Club Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
          Valhalla Beer Club
        </h1>

        <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-300 mb-4">
          Age Verification Required
        </h2>

        <p className="text-stone-600 dark:text-stone-400 mb-8">
          You must be 18 years or older to enter this website. Please confirm your age to continue.
        </p>

        <button
          onClick={onConfirm}
          className="w-full px-8 py-4 bg-stone-800 dark:bg-stone-700 text-white text-lg font-semibold rounded-lg hover:bg-stone-700 dark:hover:bg-stone-600 transition shadow-lg hover:shadow-xl"
        >
          I am 18 or older
        </button>

        <p className="text-xs text-stone-500 dark:text-stone-500 mt-6">
          By entering this site, you agree that you are of legal drinking age in your country.
        </p>
      </div>
    </div>
  );
}
