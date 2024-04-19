import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        required: true
    },
    image: {
        public_id: String,
        url: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cratedAt: {
        type: Date,
        default: Date.now,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            comment: {
                type: String,
                required: true
            },
        },
    ],


})
mongoose.models = {};
export const Post = mongoose.model("Post", postSchema)