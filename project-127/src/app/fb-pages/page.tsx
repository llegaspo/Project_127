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
  admin: [/* your existing data */],
  organizations: [/* your existing data */],
  federations: [/* your existing data */]
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

  return (
    <div className="relative flex flex-col min-h-screen">
      <Menu activeLink="fb-pages">
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold text-purple-900 text-center mb-6">UP Cebu Facebook Pages</h1>

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
                    <img
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
      </Menu>

      {/* Floating + Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-red-700 hover:bg-red-800 text-white text-3xl w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
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
                <option value="organizations">Organizations</option>
                <option value="federations">Federations</option>
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
                  className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
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
