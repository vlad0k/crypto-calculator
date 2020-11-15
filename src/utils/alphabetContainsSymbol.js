import { englishAlphabet } from "../alphabet";

export const alphabetContainsSymbol = (
  symbol = "",
  alphabet = englishAlphabet
) => alphabet.indexOf(symbol) !== -1;
