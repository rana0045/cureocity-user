// models/pricing.js
import { Schema, model, models } from "mongoose";

const packageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    details: String,
});

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    packages: [packageSchema],
});

const PricingCategory = models.PricingCategory || model("PricingCategory", categorySchema);

export default PricingCategory;
