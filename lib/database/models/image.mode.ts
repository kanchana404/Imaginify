import { transformationTypes } from "@/constants";
import { url } from "inspector";
import { model, models, Schema } from "mongoose";
import { config, title } from "process";

export interface IImage extends Document {
    title: string;
    transformationTypes: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object; // or specific type for config
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstname: string;
        lastname: string;
    
    }; // Assuming IUser is your User interface
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationTypes: {type: [String], required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: String, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl : {type: url},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    auther:{type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;