import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ people }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Height</th>
            <th>Date of Birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {people?.map((person) => (
            <tr key={person.url}>
              <td>
                <Link to={`people/${person.url.split('/')[5]}`}>
                  {person.name}
                </Link>
              </td>
              <td>{person.height}</td>
              <td>{person.birth_year}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
