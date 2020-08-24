const findVowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
