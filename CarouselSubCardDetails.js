import React from 'react';

export default ({ powerstats = {} }) => {
  const {
    intelligence,
    speed,
    power,
    durability,
    combat,
    strength
  } = powerstats;
  return (
    <div className="card-sub-details">
      <div className="card-sub-power1-details">
        <p>
          INTELLIGENCE: <b>{intelligence}</b>
        </p>
        <p>
          SPEED: <b>{speed}</b>
        </p>
        <p>
          POWER: <b>{power}</b>
        </p>
      </div>
      <div className="card-sub-power2-details">
        <p>
          STRENGTH: <b>{strength}</b>
        </p>
        <p>
          DUARBILITY: <b>{durability}</b>
        </p>
        <p>
          COMBAT: <b>{combat}</b>
        </p>
      </div>
    </div>
  );
};
