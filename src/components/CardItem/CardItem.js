import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import './CardItem.css';

const CardItem = ({ people}) => {
  

  return people.results ? (
    <div className="main">
      {people.results.map((peopleElement, id) => (
        <div className="card" key={uuidv4()}>
          <h2>{peopleElement.name}</h2>
          <ul>
            <li>{peopleElement.gender}</li>
          </ul>
          <Link to={`/${id}`}>
            <button className='btn-people'>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <>
      <h4>loading...</h4>
    </>
  );
};

export default CardItem;
