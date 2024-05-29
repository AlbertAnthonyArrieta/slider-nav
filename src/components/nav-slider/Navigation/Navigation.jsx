import "./Navigation.css";
import { useState, useRef, useEffect } from "react";
import City from "../City/City.jsx";
import CityList from "../../../navigation.json";

/**
 * Bugs:
 * Resizing - Underline holds position and does not adapt with the navigation bar.
 * 
 */

export const Navigation = () => {
  //Current selected city
  const [active, setActive] = useState("cupertino");

  // Reference Slider component
  const indicatorRef = useRef(null);
  const defaultCityRef = useRef(null);

  useEffect(() => {
    // Get width and position of default city
    const defaultCity = defaultCityRef.current.getBoundingClientRect();
    const dcWidth = defaultCity.width;
    const dcPos = defaultCity.x;

    // Position underline right under the default city
    indicatorRef.current.style.width = `${dcWidth}px`;
    indicatorRef.current.style.transform = `translateX(${dcPos}px)`;
  }, [])

  const selectCity = (event, id) => {
    // Update new selection
    setActive(id); 

    // Get width and x position of the selected city label
    const targetCity = event.target.getBoundingClientRect();
    const width = targetCity.width;
    const pos = targetCity.x;

    console.log(targetCity);

    // Move slider right under the label with the corresponding width and position
    indicatorRef.current.style.width = `${width}px`;
    indicatorRef.current.style.transform = `translateX(${pos}px)`;
  };

  return (
    <>
      <div className="navigation">
        <nav className="navigation-items">
          {CityList.cities.map((city, index) => (
            <div key={index} ref={index === 0 ? defaultCityRef : null}>
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
