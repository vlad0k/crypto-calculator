import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import { englishAlphabet, russianAlphabet } from "./alphabet";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import SubstitutionEncrypt from "./components/encrypt/Subtitution";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import VigenerEncrypt from "./components/encrypt/Vigener";
import StreamingEncrypt from "./components/encrypt/Streaming";
import { substitutionDecrypt } from "./utils/decrypt";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import SubstitutionDecrypt from "./components/decrypt/Subtitution";
import VigenerDecrypt from "./components/decrypt/Vigener";
import StreamingDecrypt from "./components/decrypt/Streaming";

const App = () => {
  const [result, setResult] = useState("");
  const [currentAbt, setCurrentAbt] = useState(russianAlphabet);
  const [message, setMessage] = useState("");
  const [currentMethod, setCurrentMethod] = useState("substitution");
  const [tabValue, setTabValue] = useState(0);

  const handleAbtChange = (event) => setCurrentAbt(event.target.value);

  const handleMessageChange = ({ target: { value } }) => {
    setMessage(value.toUpperCase());
  };

  const handleTabChange = (event, value) => {
    setTabValue(value);
  };
  const handleMethodChange = ({ target: { value } }) => setCurrentMethod(value);

  const styles = useStyles();
  const handleResultChange = (value) => setResult(value);

  console.log(substitutionDecrypt());

  return (
    <div className="App">
      <Header />

      <Box className={styles.box}>
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
              <MenuItem value={"streaming"}>Последовательный метод</MenuItem>
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
      </Box>

      <Box className={styles.box}>
        <AppBar position="static">
          <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Зашифровать" />
            <Tab label="Расшифровать" />
          </Tabs>
        </AppBar>

        <Grid container spacing={3} className={styles.box}>
          <Grid item sm={6} xs={12}>
            {tabValue === 0 && (
              <Paper className={styles.paper}>
                {currentMethod === "substitution" && (
                  <SubstitutionEncrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    currentAbt={currentAbt}
                    handleResultChange={handleResultChange}
                  />
                )}
                {currentMethod === "vigener" && (
                  <VigenerEncrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    currentAbt={currentAbt}
                    handleResultChange={handleResultChange}
                  />
                )}
                {currentMethod === "streaming" && (
                  <StreamingEncrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    handleResultChange={handleResultChange}
                  />
                )}
              </Paper>
            )}

            {tabValue === 1 && (
              <Paper className={styles.box}>
                {currentMethod === "substitution" && (
                  <SubstitutionDecrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    currentAbt={currentAbt}
                    handleResultChange={handleResultChange}
                  />
                )}
                {currentMethod === "vigener" && (
                  <VigenerDecrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    currentAbt={currentAbt}
                    handleResultChange={handleResultChange}
                  />
                )}
                {currentMethod === "streaming" && (
                  <StreamingDecrypt
                    message={message}
                    handleMessageChange={handleMessageChange}
                    currentAbt={currentAbt}
                    handleResultChange={handleResultChange}
                  />
                )}
              </Paper>
            )}
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
