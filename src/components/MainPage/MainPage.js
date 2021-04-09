import React, { useEffect } from 'react';
import axios from 'axios';
import requests from '../ApiConnect/ApiConnect';
import CardItem from '../CardItem/CardItem';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';

const MainPage = ({ people, setPeople}) => {

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests.getData)
        .catch((error) => console.log(error));
      setPeople(request.data);
      return request;
    }

    fetchData();
  }, [setPeople]);

  const loadNext = () => {
    async function fetchData() {
      if (people.next === null) return null;
      const request = await axios.get(people.next);
      setPeople(request.data);
      return request;
    }
    fetchData();
  };

  const loadPrev = () => {
    async function fetchData() {
      if (people.previous === null) return null;
      const request = await axios.get(people.previous);
      setPeople(request.data);
      return request;
    }
    fetchData();
  };

  return (
    <>
      <Header />
      <div>
        <CardItem people={people}/>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0px 20px 0',
          }}
        >
          {people.previous ? (
            <Button
              style={{ marginRight: '10px' }}
              variant="contained"
              color="primary"
              size="large"
              onClick={loadPrev}
            >
              prev page
            </Button>
          ) : null}
          {people.next ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={loadNext}
            >
              next page
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MainPage;
