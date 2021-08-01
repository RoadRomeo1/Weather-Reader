import React from 'react';
import { SearchProcessor } from './controller/SearchProcessor';
import '../style.css';

const App = () => {
  return (
    <>
      <div>
        <div className="display-4 text-center">Weather Reader</div>
        <br />
        <div className="text-center">
          <SearchProcessor />
        </div>
        <p />
      </div>
    </>
  );
};

export { App };
