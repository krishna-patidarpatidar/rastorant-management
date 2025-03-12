const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }

    const res = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    return res.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};

module.exports = uploadImage;
