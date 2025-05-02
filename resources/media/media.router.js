import express from "express";
import multer from "multer";
import { adminOnly } from "../../middleware.js";
import { addMedia, deleteMedia, getMedia } from "./media.controller.js";

const upload = multer();

export const mediaRouter = express
  .Router()
  .get("/:id", getMedia)
  .post("/", adminOnly, upload.single("media"), addMedia)
  .delete("/:id", adminOnly, deleteMedia);
