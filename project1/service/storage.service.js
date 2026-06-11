const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
})  