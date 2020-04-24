import * as mongoose from 'mongoose';
import PostSchema from '../schemas/PostsSchema';

class DashboardRepository {
    private model = mongoose.model('Post', PostSchema);

    async show() {

        const response = await this.model.find({});

        return response;
    }
}


export default new DashboardRepository;
