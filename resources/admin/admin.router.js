import express from "express";
import { getLoginSession, signIn, signOut } from "./admin.controller.js";

export const adminRouter = express
  .Router()
  .post("/login", signIn)
  .delete("/logout", signOut)
  .get("/login", getLoginSession);
