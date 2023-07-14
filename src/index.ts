import path from "path";
import downloadImage from "./middleware/downloadImg.js";
import saveInTemp from "./middleware/save2Temp.js";
import {oldPanCard} from "./panOCR/panOCR.js";
import validate from "./middleware/initialValidator.js";
import fixImageRes from "./middleware/fixImageRes.js";
export const handler = async (event: any) => {
    try {
        //Get image url from request body.
    const {httpMethod}=event;
    const imgUrl = JSON.parse(event.body).url;

    //Creating image buffer from image url.
    const imgBuffer:unknown = await downloadImage(imgUrl);

    // Validating image buffer,http method, image buffer before ocr.
    if(validate(imgUrl,httpMethod,imgBuffer)){
        const tmpFolder='/tmp';
        const tempFilePath=path.join(tmpFolder, 'image.jpg');
    
    //Saving image buffer to temp file.
     await saveInTemp(imgBuffer, tempFilePath);

    //Changing Resolution of image for better text detection.
    await fixImageRes('/tmp/image.jpg');

    //Calling ocr function based on path.
    switch (event.path) {
        case "/ocrPan":
            return await oldPanCard('/tmp/image.png');
        default:
            return {
                statusCode: 200,
                body: "Welcome to AegisCovenant's OCRApp Ver.1.0.0.",
            }
            break;
    
    }
   }
    } catch (error) {
        console.log(error);

        const response={
        statusCode: 404,
        body:"There is no image in the request or error in file creation.",
        error:error,
        
    }
      return response
    }
}




