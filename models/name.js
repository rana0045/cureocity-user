import { Schema, model, models } from "mongoose";

// Define a Mongoose schema for the "name" collection
const name = new Schema({
    name: {
        type: String,
        required: [true, "name required "]
    }
});

// Create a Mongoose model named "Nameschema" based on the "name" schema
const Nameschema = models.name || model("name", name);

// Export the Mongoose model
export default Nameschema;
