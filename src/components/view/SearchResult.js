import React from 'react';

function getWeather_Icon(weather) {
  switch (weather) {
    case 'rain':
      return 'fa fa-cloud-rain';
    default:
      return '';
  }
}

const Result = props => {
  if (props.data === undefined) {
    return (
      <>
        <span className="alert alert-danger" style={{ width: '5rem' }}>
          Please Enter valid city!{' '}
          <a
            target="new"
            href="http://www.citymayors.com/statistics/largest-cities-alphabetical.html"
          >
            Learn More&nbsp;
            <i className="fa fa-external-link" />
          </a>
        </span>
      </>
    );
  }
  if (props.data.name !== undefined) {
    let date = new Date();
    console.log(props);
    return (
      <>
        <div
          className="card mx-auto"
          style={{ width: '40rem', height: '20rem' }}
        >
          <div className="card-body">
            <div className="text-left">
              <table cellSpacing="100px" className="table table-borderless">
                <thead>
                  <tr>
                    <td>
                      <h4>Weather today in {props.data.name}</h4>
                    </td>
                    <td className="text-right lead">
                      <h5>{props.data.weather[0].main}</h5>
                    </td>
                  </tr>
                </thead>
                <tr>
                  <td>
                    <p className="lead">Temperature</p>
                  </td>
                  <td>
                    {' '}
                    <h3 className="card-text">
                      {props.data.main.feels_like}
                      <sup>o</sup>c
                      <br />
                      <span className="lead">feels like</span>
                    </h3>
                  </td>
                  <td>
                    {' '}
                    <h3 className="card-text">
                      {props.data.main.temp_min}
                      <sup>o</sup>c
                      <br />
                      <span className="lead">minimum</span>
                    </h3>
                  </td>
                  <td>
                    {' '}
                    <h3 className="card-text">
                      {props.data.main.temp_max}
                      <sup>o</sup>c
                      <br />
                      <span className="lead">maximum</span>
                    </h3>
                  </td>
                </tr>
              </table>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export { Result };
