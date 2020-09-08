import React, { useState } from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Date from "../datepicker";
import Container from "@material-ui/core/Container";

const Formulario = () => {
  const [formInputs, formInputsHandler] = useState({
    userName: "",
    email: "",
    password: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
  });

  const onInputChange = (e) => {
    formInputsHandler({ ...formInputs, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };

  return (
    <form autoComplete="off" className="formulario" onSubmit={formSubmit}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required={true}
              id="outlined-basic"
              label="Nome de usuário"
              variant="outlined"
              fullWidth
              margin="normal"
              name="userName"
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-basic"
              label="Informação 1"
              variant="outlined"
              fullWidth
              margin="normal"
              name="info1"
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-basic"
              label="Informação 2"
              variant="outlined"
              fullWidth
              margin="normal"
              name="info2"
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-basic"
              label="Informação 3"
              variant="outlined"
              fullWidth
              margin="normal"
              name="info3"
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-basic"
              label="Informação 4"
              variant="outlined"
              fullWidth
              margin="normal"
              name="info4"
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <Date />
          </Grid>
          <Grid item xs={12}>
            <input type="submit" value="submit" />
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Formulario;
