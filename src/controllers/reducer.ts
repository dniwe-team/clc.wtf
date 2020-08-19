function randomString(l: number): string {
  let s: string = '';
  function randomchar(): String {
    const n : number = Math.floor(Math.random() * 62);
    if (n < 10) return n.toString(); // 1-10
    if (n < 36) return String.fromCharCode(n + 55); // A-Z
    return String.fromCharCode(n + 61); // a-z
  }
  while (s.length < l) s += randomchar();
  return s;
}


function reducer(str: string): string {
  const largeLink : string = str;
  // Code to reduce the link here
  const reducedLink : string = `http://www.${randomString(16)} ${largeLink}`;
  return JSON.stringify({ rcdlink: `${reducedLink}` });
}

export default reducer;
