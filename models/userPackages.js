import { Schema, model, models } from "mongoose";

const UserPackagesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    packageId: {
        type: Schema.Types.ObjectId,
        ref: "Packages",
        required: true,
    },

    purchasedAt: {
        type: Date,
        default: Date.now,
    },
});

const UserPackages = models.UserPackages || model("UserPackages", UserPackagesSchema);

export default UserPackages;
