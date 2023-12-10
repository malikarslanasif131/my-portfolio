import Download from "../models/downloadModel.js";

export const downContact = async (req, res) => {
  // console.log("req.body", req.body);
  const { click, ipAddress, userAgent, platform, screenWidth, screenHeight } =
    req.body;

  try {
    let download = new Download({
      click,
      ipAddress,
      userAgent,
      platform,
      screenWidth,
      screenHeight,
    });

    const addData = await download.save();

    return res.status(200).json({
      success: true,
      message: "Data updated successfully.",
      data: addData,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
