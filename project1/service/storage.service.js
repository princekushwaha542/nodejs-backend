const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,

})  

module.exports = {
    uploadImage: async (file) => {
        try {
            const response = await imagekit.upload({
                file: file.buffer,
                fileName: file.originalname
            });
            return response.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw new Error('Failed to upload image');
        }   