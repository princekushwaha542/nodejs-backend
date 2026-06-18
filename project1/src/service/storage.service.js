const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey: "YOUR_PUBLIC_KEY",
    privateKey: "YOUR_PRIVATE_KEY",
    urlEndpoint: "YOUR_URL_ENDPOINT"
});

async function uploadFile(buffer) {
    console.log(buffer);

    const result = await imagekit.upload({
        file: buffer.toString('base64'),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;