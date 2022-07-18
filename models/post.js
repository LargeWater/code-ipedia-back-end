import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categorySchema = new mongoose.Schema({
  category: { type: String },
},{
  timestamps: true,
})


const postSchema = new Schema({
  title: {type: String, required: true},
  Code: {type: mongoose.Schema.Types.ObjectId, ref:"Code"},
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"},
  comments: {type: mongoose.Schema.Types.ObjectId, ref:"Comments"},
  category:[categorySchema]
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
