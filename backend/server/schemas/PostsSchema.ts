import * as mongoose from "mongoose";
import { port, ip } from "../config/configs";

const PostSchema = new mongoose.Schema(
  {
    thumbnail: String,
    title: String,
    tags: [String],
    content: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

PostSchema.virtual("thumbnail_url").get(function () {
  return `http://${ip}:${port}/files/${this.thumbnail}`;
});

export default PostSchema;
