import fs from 'fs';
const saveInTemp = (imageBuffer, tempFilePath) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(tempFilePath, imageBuffer, (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
};
export default saveInTemp;
//# sourceMappingURL=save2Temp.js.map