import "./Navigation.css";
import { useState, useRef, useEffect } from "react";
import City from "../City/City.jsx";
import CityList from "../../../navigation.json";

export const Navigation = () => {
  const [active, setActive] = useState("");

  // Reference Slider component
  const indicatorRef = useRef(null);

  const selectCity = (event, id) => {
    // Update new selection
    setActive(id); 

    // Get width and x position of city section
    const width = event.target.getBoundingClientRect().width;
    const pos = event.target.getBoundingClientRect().x;

    // Move slider right under the label with the corresponding width and position
    indicatorRef.current.style.width = `${width}px`;
    indicatorRef.current.style.transform = `translateX(${pos}px)`;
  };

  return (
    <>
      <div className="navigation">
        <nav className="navigation-items">
          {CityList.cities.map((city, index) => (
            <div key={index}>
              <City 
                city={city}
                active={active === city.section ? true : false}
                onClick={(event) => selectCity(event, index)}
              />
            </div>
          ))}
        </nav>
        <div className="slider">
          <hr ref={indicatorRef} className="indicator"></hr>
        </div>
      </div>
    </>
  );
};

export default Navigation;
