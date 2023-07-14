import sharp from "sharp";
import fs from "fs";
const fixImageRes = async (filePath:string) => {
    try {
      const inputFile = filePath;
      const inputBuffer = fs.readFileSync(inputFile);
      sharp(inputBuffer)
        .resize({
          width: 550,
          height: 340,
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy,
        })
        .toFile("/tmp/image.png", (err:any) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            return true;
          }
         
       });
        return "/tmp/image.png";
    } catch (error:any) {
      throw new Error(error.message);
    
    }
  };

  export default fixImageRes;