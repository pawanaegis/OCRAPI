import https from 'https';
const downloadImage = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const chunks = [];
            res.on('data', (data) => chunks.push(data));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        });
    });
};
export default downloadImage;
//# sourceMappingURL=downloadImg.js.map