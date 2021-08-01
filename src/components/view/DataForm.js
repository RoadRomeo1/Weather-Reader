import React, { useRef } from 'react';

const DataForm = props => {
  const city = useRef(null);

  function SubmitHandler() {
    props.onSubmit(city.current.value);
  }

  return (
    <>
      <div>
        <input type="text" ref={city} placeholder="city comes here..." />
        <br />
        <br />
        <button onClick={() => SubmitHandler()}>Weather&nbsp;</button>
      </div>
      <br />

      <br />
      <br />
      <br />
    </>
  );
};

export { DataForm };
