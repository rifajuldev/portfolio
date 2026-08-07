import { model, Model, models, Schema } from 'mongoose'

export interface IBlog {
  _id: string
  tag: string
  img_url: string
  date: Date
  read_time: string
  title: string
  desc: string
  link: string
}

const blogSchema = new Schema<IBlog>(
  {
    tag: { type: String, required: true },
    img_url: { type: String, required: true },
    date: { type: Date, default: Date.now },
    read_time: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
)

const Blog: Model<IBlog> = models?.Blog || model<IBlog>('Blog', blogSchema)

export default Blog
