import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    link: String,
    password: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;