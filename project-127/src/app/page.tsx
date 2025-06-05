'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Menu from '@/components/menu/menu-texts';
import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  id: string;
  imageSrc: string;
  date: string;
  org: string;
  orgLink?: string;
  title: string;
  description: string;
  link: string;
}

export default function Login() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [events, setEvents] = useState<EventCardProps[]>([]);

  // Default images (fallback)
  const defaultImages = [
  ];

  // Combine event images with default images
  const slideshowImages = [
    ...events.slice(0, 3).map(event => event.imageSrc),
    ...defaultImages
  ].filter((value, index, self) => 
    value && self.indexOf(value) === index // Remove duplicates
  );

  // Fetch events from API
  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data: EventCardProps[] = await res.json();
      setEvents(
        data.map((evt) => {
          let parsedDate: string;

          if (evt.date && typeof evt.date === 'string') {
            const dateObj = new Date(evt.date);
            parsedDate = isNaN(dateObj.getTime()) ? 'N/A' : dateObj.toISOString().split("T")[0];
          } else {
            parsedDate = 'N/A';
          }

          return {
            ...evt,
            date: parsedDate,
          };
        }).sort((a, b) => { // Sort by date (newest first)
          if (a.date === 'N/A') return 1;
          if (b.date === 'N/A') return -1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
    } catch (e) {
      console.error("Failed to load events:", e);
      setEvents([]);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Slideshow controls
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === slideshowImages.length - 1 ? 0 : prev + 1
    );
  }, [slideshowImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  }, [slideshowImages.length]);

  // Auto-advance slideshow
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, nextSlide]);

  const formatDate = (dateString: string) => {
    if (!dateString || dateString === 'N/A') return dateString;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Menu activeLink="overview">
      {/* Slideshow Section */}
      <div 
        className="relative w-full h-[90vh] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blurred Background */}
        <div className="absolute w-full h-full filter blur-md z-1">
          {slideshowImages[currentIndex] && (
            <Image
              src={slideshowImages[currentIndex]}
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
              quality={30}
              priority
            />
          )}
        </div>

        {/* Slides */}
        <div className="absolute w-full h-full z-2">
          {slideshowImages.map((image, index) => (
            <div
              key={image}
              className={`absolute w-full h-full transition-all duration-800 ease-in-out flex justify-center items-center
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto max-w-full max-h-full object-contain"
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {isHovered && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 z-3 text-white text-5xl cursor-pointer select-none opacity-70 hover:opacity-100 transition-opacity"
            >
              &#10094;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 z-3 text-white text-5xl cursor-pointer select-none opacity-70 hover:opacity-100 transition-opacity"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {/* Text Content */}
      <div className="title-style">
        What's UP, mga Iskolar ng Bayan?
      </div>

      <div className="text">
        Interested to know the various activities and announcements the UP Cebu organization have in store for us? You came at the right place! Get connected and stay informed, mga Iskolar ng Bayan!
      </div>

      {/* Latest Events Section */}
      {events.length > 0 && (
        <div className="mt-20 mx-4 md:mx-8 lg:mx-5 mb-8">
          <h2 className="text-4xl font-bold text-red-900 mb-6">Latest Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={event.imageSrc}
                  alt="Event"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm text-gray-500 mb-1">
                    {formatDate(event.date)} | {event.orgLink ? (
                      <a href={event.orgLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                        {event.org}
                      </a>
                    ) : (
                      <span className="text-blue-600">{event.org}</span>
                    )}
                  </h3>
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-red-800 mb-2 hover:underline block"
                    >
                      {event.title}
                    </a>
                  ) : (
                    <h2 className="text-lg font-bold text-purple-800 mb-2">{event.title}</h2>
                  )}
                  <p className="text-sm text-gray-700">
                    {event.description.length > 100 
                      ? `${event.description.substring(0, 100)}...` 
                      : event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/events" className="text-red-700 hover:underline font-medium">
              View all announcements →
            </Link>
          </div>
        </div>
      )}
    </Menu>
  );
}