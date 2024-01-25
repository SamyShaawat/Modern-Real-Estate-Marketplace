import { time, timeStamp } from "console";
import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timeStamp: true });

const User = Mongoose.model('User', userSchema);

export default User;