import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export default function Mask() {
  const [value, valueChange] = useState("1111");

  return (
    <div>
      <InputMask
        mask="99:99"
        value={value}
        disabled={true}
        onChange={(e) => valueChange(e.target.value)}
      >
        {() => (
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        )}
      </InputMask>
    </div>
  );
}
