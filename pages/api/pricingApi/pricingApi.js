// pages/api/pricingApi.js
import { connectionToMonogoDB } from "@/lib/mongodb";
import PricingCategory from "@/models/pricing";

const handler = async (req, res) => {
    try {
        await connectionToMonogoDB();

        if (req.method === "POST") {
            if (!req.body) return res.status(400).json({ error: "No data found" });

            // Get the request body data
            const { category, packages } = req.body;

            // Check if the category exists
            let existingCategory = await PricingCategory.findOne({ name: category });

            if (!existingCategory) {
                // Create a new category if it doesn't exist

                existingCategory = new PricingCategory({ name: category });
            }

            // Update or add the packages to the category
            existingCategory.packages = packages;

            // Save the category to the database
            const savedCategory = await existingCategory.save();

            return res.status(201).json({
                success: true,
                message: "Pricing categories and packages saved successfully",
                category: savedCategory,
            });
        } else {
            return res.status(405).json({ error: "Bad request method" });
        }
    } catch (error) {
        console.error("Error saving pricing data:", error.message);
        return res.status(500).json({ error: "Error saving pricing data" });
    }
};

export default handler;
