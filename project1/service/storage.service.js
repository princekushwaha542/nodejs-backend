const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
   privateKey: "private_6ANT0fUGkGy2ABTNhT9010eSoDA="

})  
async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file: buffer,
        image: "image.jpg",
    })
    return result;
}
module.exports = uploadFile;