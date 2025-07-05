import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

const User = model("User", userSchema)

export default User;
