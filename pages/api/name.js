import Nameschema from "@/models/name";
import { connectionToMonogoDB } from "@/lib/mongodb";

const handler = async (req, res) => {
    try {
        await connectionToMonogoDB();

        if (req.method === "POST") {
            if (!req.body) {
                return res.status(400).json({ error: "Empty request body" });
            }

            const { name } = req.body;
            const nameExists = await Nameschema.find({ name });

            if (nameExists.length > 0) {
                return res.status(409).json({ error: "Name already exists" });
            }

            try {
                const data = await Nameschema.create({ name });

                const n = {
                    name: data.name
                };

                res.status(201).json({
                    success: true,
                    n
                });
            } catch (error) {
                console.error("Error creating name:", error);
                res.status(500).json({ error: "Internal server error" });
            }
        } else {
            res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default handler