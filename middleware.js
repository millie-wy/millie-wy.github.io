export const adminOnly = (req, res, next) => {
  if (!req.session.user.isAdmin) return res.status(401).json("Admin Only");
  next();
};
