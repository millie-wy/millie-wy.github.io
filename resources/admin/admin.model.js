import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  admin: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  isAdmin: { type: Boolean, default: false },
});

export const AdminModel = mongoose.model("admin", adminSchema);
