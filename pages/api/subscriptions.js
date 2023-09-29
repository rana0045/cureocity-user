// Import required modules and models
import { connectionToMonogoDB } from "@/lib/mongodb";
import User from "@/models/user";

const handler = async (req, res) => {

    try {


        // Connect to the MongoDB database
        await connectionToMonogoDB();

        if (req.method === "POST") {
            // Extract package details from the request body
            const { userId, packageId, packageName, packageDetails } = req.body;

            // Find the user by their ID
            const user = await User.findById(userId);


            // Check if the user exists
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Ensure that the user.subscriptions array is initialized
            if (!user.subscriptions) {
                user.subscriptions = [];
            }

            // Prepare the new subscription object
            const newSubscription = {
                packageId,
                packageName,
                packageDetails,
                purchasedAt: new Date(),
            };

            // Add the new subscription to the user's subscriptions array
            user.subscriptions.push(newSubscription);

            // Save the updated user document
            const savedUser = await user.save();
            console.log('User document saved:', savedUser);

            return res.status(201).json({
                success: true,
                message: "Package subscription added successfully",
                user: savedUser,
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
