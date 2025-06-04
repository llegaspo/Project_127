'use client';
import { useState, useEffect, useRef } from 'react';
import Menu from '@/components/menu/menu-texts';
import Link from 'next/link';
import Image from 'next/image';

export default function Login(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const images = [
    '/scifed.jpg',
    '/set.jpg',
    '/kapehan.jpg',
  ];

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
    </Menu>
  );
}