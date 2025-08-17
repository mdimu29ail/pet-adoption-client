import React from 'react';
import { events } from '../Events/EventsData.js';

const Events = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <div key={event.id} className="border rounded-2xl shadow-md p-4">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="text-xl font-semibold mt-3">{event.title}</h2>
          <p className="text-sm text-gray-500">
            📅 {event.date} | 📍 {event.location}
          </p>
          <p className="mt-2 text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
