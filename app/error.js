const notFoundHandeler = (_req, _res, next) => {
  const error = new Error("Resources Not Found");
  error.status = 404;
  next(error);
};

const errorHandeler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "Something Went Wrong" });
};

module.exports = {
  notFoundHandeler,
  errorHandeler,
};
