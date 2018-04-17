import React from 'react';

const Weather = (props) => (
  <div className="weather__info">
    {
      props.city && props.country &&
      <div className="weather__key">Location:
        <span className="weather__value">{ props.city }, { props.country }</span>
      </div>
    }
    {
      props.country &&
      <div className="weather__key">
        Country:
        <span className="weather__value">{ props.country }</span>
      </div>
    }
    {
      props.temperature &&
      <div className="weather__key">
        Temperature:
        <span className="weather__value">{ props.temperature }</span>
      </div>
    }
    {
      props.humidity &&
      <div className="weather__key">
        Humidity:
        <span className="weather__value">{ props.humidity }</span>
      </div>
    }
    {
      props.description &&
      <div className="weather__key">
        Description:
        <span className="weather__value">{ props.description }</span>
      </div>
    }
    {
      props.error &&
      <div className="weather__error">
        { props.error }
      </div>
    }
  </div>
);

export default Weather;
