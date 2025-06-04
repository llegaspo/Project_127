'use client';

import React, { useState } from 'react';
import Menu from '@/components/menu/menu-texts';
import Image from 'next/image';
import Link from 'next/link';

const fbPages = {
  admin: [
    {
      name: 'University of the Philippines Cebu',
      image: '/logos/upcebu.png',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    { name: 'FB Page Name', image: '/logos/upcebu.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/upcebu.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/upcebu.png', link: '#' }
  ],
  organizations: [
    {
      name: 'UP Cebu University Student Council',
      image: '/logos/usc.png',
      link: 'https://facebook.com/upcebusc'
    },
    { name: 'FB Page Name', image: '/logos/usc.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/usc.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/usc.png', link: '#' }
  ],
  federations: [
    {
      name: 'UP Cebu Sciences Federation',
      image: '/logos/sciences.png',
      link: 'https://facebook.com/upcesciencesfed'
    },
    { name: 'FB Page Name', image: '/logos/sciences.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/sciences.png', link: '#' },
    { name: 'FB Page Name', image: '/logos/sciences.png', link: '#' }
  ]
};

export default function FacebookPages() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include the Menu component */}
      <Menu />
      
      {/* Main content */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-center mb-6">UP Cebu Facebook Pages</h1>

        {Object.entries(fbPages).map(([section, pages]) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 capitalize text-[#89132f]">
              {section.replace(/^\w/, c => c.toUpperCase())}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={page.image}
                    alt={page.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <span>{page.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}