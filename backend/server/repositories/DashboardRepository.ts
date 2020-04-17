import * as mongoose from 'mongoose';
import PostSchema from '../schemas/PostsSchema';

class DashboardRepository {
    private model;

    constructor() {
        this.model = mongoose.model('Post', PostSchema);
    }

    async show(user: object) {

        const response = await this.model.find({});

        return response;
    }
}


export default new DashboardRepository;
