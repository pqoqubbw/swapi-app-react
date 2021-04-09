import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoPage = ({ itemId, people }) => {
  const [planet, setPlanet] = useState([]);
  const [car, setCar] = useState([]);
  const [film, setFilm] = useState([]);

  const {
    name,
    height,
    mass,
    hair_color,
    eye_color,
    skin_color,
    birth_year,
    gender,
    homeworld,
    vehicles,
    films,
  } = people.results[itemId];

  useEffect(() => {
    const getNameOfPlanet = async () => {
      const request = await axios
        .get(homeworld)
        .catch((error) => console.log(error));
      if (request) setPlanet(request.data);
      return null;
    };

    const getNameOfVehicles = async () => {
      const request = await axios
        .get(vehicles[0])
        .catch((error) => console.log(error));
      if (request) setCar(request.data);
      return null;
    };

    const getNameOfFilm = async () => {
      const request = await axios
        .get(films[0])
        .catch((error) => console.log(error));
      if (request) setFilm(request.data);
      return null;
    };

    getNameOfVehicles();
    getNameOfPlanet();
    getNameOfFilm();

    console.log('click api');
  }, [homeworld, vehicles, films]);

  return (
    <>
      <li>name: {name}</li>
      <li>height: {height}</li>
      <li>mass: {mass}</li>
      <li>hair_color: {hair_color}</li>
      <li>skin_color: {skin_color}</li>
      <li>eye_color: {eye_color}</li>
      <li>birth_year: {birth_year}</li>
      <li>gender: {gender}</li>
      <li>homeworld: {planet.name ? planet.name : <span>n/a</span>}</li>
      <li>
        <div>
          <p>vehicles:</p>
          {car.name ? (
            <>
              <p>name of vehicles: {car.name}</p>
              <p>model of vehicles: {car.model}</p>
            </>
          ) : (
            <div>n/a</div>
          )}
        </div>
      </li>
      <li>
        <div>
          <p>films:</p>
          {film.title ? <p>Title: {film.title}</p> : <span>n/a</span>}
        </div>
      </li>
    </>
  );
};

export default InfoPage;
