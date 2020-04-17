"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const configs_1 = require("../config/configs");
const PostSchema = new mongoose.Schema({
    thumbnail: String,
    title: String,
    tags: [String],
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    toJSON: {
        virtuals: true,
    },
});
PostSchema.virtual("thumbnail_url").get(function () {
    return `http://${configs_1.ip}:${configs_1.port}/files/${this.thumbnail}`;
});
exports.default = PostSchema;
