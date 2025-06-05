'use client';
import { useState, useEffect, useRef } from 'react';
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
  const [transitionDirection, setTransitionDirection] = useState('right');
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const [events, setEvents] = useState<EventCardProps[]>([]);

  const images = [
    '/scifed.jpg',
    '/set.jpg',
    '/kapehan.jpg',
  ];

  // Fetch events from localStorage and sort by date (newest first)
  useEffect(() => {
    const loadEvents = () => {
      try {
        const storedEvents = typeof window !== 'undefined' ? localStorage.getItem('events') : null;
        if (storedEvents) {
          const parsedEvents = JSON.parse(storedEvents);
          // Sort events by date (newest first)
          const sortedEvents = [...parsedEvents].sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
          setEvents(sortedEvents);
        }
      } catch (e) {
        console.error('Failed to parse events', e);
      }
    };

    loadEvents();

    // Listen for changes to events in localStorage
    const handleStorageChange = () => {
      loadEvents();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const slideTo = (direction, newIndex) => {
    setTransitionDirection(direction);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    slideTo('left', newIndex);
    resetTimer();
  };

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    slideTo('right', newIndex);
    resetTimer();
  };

  const resetTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <Menu activeLink="overview">
      <div style={{
        position: 'relative',
        width: '100%',
        height: '90vh',
        overflow: 'hidden'
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blurred Background */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          filter: 'blur(8px)',
          zIndex: 1,
          alignItems: 'center'
        }}>
          <Image
            src={images[currentIndex]}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={30}
            priority
          />
        </div>

        {/* Animated Slides */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2
        }}>
          {images.map((image, index) => (
            <div
              key={image}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
                transform: index === currentIndex 
                  ? 'translateX(0)' 
                  : index < currentIndex 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)',
                opacity: index === currentIndex ? 1 : 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div 
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            cursor: 'pointer',
            fontSize: '3rem',
            color: 'white',
            textShadow: '0 0 5px rgba(0,0,0,0.5)',
            userSelect: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          &#10094;
        </div>
        <div 
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            cursor: 'pointer',
            fontSize: '3rem',
            color: 'white',
            textShadow: '0 0 5px rgba(0,0,0,0.5)',
            userSelect: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          &#10095;
        </div>
      </div>

      {/* Text */}
      <div className="title-style">
        What's UP, mga Iskolar ng Bayan?
      </div>

      <div className="text">
        Interested to know the various activities and announcements the UP Cebu organization have in store for us? You came at the right place! Get connected and stay informed, mga Iskolar ng Bayan!
      </div>

      {/* Announcements Section */}
      {events.length > 0 && (
        <div className="mt-20 mx-4 md:mx-8 lg:mx-5 mb-8">
          <h2 className="text-4xl font-bold text-red-900 mb-6">Latest Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <div key={event.id || index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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