import mongoose from "mongoose";
import { Readable } from "stream";
import { bucket } from "./media.model.js";
const { Types } = mongoose;

export const getMedia = async (req, res) => {
  const _id = new Types.ObjectId(req.params.id);
  const file = await bucket.find({ _id }).next();
  if (!file || !file.contentType)
    return res.status(404).json(`File with id "${_id}" does not exist.`);

  res.setHeader("Content-Type", file.contentType);
  const readableStream = bucket.openDownloadStream(_id);
  readableStream.pipe(res);
};

export const addMedia = async (req, res) => {
  const { originalname, mimetype, buffer } = req.file;
  const readableStream = Readable.from(buffer);
  const writeableStream = bucket.openUploadStream(originalname, {
    contentType: mimetype,
  });

  readableStream
    .pipe(writeableStream)
    .on("finish", (file) => res.status(201).json(file));

  readableStream.on("error", () => res.status(500).json("Error" + error));
};

export const deleteMedia = () => {
  console.log("delete media"); // not working on for now as UI doesnt exist
};
