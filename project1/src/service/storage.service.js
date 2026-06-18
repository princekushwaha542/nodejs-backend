const ImageKit = require('@imagekit/nodejs');

const {imagekit} = new ImageKit({
   privateKey: "private_dGK3BcA4LNrDzP+Ve58Key4YXeI=",
})  
async function uploadFile(buffer){
    console.log(buffer);
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        image: "image.jpg",
    })
    return result;
}
module.exports = uploadFile;