import { model, Model, models, Schema } from 'mongoose'

export interface ISocialContacts {
  _id: string
  facebook_link: string
  twitter_link: string
  linkedin_link: string
  github_link: string
}

const socialContactsSchema = new Schema<ISocialContacts>(
  {
    facebook_link: { type: String, required: true },
    twitter_link: { type: String, required: true },
    linkedin_link: { type: String, required: true },
    github_link: { type: String, required: true },
  },
  { timestamps: true }
)

const SocialContacts: Model<ISocialContacts> =
  models?.SocialContacts || model<ISocialContacts>('SocialContacts', socialContactsSchema)

export default SocialContacts
