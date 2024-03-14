import { Document, Schema, model, models } from 'mongoose';

export interface IImage extends Document {
  title: string;
  publicId: string;
  transformationType: string;
  width: number;
  height: number;
  config?: any;
  secureUrl?: string;
  transformationURL: string;
  aspectRatio?: string;
  prompt?: string;
  color?: string;
  author: {
    _id: string;
    firstName?: string;
    lastName?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}


const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  transformationUrl: { type: URL },
  config: { type: Object },
  width: { type: Number },
  height: { type: Number },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// create a model from a schema
const Image = models?.Image || model('Image', ImageSchema);

export default Image;
