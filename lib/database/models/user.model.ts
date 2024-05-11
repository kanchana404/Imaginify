import { transformationTypes } from "@/constants";
import { url } from "inspector";
import { model, models, Schema } from "mongoose";
import { config, title } from "process";


const UserSchema = new Schema({
    clerkId : {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
})

const User = models?.User || model('Image', UserSchema);

export default User;