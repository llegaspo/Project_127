'use client';

import React, { useState } from 'react';
import Menu from '@/components/menu/menu-texts';

interface EventCardProps {
  imageSrc: string;
  date: string;
  org: string;
  title: string;
  description: string;
  onReadMore?: (event: { imageSrc: string; title: string; description: string; org: string; date: string }) => void;
  onImageClick?: (imageSrc: string) => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  date,
  org,
  title,
  description,
  onReadMore,
  onImageClick
}) => {
  const previewLength = 100;
  const formattedDate = formatDate(date);
  const truncatedDescription = description.length > previewLength
    ? `${description.substring(0, previewLength)}...`
    : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={imageSrc}
        alt="Event"
        className="w-full h-40 object-cover cursor-pointer"
        onClick={() => onImageClick?.(imageSrc)}
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm text-gray-500 mb-1">
          {formattedDate} | <span className="text-blue-600">{org}</span>
        </h3>
        <h2 className="text-lg font-bold text-purple-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{truncatedDescription}</p>
        {description.length > previewLength && (
          <button
            onClick={() => onReadMore?.({
              imageSrc,
              title,
              description,
              org,
              date: formattedDate
            })}
            className="mt-3 text-xs text-pink-600 font-semibold hover:underline self-start"
          >
            READ MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default function Events() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [fullScreenEvent, setFullScreenEvent] = useState<null | EventCardProps>(null);
  const [events, setEvents] = useState<EventCardProps[]>([
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
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    org: '',
    imageSrc: '',
    date: ''
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.description || !newEvent.imageSrc || !newEvent.date) return;

    setEvents(prev => [...prev, {
      imageSrc: newEvent.imageSrc,
      date: newEvent.date,
      org: newEvent.org,
      title: newEvent.title,
      description: newEvent.description,
    }]);
    setNewEvent({ title: '', description: '', org: '', imageSrc: '', date: '' });
    setShowModal(false);
  };

  const filteredAndSortedEvents = [...events]
    .filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formatDate(event.date).toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <Menu activeLink="events" openModal={() => { }}>
      <div className="p-6 relative">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">Events and Announcements</h1>

        <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              id="sortOrder"
              className="border border-gray-300 rounded p-2 text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedEvents.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              onImageClick={(src) => setPreviewImage(src)}
              onReadMore={(event) => setFullScreenEvent(event)}
            />
          ))}
        </div>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className='fixed bottom-6 right-6 bg-red-700 hover:bg-red-600 text-white p-4 rounded-full shadow-lg text-3xl'
        >
          +
        </button>
        
        {/* Add Event Modal */}
        {showModal &&(
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
              <h2 className="text-xl font-bold text-red-800">Add New Event</h2>
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border rounded"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full p-2 border rounded"
                value={newEvent.org}
                onChange={(e) => setNewEvent({ ...newEvent, org: e.target.value })}
              />
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded"
                rows={3}
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="w-full p-2 border rounded"
                value={newEvent.imageSrc}
                onChange={(e) => setNewEvent({ ...newEvent, imageSrc: e.target.value })}
              />

              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600"
                  onClick={handleAddEvent}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setPreviewImage(null)}
          >
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Full Screen Event Modal */}
        {fullScreenEvent && (
          <div className="fixed inset-0 bg-white flex flex-col items-center z-50 overflow-y-auto">
            {/* Close button */}
            <button
              className="fixed top-4 right-4 z-50 text-gray-800 text-2xl bg-gray-200 bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition-all"
              onClick={() => setFullScreenEvent(null)}
            >
              &times;
            </button>

            <div className="w-full max-w-6xl my-8 bg-white">
              {/* Clickable image container */}
              <div 
                className="relative w-full h-[70vh] bg-white flex items-center justify-center p-4 cursor-pointer"
                onClick={() => {
                  // Toggle fullscreen
                  const elem = document.getElementById('fullscreen-image');
                  if (!document.fullscreenElement) {
                    elem?.requestFullscreen().catch(err => {
                      console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
                  } else {
                    document.exitFullscreen();
                  }
                }}
              >
                <img
                  id="fullscreen-image"
                  src={fullScreenEvent.imageSrc}
                  alt={fullScreenEvent.title}
                  className="max-w-full max-h-full object-contain"
                />
                {/* Fullscreen indicator */}
              </div>

              {/* Content section */}
              <div className="bg-white p-6 w-full border-t border-gray-200">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">
                  {fullScreenEvent.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {fullScreenEvent.date} | <span className="text-blue-600 font-medium">{fullScreenEvent.org}</span>
                </p>
                <p className="text-gray-700 whitespace-pre-line">
                  {fullScreenEvent.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Menu>
  );
}