import React, { Fragment } from 'react';
import CarouselSubCardDetails from './CarouselSubCardDetails';
// import Loader from 'react-loader';

export default ({ id, data = {}, activeId }) => {
  //console.log(data);
  const { biography = {}, powerstats = {} } = data;
  const { publisher } = biography;
  console.log(!!data.response);
  return (
    <div
      className={
        activeId == id
          ? 'activeCard card-layout'
          : (activeId - id == 1 || activeId - id == -1) &&
            data.response === 'success'
          ? 'blur-card card-layout'
          : 'inactiveCard'
      }
    >
      {data.response != 'success' && (
        //display loader until api is succeeded
        //using external link image loader
        <img src="https://i.ibb.co/M7kLfjt/Iphone-spinner-1.gif" />
      )}
      {data.response === 'success' && (
        <div>
          <img
            className="superhero-image"
            src={data && data.image && data.image.url}
          />
          <div className="card-details">
            <p className="card-details-info superhero-heaading">
              {data && data.name}
            </p>
            <p className="card-details-info">
              FULL NAME: <b>{biography['full-name']}</b>
            </p>
            <p className="card-details-info">
              PLACE OF BIRTH: <b>{biography['place-of-birth']}</b>
            </p>
            <p className="card-details-info">
              PUBLISHER: <b>{publisher}</b>
            </p>

            <CarouselSubCardDetails powerstats={powerstats} />
          </div>
        </div>
      )}
    </div>
  );
};
