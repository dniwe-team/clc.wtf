const reducer = function (str) {
  const largeLink = str.link;
  // Code to reduce the link here
  const reducedLink = `reduced_link: ${largeLink}`;
  return JSON.stringify({ rcdlink: `${reducedLink}` });
};
module.exports = reducer;
