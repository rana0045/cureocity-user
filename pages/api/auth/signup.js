import { connectionToMonogoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { hash } from "bcryptjs";
import mongoose from "mongoose";

const handler = async (req, res) => {
    try {
        await connectionToMonogoDB(); // Wait for the database connection to be established.

        if (req.method === 'POST') {
            if (!req.body) return res.status(400).json({ error: "Data is not found" });

            const { email, username, mobile, password, gender } = req.body;
            console.log(req.body);
            // Check if the email already exists
            const emailExist = await User.findOne({ email });
            if (emailExist) {
                return res.status(409).json({ error: "User already exists with this email. Please use another email." });
            }

            // Check if the username already exists
            const usernameExist = await User.findOne({ username });
            if (usernameExist) {
                return res.status(409).json({ error: "Username already exists. Please choose a different username." });
            }

            // Check if the mobile already exists
            const mobileExist = await User.findOne({ mobile });
            if (mobileExist) {
                return res.status(409).json({ error: "Mobile number already exists. Please use a different mobile number." });
            }

            if (password.length < 6) {
                return res.status(409).json({ error: "Password must be at least 6 characters long." });
            }

            const hashPassword = await hash(password, 12);

            try {
                const data = await User.create({
                    email,
                    username,
                    mobile,
                    password: hashPassword,
                    gender,
                    subscriptions: [] // Use the provided subscriptions or an empty array if not provided
                });

                const user = {
                    email: data.email,
                    username: data.username,
                    mobile: data.mobile,
                    password: data.password,
                    gender: data.gender,
                    subscriptions: data.subscriptions,
                    _id: data._id,
                };

                return res.status(201).json({
                    success: true,
                    user,
                });
            } catch (error) {
                if (error instanceof mongoose.Error.ValidationError) {
                    const errorMessages = [];
                    for (let field in error.errors) {
                        const msg = error.errors[field].message;
                        errorMessages.push(msg);
                    }
                    return res.status(409).json({ error: "Validation errors", messages: errorMessages });
                }
                return res.status(500).json({ error: "Error creating user" });
            }
        } else {
            res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        // Handle any errors that occurred during database connection
        res.status(500).json({ error: "Error connecting to the database" });
    }
};

export default handler;
