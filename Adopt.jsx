import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock Pet Data
const petsData = [
  { id: 1, name: 'Buddy', type: 'Dog', breed: 'Labrador', age: 2, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Mittens', type: 'Cat', breed: 'Persian', age: 1, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Max', type: 'Dog', breed: 'Golden Retriever', age: 3, image: 'https://via.placeholder.com/150' },
];

const Adopt = () => {
  const [search, setSearch] = useState('');
  const [filteredPets, setFilteredPets] = useState(petsData);
  const [favorites, setFavorites] = useState([]);

  // Handle Search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredPets(petsData.filter(pet => pet.name.toLowerCase().includes(value)));
  };

  // Add to Favorites
  const addToFavorites = (pet) => {
    setFavorites([...favorites, pet]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, pet]));
  };

  return (
    <div className="container py-4">
      <h2 className="text-center">Adopt a Pet</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search pets..."
        value={search}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.breed} - {pet.age} years old</p>
                <Link to={`/adopt/${pet.id}`} className="btn btn-primary">View Details</Link>
                <button onClick={() => addToFavorites(pet)} className="btn btn-outline-danger ms-2">❤️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mt-5">
        <h3 className="text-center">Adoption Process</h3>
        <ol>
          <li>Browse available pets and select the one you love.</li>
          <li>Click on "View Details" to learn more about the pet.</li>
          <li>Fill out the adoption application form.</li>
          <li>Wait for approval from the adoption center.</li>
          <li>Once approved, schedule a meeting with the pet.</li>
          <li>Complete the adoption paperwork and take your new pet home!</li>
        </ol>
      </div>
    </div>
  );
};

export default Adopt;
