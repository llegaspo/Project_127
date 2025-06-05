// app/api/events/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getEvents, addEvent } from '@/lib/sqlite';
import '@/lib/init-db'; // Import this to ensure database setup runs

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to retrieve events' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.title || !data.description || !data.imageSrc || !data.date) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, image URL, and date' },
        { status: 400 }
      );
    }

    const newEvent = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      org: data.org || null,
      orgLink: data.orgLink || null,
      imageSrc: data.imageSrc,
      date: data.date,
      link: data.link || null,
    };

    await addEvent(newEvent);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Error adding event:', error);
    return NextResponse.json({ error: 'Failed to add event' }, { status: 500 });
  }
}