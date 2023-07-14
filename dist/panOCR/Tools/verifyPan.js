import Tesseract from "tesseract.js";
import { verify_PanCrop } from "./panCrop.js";
const verifyPan = async (image) => {
    try {
        let checkWords = 'INCOMETAXDEPARTMENT';
        await verify_PanCrop(image);
        let result = await Tesseract.recognize("/tmp/verify_PanCrop.png", "eng");
        const ocrData = result.data.text.split(' ');
        if (ocrData.includes(checkWords)) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
};
export default verifyPan;
//# sourceMappingURL=verifyPan.js.map