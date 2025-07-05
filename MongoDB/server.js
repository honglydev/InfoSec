import express from "express"
import mongoose from "mongoose";
import User from "./Model/User.js"
const app = express();

const uri = "mongodb+srv://honglydeveloper:W3aYn8kkAYK9iWjb@cluster0.4gx10.mongodb.net/MongooseDB";

mongoose.connect(uri);

const db = mongoose.connection;

db.once('open', function() {
   console.log("MongooseDB was connected.");
})

db.on('error', () => {
    console.log("MongooseDB error.");
})

const user = new User({
     name:"Hongly",
     email:"hongly.dev@gmail.com",
     age:25
})

const userData = await User.findOne();

console.log(userData);



app.listen(process.env.port || 3000, () => {
    console.log("Server starting and listen to port 3000...");

});