import React, { useState } from 'react';
import { PeopleC } from '../components/PeopleC';
import { client } from '../handler';

const People = () => {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState();

  React.useEffect(() => {
    const getPeople = async () => {
      try {
        const response = await client.get(`people/?page=${page}`);
        setPeople(response.data);
      } catch (error) {
        setError('Resource Error');
      }
    };
    getPeople();
  }, [page]);

  return error ? (
    <div>{error}</div>
  ) : (
    <PeopleC res={people} page={page} setPage={setPage} />
  );
};

export default People;
