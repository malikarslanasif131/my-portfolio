import ClientInfo from "../models/infoModel.js";

export const saveClientInfo = async (req, res) => {
  try {
    const clientInfo = req.body;
    const newClientInfo = new ClientInfo(clientInfo);
    await newClientInfo.save();
    res.status(200).json({ message: "Client information saved successfully" });
  } catch (error) {
    console.error("Error saving client information:", error);
    res.status(500).json({ message: "Server error" });
  }
};
