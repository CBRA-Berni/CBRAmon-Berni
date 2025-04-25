import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const trainerData = [
      { id: 1, name: 'Trainer 1', profilePic: '/path-to-image-1.jpg' },
      { id: 2, name: 'Trainer 2', profilePic: '/path-to-image-2.jpg' },
    ];
    setTrainers(trainerData);
  }, []);

  return (
    <div>
      <h1>Overview of Trainers</h1>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            <img src={trainer.profilePic} alt={trainer.name} width="50" />
            <Link to={`/trainer/${trainer.id}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
