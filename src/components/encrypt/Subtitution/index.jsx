import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { englishAlphabet, russianAlphabet } from "../../../alphabet";
import { substitutionEncrypt } from "../../../utils/encript";
import { useStyles } from "../../../styles";

const Substitution = ({
  message,
  handleMessageChange,
  currentAbt,
  handleResultChange,
}) => {
  const [shift, setShift] = useState(2);

  const styles = useStyles();

  useEffect(() => {
    handleResultChange(substitutionEncrypt(message, shift, currentAbt));
  }, [message, currentAbt, shift]);

  return (
    <div className={styles.methodWrapper}>
      <TextField
        id="standard-basic"
        label="Input"
        value={message}
        onChange={(event) => {
          handleMessageChange(event);
        }}
        className={styles.input}
        color="primary"
        autoFocus
        multiline
      />

      <TextField
        id="standard-basic"
        label="Сдвиг"
        value={shift}
        type="number"
        onChange={(event) =>
          setShift(event.target.value ? +event.target.value : null)
        }
        onBlur={() => setShift(shift % currentAbt.length)}
        className={styles.input}
      />
    </div>
  );
};

export default Substitution;
