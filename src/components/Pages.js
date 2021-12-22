import React from 'react';

const Pages = ({ total, current, setPage }) => {
  const nextPage = () => setPage(current + 1);
  const prevPage = () => (current > 1 ? setPage(current - 1) : setPage(1));
  return (
    <div>
      <p>
        Page {current} of {total}
      </p>
      <div>
        <button onClick={prevPage}>previous</button>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default Pages;
