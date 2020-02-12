import React from "react";
import CityName from "./CityName";
import Description from "./Description";
import Details from "./Details";
import RemoveButton from "./RemoveButton";

const CityInfo = ({ cityWeather, remove }) => {
  return cityWeather.map((item, i) => {
    return (
      <div className="info" key={i}>
        <CityName item={item} />
        <Description item={item} />
        <Details
          item={item}
          kelvinToCelcius={kelvin => {
            return (kelvin - 273).toFixed(2);
          }}
        />
        <RemoveButton handleOnClick={remove} item={item} />
      </div>
    );
  });
};

export default CityInfo;
