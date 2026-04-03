module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) return res.sendStatus(401);

  const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64')
    .toString()
    .split(':');

  if (
    user === process.env.ADMIN_USERNAME &&
    pass === process.env.ADMIN_PASSWORD
  ) {
    next();
  } else {
    res.sendStatus(401);
  }
};