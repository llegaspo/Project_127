'use client';

import React, { useState } from 'react';
import Menu from '@/components/menu/menu-texts';
import Image from 'next/image';
import Link from 'next/link';

type PageType = 'admin' | 'organizations' | 'federations';

interface FbPage {
  name: string;
  image: string;
  link: string;
}

const initialFbPages: Record<PageType, FbPage[]> = {
  admin: [
    {
      name: 'University of the Philippines Cebu',
      image: '/upcebu.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'University of the Philippines Cebu',
      image: '/upcebu.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'University of the Philippines Cebu',
      image: '/upcebu.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'University of the Philippines Cebu',
      image: '/upcebu.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    }
  ],
  organizations: [
    {
      name: 'UP Cebu University Student Council',
      image: '/upcusc.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu University Student Council',
      image: '/upcusc.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu University Student Council',
      image: '/upcusc.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu University Student Council',
      image: '/upcusc.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    }
  ],
  federations: [
    {
      name: 'UP Cebu Sciences Federation',
      image: '/scions.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu Sciences Federation',
      image: '/scions.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu Sciences Federation',
      image: '/scions.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    },
    {
      name: 'UP Cebu Sciences Federation',
      image: '/scions.jpg',
      link: 'https://www.facebook.com/upcebuofficial'
    }
  ]
};

export default function FacebookPages() {
  const [fbPages, setFbPages] = useState(initialFbPages);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    image: '',
    link: '',
    type: 'admin' as PageType
  });

  const handleAddPage = () => {
    setFbPages(prev => ({
      ...prev,
      [form.type]: [...prev[form.type], {
        name: form.name,
        image: form.image,
        link: form.link
      }]
    }));
    setShowModal(false);
    setForm({ name: '', image: '', link: '', type: 'admin' });
  };

  const handleRemovePage = (type: PageType, index: number) => {
    if (window.confirm('Are you sure you want to remove this page?')) {
      setFbPages(prev => ({
        ...prev,
        [type]: prev[type].filter((_, i) => i !== index)
      }));
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Menu activeLink="fb-pages">
        <main className="flex-grow p-8 mx-auto max-w-7xl w-full">
          <h1 className="text-4xl font-bold text-[#89132f] text-center mb-6">UP Cebu Facebook Pages</h1>

          {Object.entries(fbPages).map(([section, pages]) => (
            <div key={section} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 capitalize text-red-800">
                {section === 'organizations'
                  ? 'Student Organizations'
                  : section === 'federations'
                  ? 'College Federations'
                  : section.replace(/^\w/, c => c.toUpperCase())}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-500">
                {pages.map((page, idx) => (
                  <div key={idx} className="relative flex flex-col items-center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemovePage(section as PageType, idx);
                      }}
                      className="absolute -top-2 -right-2 bg-white text-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs z-10 hover:bg-gray-100 hover:text-red-500 border border-gray-300"
                      title="Remove page"
                    >
                      ×
                    </button>
                    <Link
                      href={page.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 w-full text-xs"
                    >
                      <img
                        src={page.image}
                        alt={page.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                      <span>{page.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </Menu>

      {/* Floating + Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-red-900 hover:bg-red-800 text-white text-3xl w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      >
        +
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Facebook Page</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Page Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Facebook Link"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as PageType })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="admin">Admin</option>
                <option value="organizations">Student Organizations</option>
                <option value="federations">College Federations</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPage}
                  className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-800"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}