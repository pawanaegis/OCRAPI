import sharp from "sharp";
import fs from "fs";
import fixImageRes from "../../middleware/fixImageRes.js";

/*
    verify_PanCrop function is used to crop the image of PAN Card 
    top notch area to verification of card type.
*/

const verify_PanCrop=async(image:any)=>{
    try {
      fixImageRes(image).then((result:string)=>{
        console.log("fixImageRes Completed",result)
        setTimeout(()=>{
        const inputFile = result;
        const inputBuffer = fs.readFileSync(inputFile);
        sharp(inputBuffer)
        .extract({ left: 10, top: 10, width: 500, height: 80 })
        .normalize() // adjust the colors to make them more natural
        .sharpen() // increase the sharpness of the image
        .gamma(1.0)
        .toFormat("png")
        .toFile("/tmp/verify_PanCrop.png", (err:any) => {
            if (err) {
              console.log(err);
              return false;
            } else {
             // console.log(info);
              // console.log("first done");
              return "/tmp/verify_PanCrop.png";
            }
        })
        },200)
        
      })
        
      } 
        catch (error:any) {
        throw new Error(error.message);
      }
}

const panCrop_Old=async(image:string)=>{
  try {
    setTimeout(() => {
      const smallFile = image;
      const smallBuffer = fs.readFileSync(smallFile);
      sharp(smallBuffer)
        .extract({ left: 10, top: 85, width: 300, height: 220 })
        .normalize() // adjust the colors to make them more natural
        .sharpen() // increase the sharpness of the image
        .gamma(1.0)
        .toFormat("png")
        .toFile("/tmp/cropped_Pan.png", (err:any) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            //console.log(info);
            return true;
          }
        });
    }, 100);
   return "/tmp/cropped_Pan.png";
  }catch (error:any) {
    throw new Error(error.message);
  
}
}


export {verify_PanCrop,panCrop_Old};