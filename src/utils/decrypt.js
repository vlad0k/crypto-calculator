import { alphabetContainsSymbol } from "./alphabetContainsSymbol";
import { englishAlphabet, russianAlphabet } from "../alphabet";

export const substitutionDecrypt = (
  message = "ЦВОКНКБ КОБ",
  shift = 2,
  alphabet = russianAlphabet
) => {
  const messageCharArray = message.toLowerCase().split("");

  return messageCharArray
    .map((symbol) => {
      const symbolPositionInAlphabet = alphabet.indexOf(symbol);

      if (!alphabetContainsSymbol(symbol, alphabet)) {
        console.log("+", symbol);
        return symbol;
      }

      const alphabetDecryptedPosition =
        (symbolPositionInAlphabet - shift) % alphabet.length;

      return alphabetDecryptedPosition < 0
        ? alphabet[alphabet.length + alphabetDecryptedPosition]
        : alphabet[alphabetDecryptedPosition];
    })
    .join("")
    .toUpperCase();
};

export const vigenerDecrypt = (
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
        (symbolPositionInAlphabet + alphabet.length - keyNumerated[index]) %
          alphabet.length
      ];
    })
    .join("")
    .toUpperCase();
};

export const streamingDecrypt = (
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

  const result = message.map((m, index) =>
    ((parseInt(m, 16) - parseInt(key[index], 16)) % 16).toString(16)
  );
  console.log(result);
  return result.includes("NaN") ? "" : result.join(", ").toUpperCase();
};
