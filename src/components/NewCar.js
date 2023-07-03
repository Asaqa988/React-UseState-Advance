import React from "react";

import "../components/NewCar.css";

const firstInput = (event) => {
  console.log(event.target.value);
};

function NewCar() {
  return (
    <div>
      <form>
        <label> Please enter the Car Name </label>
        <br />
        <input onChange={firstInput} type="text" />
        <br />
        <br />
        <br />

        <label> Please enter the Car Price </label>
        <br />
        <input type="number" />
        <br />
        <br />
        <br />

        <label> Please upload the Car Image </label>
        <br />
        <input type="text" />
        <br />
        <br />
        <br />
        <button type="submit"> Submit Information </button>
        <br />

        <button type="reset"> reset Information </button>
      </form>
    </div>
  );
}

export default NewCar;
