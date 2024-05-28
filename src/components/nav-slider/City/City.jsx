import "./City.css";

export const City = ({ city, active }) => {
  return (
    <>
      <div className="city">
        <a className={active ? "city-label active" : "city-label"}>{city.label}</a>
      </div>
    </>
  );
};

export default City;
