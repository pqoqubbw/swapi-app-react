import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';

const InfoPages = ({ itemId, people }) => {
  return (
    <>
      <Header />
      <div className="about"><Link to="/"><button className="btn-people">Back</button></Link>
      <ul>
        <InfoPage itemId={itemId} people={people} />
      </ul></div>
      
    </>
  );
};

export default InfoPages;
