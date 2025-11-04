import { NextResponse } from 'next/server';
import type { Beer } from '@/types/beer';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

// Helper function to mask URLs
function maskUrl(url: string): string {
  if (!url || url.trim() === '') return 'unknown';

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.replace('www.', '');
    const pathParts = urlObj.pathname.split('/').filter(p => p);
    const lastPart = pathParts[pathParts.length - 1] || '';

    // Show domain + last path segment (truncated if too long)
    const display = lastPart.length > 20
      ? `${hostname}/...${lastPart.slice(-15)}`
      : `${hostname}/${lastPart}`;

    return display;
  } catch {
    return 'unknown';
  }
}

// Helper function to normalize ABV values
function normalizeAbv(abv: string | undefined): string {
  if (!abv || abv.trim() === '' || abv === '-') return 'unknown';

  // Extract numeric value from various formats
  const match = abv.match(/(\d+[,.]?\d*)/);
  if (match) {
    return match[1].replace(',', '.');
  }

  return 'unknown';
}

// Helper function to normalize price
function normalizePrice(price: string | undefined): string {
  if (!price || price.trim() === '' || price === '-') return 'unknown';
  return price;
}

interface CSVRow {
  category: string;
  brewery: string;
  beer_name: string;
  style: string;
  abv: string;
  price_euro: string;
  product_url: string;
}

export async function GET() {
  try {
    const csvPath = path.join(process.cwd(), 'app', 'beerlist', 'beers_with_categories.csv');
    const fileContent = fs.readFileSync(csvPath, 'utf-8');

    const parseResult = Papa.parse<CSVRow>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    const beers: Beer[] = parseResult.data.map((row, index) => {
      const url = row.product_url?.trim() || '';

      return {
        id: index + 1,
        category: row.category || 'unknown',
        brewery: row.brewery || 'unknown',
        name: row.beer_name || 'unknown',
        style: row.style || 'unknown',
        abv: normalizeAbv(row.abv),
        price: normalizePrice(row.price_euro),
        url: url || 'unknown',
        urlDisplay: maskUrl(url),
      };
    });

    return NextResponse.json(beers);
  } catch (error) {
    console.error('Error reading beer list:', error);
    return NextResponse.json(
      { error: 'Failed to load beer list' },
      { status: 500 }
    );
  }
}