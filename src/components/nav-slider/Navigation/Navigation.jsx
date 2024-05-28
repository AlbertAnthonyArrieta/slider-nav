import "./Navigation.css";
import { useState } from "react";
import City from "../City/City.jsx";
import CityList from "../../../navigation.json";

export const Navigation = () => {
  const [active, setActive] = useState("cupertino");

  const selectCity = (section) => {
    console.log(section);
    setActive(section);
  };

  return (
    <>
      <div className="navigation">
        {CityList.cities.map((city, index) => (
          <div key={index}>
            <City
              city={city}
              active={active === city.section ? true : false}
              onClick={() => selectCity(city.section)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigation;
