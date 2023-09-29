import { connectionToMonogoDB } from "@/lib/mongodb";
import User from "@/models/user";
import mongoose from "mongoose";

const handler = async (req, res) => {
    try {
        await connectionToMonogoDB();

        if (req.method === "GET") {
            // Assuming you have the userId in the request query or params
            const { userId } = req.query;

            // Validate userId as a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).json({ error: "Invalid userId" });
            }

            // Find the user by userId
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            return res.status(200).json({
                success: true,
                subscriptions: user.subscriptions,
            });
        } else {
            return res.status(405).json({ error: "Bad request method" });
        }
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        return res.status(500).json({ error: "Error connecting to the database" });
    }
};

export default handler;
