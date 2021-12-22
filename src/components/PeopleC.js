import React from 'react';
import Pages from './Pages';
import Table from './Table';

export const PeopleC = ({ res, page, setPage }) => {
  const people = res?.results;
  return (
    <div>
      <Table people={people} />
      <Pages total={res?.count} current={page} setPage={setPage}></Pages>
    </div>
  );
};
