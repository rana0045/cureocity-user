import { connectionToMonogoDB } from "@/lib/mongodb";
import UserPackages from "@/models/userPackages"; // Assuming you have a model for UserPackages

const handler = async (req, res) => {
    try {
        await connectionToMonogoDB();

        if (req.method === 'POST') {
            if (!req.body) return res.status(400).json({ error: "No data found" });

            const { userId, categoryName, packageName, packageDetails, packageId } = req.body;

            if (!userId || !categoryName || !packageName || !packageDetails || !packageId) {
                return res.status(400).json({ error: "Invalid data. Please provide all required fields." });
            }

            try {
                const userPackageData = {
                    userId,
                    categoryName,
                    packageName,
                    packageDetails,
                    packageId,

                };

                const newUserPackage = new UserPackages(userPackageData);

                const savedUserPackage = await newUserPackage.save();
                console.log('UserPackage saved to the database:', savedUserPackage);

                return res.status(201).json({
                    success: true,
                    message: "UserPackage saved successfully",
                    userPackage: savedUserPackage,
                });
            } catch (error) {
                console.error('Error saving UserPackage:', error.message);
                return res.status(500).json({ error: "Error saving UserPackage to the database" });
            }
        } else {
            return res.status(405).json({ error: "Bad request method" });
        }
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        return res.status(500).json({ error: "Error connecting to the database" });
    }
};

export default handler;
