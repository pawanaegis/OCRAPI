
import fs from 'fs';
const saveInTemp=(imageBuffer:any, tempFilePath:string)=> {
    return new Promise((resolve:any, reject) => {
      fs.writeFile(tempFilePath, imageBuffer, (error:any) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
}

export default saveInTemp;