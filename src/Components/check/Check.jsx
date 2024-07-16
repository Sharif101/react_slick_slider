import React, { useState } from "react";
import useDebounce from "../Hooks/Debouncing";

export default function Check() {
  const [name, setName] = useState("");
  let debounchname = useDebounce(name, 800);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" name="" id="" />
      <input type="email" />
    </div>
  );
}
