import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import { englishAlphabet, russianAlphabet } from "./alphabet";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import Substitution from "./components/Subtitution";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Vigener from "./components/Vigener";

const encryptComponents = {};

const App = () => {
  const [result, setResult] = useState("");
  const [currentAbt, setCurrentAbt] = useState(russianAlphabet);
  const [message, setMessage] = useState("");
  const [currentMethod, setCurrentMethod] = useState("substitution");

  const handleAbtChange = (event) => setCurrentAbt(event.target.value);

  const handleMessageChange = ({ target: { value } }) => {
    setMessage(value.toUpperCase());
  };

  const handleMethodChange = ({ target: { value } }) => setCurrentMethod(value);

  const styles = useStyles();
  const handleResultChange = (value) => setResult(value);

  return (
    <div className="App">
      <Header />
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={[styles.paper, styles.methodWrapper]}>
              <FormControl>
                <InputLabel id="method-label">Метод шифрования</InputLabel>
                <Select
                  labelId="method-label"
                  id="method-label"
                  value={currentMethod}
                  onChange={handleMethodChange}
                  className={styles.input}
                >
                  <MenuItem value={"substitution"}>Метод Перестановки</MenuItem>
                  <MenuItem value={"vigener"}>Метод Виженера</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="language-select-label">Алфавит</InputLabel>
                <Select
                  labelId="language-select-label"
                  id="language-select-label"
                  value={currentAbt}
                  onChange={handleAbtChange}
                  className={styles.input}
                >
                  <MenuItem value={russianAlphabet}>Русский</MenuItem>
                  <MenuItem value={englishAlphabet}>Английский</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={styles.paper}>
              {currentMethod === "substitution" && (
                <Substitution
                  message={message}
                  handleMessageChange={handleMessageChange}
                  currentAbt={currentAbt}
                  handleAbtChange={handleAbtChange}
                  handleResultChange={handleResultChange}
                />
              )}
              {currentMethod === "vigener" && (
                <Vigener
                  message={message}
                  handleMessageChange={handleMessageChange}
                  currentAbt={currentAbt}
                  handleAbtChange={handleAbtChange}
                  handleResultChange={handleResultChange}
                />
              )}
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={[styles.paper, styles.result]}>
              <Typography color="secondary" variant="h6">
                Результат:
              </Typography>
              <Typography color="primary" variant="h4">
                {result}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
