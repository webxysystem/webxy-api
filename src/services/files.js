import cloudinary from 'cloudinary';
import fileSystem from 'fs-extra'
import Image from '../models/image'

  cloudinary.config({ 
    cloud_name: 'webxy', 
    api_key: '867962946351458', 
    api_secret: 'VfPdYSzRi3XqwA1SnKnxnAP9Wzc' 
  });

const uploadImage = async (path) => {
  return await cloudinary.v2.uploader.upload(path);
}

const removeFile = async (path) => {
  return await fileSystem.unlink(path);
}

const saveImage = async (image) => {
  const upload = await uploadImage(image.path);
  const imageCloud = {
    title: image.filename,
    imageUrl: upload.secure_url,
    public_id: upload.public_id,
    exclusiveContent:false
  }
  await removeFile(image.path);
  return await Image.create(imageCloud);
}

module.exports = {saveImage};