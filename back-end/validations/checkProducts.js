const validateProduct = (req, res, next) => {
  let errorMsg = [];
  if (req.body.name === undefined) {
    errorMsg.push("Name is Required");
  }
  if (typeof req.body.is_featured !== "boolean") {
    errorMsg.push("is_featured must be a boolean");
  }

  if (errorMsg.length > 0) {
    res.status(400).json({ error: errorMsg.join(", ") });
  } else {
    next();
  }
};

module.exports = { validateProduct };
