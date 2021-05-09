import React from "react";
import { Me } from "./children/Me";
import { He } from "./children/He";

export function GoodMorning(props) {
  return (
    <div>
      Good morning,
      {/* способ описания компонента */}
      {React.createElement(Me, { ...props, age: "34" })} Look at the time:{" "}
      {new Date().toLocaleTimeString()}
      <hr />
      Best regards,<He name="Guest" />
    </div>
  );
}
