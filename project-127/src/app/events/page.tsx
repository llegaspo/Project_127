'use client';

import React, { useState } from 'react';
import Menu from '@/components/menu/menu-texts';
import { v4 as uuidv4 } from 'uuid';

interface EventCardProps {
  imageSrc: string;
  date: string;
  org: string;
  orgLink?: string;
  title: string;
  description: string;
  link: string;
  onReadMore?: (event: { 
    imageSrc: string; 
    title: string; 
    description: string; 
    org: string; 
    date: string;
    link: string;
    orgLink?: string;
  }) => void;
  onImageClick?: (imageSrc: string) => void;
  onRemove?: () => void;
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
  orgLink,
  title,
  description,
  link,
  onReadMore,
  onImageClick,
  onRemove
}) => {
  const previewLength = 100;
  const formattedDate = formatDate(date);
  const truncatedDescription = description.length > previewLength
    ? `${description.substring(0, previewLength)}...`
    : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 bg-white text-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs z-10 hover:bg-gray-100 hover:text-red-500 border border-gray-300"
          title="Remove event"
        >
          ×
        </button>
      )}
      <img
        src={imageSrc}
        alt="Event"
        className="w-full h-40 object-cover cursor-pointer"
        onClick={() => onImageClick?.(imageSrc)}
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm text-gray-500 mb-1">
          {formattedDate} | {orgLink ? (
            <a href={orgLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {org}
            </a>
          ) : (
            <span className="text-blue-600">{org}</span>
          )}
        </h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-purple-800 mb-2 hover:underline"
          >
            {title}
          </a>
        ) : (
          <h2 className="text-lg font-bold text-purple-800 mb-2">{title}</h2>
        )}
        <p className="text-sm text-gray-700 flex-grow">{truncatedDescription}</p>
        {description.length > previewLength && (
          <button
            onClick={() => onReadMore?.({
              imageSrc,
              title,
              description,
              org,
              date: formattedDate,
              link
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
      orgLink: "https://www.facebook.com/upcebuofficial",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
      link: "https://facebook.com/example-post"
    },
    {
      imageSrc: "/set.jpg",
      date: "May 13, 2025",
      org: "UP Cebu Sciences Federation",
      orgLink: "https://www.facebook.com/sciencesfed",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
      link: "https://facebook.com/example-post"
    },
    {
      imageSrc: "/kapehan.jpg",
      date: "May 10, 2025",
      org: "UP Computer Science Guild",
      orgLink: "https://www.facebook.com/UPCSG",
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.",
      link: "https://facebook.com/example-post"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    org: '',
    orgLink: '',
    imageSrc: '',
    date: '',
    link: ''
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.description || !newEvent.imageSrc || !newEvent.date) return;

    setEvents(prev => [...prev, {
      imageSrc: newEvent.imageSrc,
      date: newEvent.date,
      org: newEvent.org,
      orgLink: newEvent.orgLink,
      title: newEvent.title,
      description: newEvent.description,
      link: newEvent.link
    }]);
    setNewEvent({ title: '', description: '', org: '', orgLink: '', imageSrc: '', date: '', link: '' });
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

  const handleRemoveEvent = (index: number) => {
    if (window.confirm('Are you sure you want to remove this event?')) {
      setEvents(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <Menu activeLink="events" openModal={() => { }}>
      <div className="p-6 relative">
        <h1 className="text-4xl font-bold text-purple-900 mb-6">Events and Announcements</h1>

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
              onRemove={() => handleRemoveEvent(events.indexOf(event))}
            />
          ))}
        </div>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 bg-red-700 hover:bg-red-800 text-white text-3xl w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        >
          +
        </button>
        
        {/* Add Event Modal */}
        {showModal && (
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
                type="text"
                placeholder="Organization Link (optional)"
                className="w-full p-2 border rounded"
                value={newEvent.orgLink}
                onChange={(e) => setNewEvent({ ...newEvent, orgLink: e.target.value })}
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
              <input
                type="text"
                placeholder="Event Page Link"
                className="w-full p-2 border rounded"
                value={newEvent.link}
                onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
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
            {/* Back to Events button at the top left */}
            <button
              onClick={() => setFullScreenEvent(null)}
              className="fixed top-20 left-4 z-50 bg-red-700 text-white px-4 py-2 rounded-lg shadow hover:bg-red-800 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Events
            </button>

            {/* Close button at top right */}
            <button
              className="fixed top-4 right-4 z-50 text-gray-800 text-2xl bg-gray-200 bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition-all"
              onClick={() => setFullScreenEvent(null)}
            >
              &times;
            </button>

            <div className="w-full max-w-6xl my-8 bg-white mt-16">
              <div 
                className="relative w-full h-[70vh] bg-white flex items-center justify-center p-4 cursor-pointer"
                onClick={() => {
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
              </div>

              <div className="bg-white p-6 w-full border-t border-gray-200">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">
                  {fullScreenEvent.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {fullScreenEvent.date} | {fullScreenEvent.orgLink ? (
                    <a href={fullScreenEvent.orgLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {fullScreenEvent.org}
                    </a>
                  ) : (
                    <span className="text-blue-600">{fullScreenEvent.org}</span>
                  )}
                </p>
                <p className="text-gray-700 whitespace-pre-line mb-6">
                  {fullScreenEvent.description}
                </p>
                
                {fullScreenEvent.link && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href={fullScreenEvent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      See original post on Facebook
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Menu>
  );
}