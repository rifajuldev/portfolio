import { model, Model, models, Schema } from 'mongoose'

export interface IHero {
  _id: string
  headline: string
  first_title: string
  middle_title: string
  hero_img_url: string
  hero_pdf_url: string
  last_title: string
  desc: string
  desc_highlighted_text: string
}

const heroSchema = new Schema<IHero>(
  {
    headline: { type: String, required: true },
    first_title: { type: String, required: true },
    middle_title: { type: String, required: true },
    hero_img_url: { type: String, required: true },
    hero_pdf_url: { type: String, required: true },
    last_title: { type: String, required: true },
    desc: { type: String, required: true },
    desc_highlighted_text: { type: String, required: true },
  },
  { timestamps: true }
)

const Hero: Model<IHero> = models?.Hero || model<IHero>('Hero', heroSchema)

export default Hero
