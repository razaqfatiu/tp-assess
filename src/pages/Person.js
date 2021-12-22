import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PersonC from '../components/PersonC';
import { client } from '../handler';

const Person = () => {
  const [person, setPerson] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  React.useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await client.get(`people/${id}`);
        setPerson(response?.data);
      } catch (error) {
        setError('Resource Error');
      }
    };
    getPerson();
  }, [id]);

  return error ? <div>{error}</div> : <PersonC person={person} />;
};

export default Person;
