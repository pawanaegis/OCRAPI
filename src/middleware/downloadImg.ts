import https from 'https';
const downloadImage=(url:any)=> {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const chunks:any[] = [];
        res.on('data', (data) => chunks.push(data));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      });
    });
  }
  export default downloadImage;