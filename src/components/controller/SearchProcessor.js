import React, { useState } from "react";
import { DataForm } from "../view/DataForm";
import * as DataAPI from "../data/WeatherDataAPI";
import { Result } from "../view/SearchResult";

const SearchProcessor = props => {
  const [data, setData] = useState({});

  function ProcessData(city) {
    DataAPI.getWeatherData(city).then(data => setData(data));
  }

  return (
    <>
      <DataForm onSubmit={ProcessData} />
      <Result data={data} />
    </>
  );
};

export { SearchProcessor };
