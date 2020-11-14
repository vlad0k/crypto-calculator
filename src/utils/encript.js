import { englishAlphabet } from "../alphabet";

const alphabetContainsSymbol = (symbol = "", alphabet = englishAlphabet) =>
  alphabet.indexOf(symbol) === -1 ? false : true;

export const substitutionEncrypt = (message = "", shift = 0, alphabet = []) => {
  const messageCharArray = message.toLowerCase().split("");

  return messageCharArray
    .map((symbol) => {
      const symbolPositionInAlphabet = alphabet.indexOf(symbol);

      if (!alphabetContainsSymbol(symbol, alphabet)) {
        return symbol;
      }

      return alphabet[(symbolPositionInAlphabet + shift) % alphabet.length];
    })
    .join("")
    .toUpperCase();
};

export const vigenerEncrypt = (
  message = "MESSAGE",
  key = "KEY",
  alphabet = englishAlphabet
) => {
  if (key.length === 0) {
    return "";
  }

  const keyNumerated = key
    .repeat(Math.ceil(message.length / key.length))
    .toLowerCase()
    .split("")
    .map((letter) =>
      alphabetContainsSymbol(letter, alphabet) ? alphabet.indexOf(letter) : "#"
    );

  if (keyNumerated.includes("#")) {
    console.log(keyNumerated);
    return "";
  }

  return message
    .toLowerCase()
    .split("")
    .map((symbol, index) => {
      const symbolPositionInAlphabet = alphabet.indexOf(symbol);

      if (!alphabetContainsSymbol(symbol, alphabet)) {
        return symbol;
      }

      return alphabet[
        (symbolPositionInAlphabet + keyNumerated[index]) % alphabet.length
      ];
    })
    .join("")
    .toUpperCase();
};

const streamingEncrypt = (
  message = [2, 7, 9, "D", "A", 3, 8, "D", "C", 1, "A"],
  key = [7, 9, "A", 3, 8, 4, "C", "B", 1, 5, 4]
) => {
  if (
    message.length !== key.length ||
    message.length === 0 ||
    key.length === 0
  ) {
    return "";
  }

  return message
    .map((m, index) =>
      ((parseInt(m, 16) + parseInt(key[index], 16)) % 16).toString(16)
    )
    .join(", ")
    .toUpperCase();
};

console.log(streamingEncrypt());
