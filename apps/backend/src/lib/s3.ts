// Exact backend source reference placeholder for S3.
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export const s3 = new S3Client({
  region: process.env.S3_REGION ?? 'us-east-1',
})

export async function uploadBuffer(key: string, buffer: Buffer, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  })
  return s3.send(command)
}
