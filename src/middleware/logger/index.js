const logger = (req, res, next) => {
  const msg = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
};

module.exports = logger;
