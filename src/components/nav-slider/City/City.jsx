import "./City.css";

export const City = ({ city, active, onClick}) => {
  return (
    <>
      <div className="city" onClick={onClick}>
        <a className={active ? "city-label active" : "city-label"}>{city.label}</a>
      </div>
    </>
  );
};

export default City;
