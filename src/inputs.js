import React from "react";
import "./App.scss";

import MaterialUi from "./material-ui";
import Material from "./material";
import DatePicker from "./datepicker";
import Radio from "./radio";
import Select from "./select";
import Currency from "./currency";
import InputMask from "./inputMask";
import Text from "./text";

export default function Inputs() {
  return (
    <div className="app">
      <h1>tables example</h1>
      <MaterialUi />
      <Material />
      <h1>Inputs Material-UI</h1>
      <div className="app__inputs">
        <DatePicker />
        <Radio />
        <Select />
        <Currency />
        <InputMask />
        <Text />
      </div>
    </div>
  );
}
