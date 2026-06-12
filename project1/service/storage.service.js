const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,

})  
async function uploadImage(file){
    file = file.buffer
    const fileName = `${Date.now()}-${file.originalname}`;
    const uploadResponse = await imagekit.upload({
        file: file,
        fileName: fileName,
    });
    return uploadResponse.url;
}