import React, { useRef } from "react";

export default function Hook() {
  const name = useRef();
  const pass = useRef();

  function handlesubmit() {
    const userName = name.current.value;
    const userPass = pass.current.value;

    alert(`${userName} \n${userPass}`);
  }

  // function firstname() {
  //   return "sharif";
  // }
  // function lastname() {
  //   return "patwary";
  // }

  // function getname() {
  //   return `${firstname()} ${lastname()}`;
  // }
  // getname();

  // function sum(a) {
  //   console.log(a);
  // }
  // function higherordefunction(value, callback) {
  //   callback(value);
  // }
  // higherordefunction(6, sum);
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">
          name
          <input type="text" ref={name} />1
        </label>
        <label htmlFor="">
          password
          <input type="text" ref={pass} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
