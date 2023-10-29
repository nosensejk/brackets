module.exports = function check(str, bracketsConfig) {

  const dlina = str.length / 2;
  const brackets = bracketsConfig.flat().join().replaceAll(",", "").match(/.{1,2}/g);

  for (let i = 0; i < dlina; i++) {
    for (let bracket of brackets) {
      if (str.includes(bracket)) {
        str = str.replace(bracket, "");
      }
    }
  }
  if (str) return false;
  else return true;
  
}
