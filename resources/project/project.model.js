import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    repo: { type: String },
    categories: [{ type: String }],
    tags: [{ type: String }],
    released: { type: String },
    mediaId: { type: Schema.Types.ObjectId, required: true },
    posterId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: "throw",
  }
);

projectSchema.virtual("mediaSrc").get(function () {
  return "/api/media/" + this.mediaId;
});

projectSchema.virtual("posterSrc").get(function () {
  return "/api/media/" + this.posterId;
});

export const ProjectModel = mongoose.model("project", projectSchema);
