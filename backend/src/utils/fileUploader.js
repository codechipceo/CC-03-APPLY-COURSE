import cloudinary from "cloudinary";
import AWS from "aws-sdk";
import { Readable } from "stream";
import { config } from "dotenv";
import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });
config();
// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dydmzp82t",
  api_key: "642314838513582",
  api_secret: "AuMUWPG0hOiTCSsNGe88_vyomhY",
});

const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const region = process.env.AWS_REGION;

const configuration = {
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region,
};

AWS.config.update(configuration);

const s3 = new AWS.S3();

// Configure AWS S3

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
  async uploadToS3(fileObj, folderName, bucketName) {
    const { name, data } = fileObj;
    const filePath = `${folderName}/${uid.rnd() + name}`;
    const uploadParams = {
      Bucket: bucketName ?? process.env.BUCKET_NAME,
      Key: filePath,
      Body: data,
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
