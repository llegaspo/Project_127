'use client';

import React from 'react';
import Menu from '@/components/menu/menu-texts';


interface EventCardProps {
  imageSrc: string;
  date: string;
  org: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageSrc, date, org, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={imageSrc} alt="Event" className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm text-gray-500 mb-1">
          {date} | <span className="text-blue-600">{org}</span>
        </h3>
        <h2 className="text-lg font-bold text-purple-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{description}</p>
        <button className="mt-3 text-xs text-pink-600 font-semibold hover:underline self-start">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default function Events() {
  const events = [
    {
      imageSrc: "/scifed.jpg",
      date: "May 15, 2025",
      org: "University of the Philippines Cebu",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque."
    },
    {
      imageSrc: "/set.jpg",
      date: "May 13, 2025",
      org: "UP Cebu Sciences Federation",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque."
    },
    {
      imageSrc: "/kapehan.jpg",
      date: "May 10, 2025",
      org: "UP Computer Science Guild",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque."
    }
  ];

  return (
    <Menu activeLink="events" openModal={() => {}}>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">Events and Announcements</h1>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </Menu>

  );
}