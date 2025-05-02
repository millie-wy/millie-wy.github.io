import bcrypt from "bcrypt";
import { AdminModel } from "./admin.model.js";

export const signIn = async (req, res) => {
  const admin = await AdminModel.findOne({ admin: req.body.admin }).select(
    "+password"
  );
  if (!admin) return res.status(401).json("Incorrect Admin Username");

  const matchPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!matchPassword) return res.status(401).json("Incorrect Password");

  admin.password = undefined;
  req.session.user = admin;
  return res.status(200).json("Welcome back Millie!");
};

export const signOut = async (req, res) => {
  if (!req.session.user) return res.status(401).json("You are not logged in.");
  req.session = null;
  return res.status(200).json("See you Millie.");
};

export const getLoginSession = async (req, res) => {
  if (!req.session?.user) return res.status(401).json("You are not logged in.");
  const admin = await AdminModel.findOne({ _id: req.session.user._id });
  return res.status(200).json(admin);
};
