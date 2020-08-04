const randomString = (L) => {
  let s = '';
  const randomchar = () => {
    const n = Math.floor(Math.random() * 62);
    if (n < 10) return n; // 1-10
    if (n < 36) return String.fromCharCode(n + 55); // A-Z
    return String.fromCharCode(n + 61); // a-z
  };
  while (s.length < L) s += randomchar();
  return s;
};


const reducer = (str) => {
  const largeLink = str.link;
  // Code to reduce the link here
  const reducedLink = `http://www.${randomString(16)} ${largeLink}`;
  return JSON.stringify({ rcdlink: `${reducedLink}` });
};
module.exports = reducer;
