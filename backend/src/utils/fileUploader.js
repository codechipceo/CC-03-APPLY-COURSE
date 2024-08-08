import cloudinary from "cloudinary";
import AWS from "aws-sdk";
import { Readable } from "stream";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dydmzp82t",
  api_key: "642314838513582",
  api_secret: "AuMUWPG0hOiTCSsNGe88_vyomhY",
});

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: "your-access-key-id",
  secretAccessKey: "your-secret-access-key",
  region: "your-region",
});

export class FileUploader {
  constructor() {
    // Binding methods to the class instance
    this.uploadToCloudinary = this.uploadToCloudinary.bind(this);
    this.uploadToS3 = this.uploadToS3.bind(this);
  }

  // Method to upload files to Cloudinary
  async uploadToCloudinary(fileBuffer, fileName) {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto", public_id: fileName },
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        }
      );
      Readable.from(fileBuffer).pipe(stream);
    });
  }

  // Method to upload files to S3
  async uploadToS3(fileBuffer, fileName, bucketName) {
    const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileBuffer,
      ACL: "public-read",
    };

    try {
      const data = await s3.upload(uploadParams).promise();
      return data.Location;
    } catch (error) {
      throw error;
    }
  }
}
