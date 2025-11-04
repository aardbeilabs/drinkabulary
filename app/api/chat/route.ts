import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Beer } from '@/types/beer';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { message, beers } = body as { message: string; beers: Beer[] };


    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    const promptPath = path.join(process.cwd(), 'app', 'prompts', 'system-prompt.md');
    const systemPrompt = fs.readFileSync(promptPath, 'utf-8').trim();

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }],
        },
        {
          role: 'model',
          parts: [{ text: 'Got it, I will follow the instructions in the system prompt.' }],
        },
      ],
    });

    // Format beer catalog for context
    const beerCatalog = beers.map(beer =>
      `${beer.name} by ${beer.brewery} - ${beer.style}, ABV: ${beer.abv}, Price: ${beer.price}€, Category: ${beer.category}`
    ).join('\n');

    const result = await chat.sendMessage(
      `Available beers:\n${beerCatalog}\n\nUser message: ${message}`
    );

    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
