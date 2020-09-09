import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function NewForm() {
  const [formInputs, formInputsHandler] = useState({
    code: "",
    internalCode: "",
    status: "",
    company: "",
    project: "true",
    reclamante: "",
    reclamada: "",
    reclamanteValue: "",
    reclamanteLiquid: "",
    deadline: "",
    finalDeadline: "true",
    signupDate: "",
    alterationDate: "",
    deliverDate: "",
    triagemDate: "",
  });

  const inputChange = (e) => {
    formInputsHandler({ ...formInputs, [e.target.name]: e.target.value });
  };

  return (
    <form autoComplete={"off"}>
      <Grid container direction="row" xs={12} spacing={2}>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Código"
            variant="outlined"
            fullWidth
            margin="normal"
            name="code"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Código interno"
            variant="outlined"
            fullWidth
            margin="normal"
            name="internalCode"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            fullWidth
            margin="normal"
            name="status"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Empresa"
            variant="outlined"
            fullWidth
            margin="normal"
            name="company"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl margin="normal" component="fieldset">
            <FormLabel component="legend">Projeto</FormLabel>
            <RadioGroup
              aria-label="project"
              name="project"
              value={formInputs.project}
              onChange={(e) => inputChange(e)}
            >
              <Grid container direction="row">
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="Não"
                />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Reclamante"
            variant="outlined"
            fullWidth
            margin="normal"
            name="reclamante"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Reclamada"
            variant="outlined"
            fullWidth
            margin="normal"
            name="reclamada"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Valor reclamante"
            variant="outlined"
            fullWidth
            margin="normal"
            name="reclamanteValue"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Líquido reclamante"
            variant="outlined"
            fullWidth
            margin="normal"
            name="reclamanteLiquid"
            onChange={(e) => inputChange(e)}
          />
        </Grid>
        <Grid item xs={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Prazo"
              value={formInputs.date}
              onChange={(e) => inputChange(e)}
              InputAdornmentProps={{ position: "start" }}
              inputVariant="outlined"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={2}>
          <FormControl margin="normal" component="fieldset">
            <FormLabel component="legend">Prazo final</FormLabel>
            <RadioGroup
              aria-label="finalDeadline"
              name="finalDeadline"
              value={formInputs.finalDeadline}
              onChange={(e) => inputChange(e)}
            >
              <Grid container direction="row">
                <FormControlLabel
                  value={"true"}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value={"false"}
                  control={<Radio />}
                  label="Não"
                />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Data cadastro"
              value={formInputs.date}
              onChange={(e) => inputChange(e)}
              InputAdornmentProps={{ position: "start" }}
              inputVariant="outlined"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Datan"
              value={formInputs.date}
              onChange={(e) => inputChange(e)}
              InputAdornmentProps={{ position: "start" }}
              inputVariant="outlined"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </form>
  );
}
