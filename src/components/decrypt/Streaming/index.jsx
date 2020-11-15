import React, { useEffect, useState } from "react";
import { useStyles } from "../../../styles";
import { streamingEncrypt } from "../../../utils/encript";
import TextField from "@material-ui/core/TextField";
import { streamingDecrypt } from "../../../utils/decrypt";

const Streaming = ({ message, handleMessageChange, handleResultChange }) => {
  const [key, setKey] = useState("");
  const styles = useStyles();

  useEffect(() => {
    handleResultChange(
      streamingDecrypt(message.split(/,*\s*/), key.split(","))
    );
  }, [message, key]);

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Input"
        value={message}
        onChange={handleMessageChange}
        className={styles.input}
        color="primary"
        autoFocus
        multiline
      />

      <TextField
        id="standard-basic"
        label="Ключ"
        value={key}
        onChange={(event) => setKey(event.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default Streaming;
