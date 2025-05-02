import express from "express";
import { sendEmail } from "./contact.controller.js";

export const contactRouter = express.Router().post("/", sendEmail);
