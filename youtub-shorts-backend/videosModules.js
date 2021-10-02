import mongoose from 'mongoose';

const schema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    liked: Number,
    messages: String,
})

export default mongoose.model('videos', schema);