import React from "react";

const Form = ({ getCity }) => {
  const [city, setCity] = React.useState("");
  const submit = e => {
    if (city === "undefined" || city.trim() === "") {
      return alert("Please type a valid input");
    } else {
      e.preventDefault();
      getCity(city);
      setCity(" ");
    }
  };

  return (
    <div id="form-area">
      <input
        id="input-area"
        placeholder="Search for a city"
        value={city}
        required
        onChange={e => {
          setCity(e.target.value);
        }}
      />
      <button id="submit-button" onClick={submit}>
        Search
      </button>
    </div>
  );
};

export default Form;