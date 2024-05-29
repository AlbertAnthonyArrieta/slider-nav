import "./City.css";

export const City = ({ ref, city, active, onClick}) => {
  return (
    <>
      <div className="city" onClick={onClick}>
        <a ref={ref} className={active ? "city-label active" : "city-label"}>{city.label}</a>
      </div>
    </>
  );
};

export default City;
