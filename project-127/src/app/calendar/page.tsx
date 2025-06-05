"use client";

import React, { useState } from "react";
import Menu from '@/components/menu/menu-texts';
import Link from 'next/link';

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  
  // Get the current date for comparison
  const today = new Date();
  
  // Check if we're viewing the current month
  const isViewingCurrentMonth = 
    currentMonth.getMonth() === today.getMonth() && 
    currentMonth.getFullYear() === today.getFullYear();

  // Generate dates for the displayed month
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Add padding for days before the 1st
    const startPadding = firstDay.getDay();
    // Add padding for days after the last day
    const endPadding = 6 - lastDay.getDay();
    
    const dates = [];
    
    // Previous month days
    for (let i = startPadding; i > 0; i--) {
      const date = new Date(year, month, -i + 1);
      dates.push({ date, isCurrentMonth: false });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      dates.push({ date, isCurrentMonth: true });
    }
    
    // Next month days
    for (let i = 1; i <= endPadding; i++) {
      const date = new Date(year, month + 1, i);
      dates.push({ date, isCurrentMonth: false });
    }
    
    return dates;
  };

  const dates = getDaysInMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];

  // Navigation functions
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  // Task state management
  const [tasks, setTasks] = useState([
    { id: 1, text: "Cover page sa 141", completed: false, priority: "medium" },
    { id: 2, text: "Finalize project proposal", completed: false, priority: "high" },
    { id: 3, text: "Meeting with team", completed: true, priority: "low" }
  ]);

  const promptDeleteTask = (id) => {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  };

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id !== taskToDelete));
    setShowDeleteModal(false);
    setTaskToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  };

  return (
    <Menu activeLink="calendar" openModal={() => { }}>
      <div className="flex flex-col md:flex-row items-start gap-20 p-4 md:p-8 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen font-sans w-full shadow-xl">
        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Deletion</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this task?</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteTask}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced To Do Sidebar */}
        <div className="bg-white shadow-lg rounded-md w-full md:w-150 p-6 h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 bg-[#8b0031] rounded-lg px-4 py-3">
            <h3 className="text-xl font-semibold text-white">Today's Tasks</h3>
            <Link href="/addtask" passHref>
              <button className="bg-white text-[#8b0031] p-2 rounded-full hover:bg-gray-100 transition-colors border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
          
          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                {/* Delete Button */}
                <button
                  onClick={() => promptDeleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Edit Button - Now using Link with href */}
                <Link href="/edittask" passHref>
                  <button
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    title="Edit task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </Link>

                <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {task.text}
                </span>

                <span className={`w-3 h-3 rounded-full ${
                  task.priority === 'high' ? 'bg-red-500' : 
                  task.priority === 'medium' ? 'bg-yellow-500' : 
                  'bg-green-500'
                }`}></span>
              </div>
            ))}
            
            {tasks.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No tasks yet. Click the + button to add one.
              </div>
            )}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 w-full">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-[#8b0031]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h1>
            <div className="flex gap-2">
              <button 
                onClick={prevMonth}
                className="bg-[#8b0031] text-white px-3 py-2 rounded hover:bg-[#6a0025]"
              >
                &lt;
              </button>
              <button 
                onClick={goToToday}
                className="bg-gray-500 text-white px-2 py-2 rounded hover:bg-gray-600"
              >
                Today
              </button>
              <button 
                onClick={nextMonth}
                className="bg-[#8b0031] text-white px-3 py-2 rounded hover:bg-[#6a0025]"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-medium">
            {days.map((day) => (
              <div key={day} className="text-gray-600 text-xl pb-1 font-semibold">
                {day}
              </div>
            ))}

            {dates.map(({ date, isCurrentMonth }, index) => {
              const isToday = 
                isViewingCurrentMonth &&
                date.getDate() === today.getDate() &&
                isCurrentMonth;
              
              return (
                <div 
                  key={index}
                  className={`relative p-3 rounded-lg h-22 w-25 flex flex-col transition-colors
                    ${!isCurrentMonth ? "text-gray-400 bg-gray-100" : 
                      isToday ? "bg-[#8b0031] text-white shadow-lg" : 
                      "bg-white hover:bg-gray-50 text-gray-800"}
                  `}
                >
                  <div className={`relative p-1 rounded-md h-10 w-6 flex items-center justify-center text-lg ${isToday ? "font-bold" : ""}`}>
                    {date.getDate()}
                  </div>
                  {/* You can add event indicators here */}
                  {isToday && (
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Menu>
  );
}