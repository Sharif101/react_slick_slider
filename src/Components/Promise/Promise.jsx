import React from "react";

export default function Promise() {
  const promise = new Promise((resolve, reject) => {
    let rslt = 2;
    if (rslt === 2) {
      resolve("success");
    } else {
      reject("faild");
    }
  });

  promise.then((msg) => console.log(`${msg}`));

  return (
    <div>
      <p>pro</p>
    </div>
  );
}
