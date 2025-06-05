// app/api/events/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { updateEvent, deleteEvent } from '@/lib/sqlite';
import '@/lib/init-db'; // Import this to ensure database setup runs

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();

    if (!data.title || !data.description || !data.imageSrc || !data.date) {
      return NextResponse.json(
        { error: 'Missing required fields for update: title, description, image URL, and date' },
        { status: 400 }
      );
    }

    const updatedEventData = {
      title: data.title,
      description: data.description,
      org: data.org || null,
      orgLink: data.orgLink || null,
      imageSrc: data.imageSrc,
      date: data.date,
      link: data.link || null,
    };

    await updateEvent(id, updatedEventData);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(`Error updating event with ID ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await deleteEvent(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(`Error deleting event with ID ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}