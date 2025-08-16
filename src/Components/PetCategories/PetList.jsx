import React, { useState, useEffect } from 'react';
import PetCategories from './PetCategories';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Loading from '../../Loading/Loading';

const PetList = () => {
  const [category, setCategory] = useState('All');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://my-assignment-12-server-one.vercel.app/pets')
      .then(res => {
        setPets(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching pets:', err);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = id => {
    navigate(`/dashboard/pets/${id}`);
  };

  const filteredPets =
    category === 'All' ? pets : pets.filter(pet => pet.type === category);

  const petsToShow = showAll ? filteredPets : filteredPets.slice(0, 6);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <PetCategories
        category={category}
        setCategory={cat => {
          setCategory(cat);
          setShowAll(false);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {petsToShow.map(pet => (
          <div key={pet._id || pet.id} className="border rounded p-4 shadow">
            <img
              src={pet.image_url}
              alt={pet.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{pet.name}</h3>
            <div className="flex justify-between">
              <p className="text-xl ">{pet.breed}</p>
              <p className="text-sm  bg-green-500 px-2 py-1 rounded-full">
                {pet.status}
              </p>
            </div>

            <button
              onClick={() => handleViewDetails(pet._id || pet.id)}
              className="mt-3 bg-orange-500 hover:bg-orange-600  px-4 py-2 rounded w-full"
            >
              Details
            </button>
          </div>
        ))}

        {petsToShow.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No pets found in this category.
          </p>
        )}
      </div>

      {filteredPets.length > 6 && (
        <div className="text-center my-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
          >
            {showAll ? 'Show Less' : 'See All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PetList;
