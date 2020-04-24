import * as mongoose from "mongoose";
import PostSchema from "../schemas/PostsSchema";
import SessionSchema from "../schemas/SessionSchema";

class PostsRepository {
  private model = mongoose.model("Posts", PostSchema);
  private session = mongoose.model("Session", SessionSchema);

  async create(req) {
    const { tags, title, content } = req.body;
    const { filename } = req.file;
    const { user_id } = req.headers;

    const user = await this.session.findById(user_id);

    if (!user) {
      return "user not found";
    }

    const post = await this.model.create({
      user: user_id,
      thumbnail: filename,
      title: title,
      tags: tags.split(",").map((tag) => tag.trim()),
      content: content
    });

    return post;
  }

  update(_id, spot) {
    const updateUser = (<any>Object).assign({}, spot);
    return this.model.findByIdAndUpdate(_id, updateUser, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndRemove(_id);
  }

  async get(query) {
    console.log(query)
    const posts = await this.model.find({});

    return posts;
  }
}

export default new PostsRepository();
