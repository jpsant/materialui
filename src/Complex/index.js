import React from "react";
import Grid from "@material-ui/core/Grid";
import NewForm from "../NewForm";
import "./styles.scss";

const Complex = () => {
  return (
    <div className="complex">
      <Grid container xs={12}>
        <div className="complex__navbar">
          <p>navbar</p>
        </div>
      </Grid>
      <Grid container direction="row" alignItems="stretch">
        <Grid container xs={2}>
          <Grid container direction="column">
            <div className="complex__leftMenu">
              <h2>left navbar</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={10}>
          <div className="complex__rightContainer">
            <h1>NOME/NÚMERO DO CONTRATO</h1>
            <hr />
            <div className="complex__rightContainer__content">
              <NewForm />
            </div>
            <hr />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Complex;
