import React, { useState } from "react";
import CurrencyInput from "react-currency-input";

export default function Currency() {
  const [state, handler] = useState("0.00");

  const handleChange = (event, maskedvalue, floatvalue) => {
    handler(maskedvalue);
  };

  return (
    <div>
      <CurrencyInput prefix="$" value={state} onChangeEvent={handleChange} />
    </div>
  );
}
