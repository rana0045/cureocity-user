import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\. -] ?\w+)*s\w+([\. -] ?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    username: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less than 30 characters"]
    },
    mobile: {
        type: String,
        unique: [true, "mobile number is already exist"],
        required: [true, "PHone number is required"],

    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false
    },
    gender: {
        type: String,
        required: [true, "gender filed is requred"]
    },
    subscriptions: {
        type: [
            {
                packageId: {
                    type: Schema.Types.ObjectId,
                    ref: "Packages",
                    required: true,
                },
                packageName: {
                    type: String,
                    required: true,
                },
                packageDetails: String,
                purchasedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        required: [true, ""],
        default: [], // Set default value as an empty array
    },

})


const User = models.User || model("User", UserSchema)



export default User