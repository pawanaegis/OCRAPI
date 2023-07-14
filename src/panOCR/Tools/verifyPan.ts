import Tesseract from "tesseract.js";
import { verify_PanCrop } from "./panCrop.js";

const verifyPan=async(image:string)=>{
    try {
            let checkWords='INCOMETAXDEPARTMENT';
            await verify_PanCrop(image);
            let result=await Tesseract.recognize("/tmp/verify_PanCrop.png", "eng");
        const ocrData=result.data.text.split(' ');
        if(ocrData.includes(checkWords))
                    {
                        //console.log("Valid");
                        return true;
                        
                    }else{
                        //console.log("Invalid PAN Card Image.");
                       return false;
                    }
        }
     catch (error:any) {
        throw new Error(error.message);

    }
}
export default verifyPan;