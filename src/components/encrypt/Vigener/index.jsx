import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../../../styles";
import { vigenerEncrypt } from "../../../utils/encript";

const Vigener = ({
  message,
  handleMessageChange,
  currentAbt,
  handleResultChange,
}) => {
  const [key, setKey] = useState("KEY");
  const a = 1;
  const styles = useStyles();

  useEffect(() => {
    handleResultChange(vigenerEncrypt(message, key, currentAbt));
  }, [message, currentAbt, key]);

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
        label="Ключ"
        value={key}
        onChange={(event) => setKey(event.target.value.toUpperCase())}
        className={styles.input}
      />
    </div>
  );
};

export default Vigener;
