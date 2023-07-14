import ocrReader from "../middleware/ocrReader.js";
import { getPan, getDob, } from "./Tools/dataExtracter.js";
import { panCrop_Old } from "./Tools/panCrop.js";
import verifyPan from "./Tools/verifyPan.js";
const oldPanCard = async (image) => {
    try {
        const panCheck = await verifyPan(image);
        if (panCheck) {
            const panDataImg = await panCrop_Old(image);
            const text = await ocrReader(panDataImg);
            let splitText = text.split('\n');
            let data = {
                name: splitText[0].replace(/[^\w\s]/gi, ""),
                fatherName: splitText[1].replace(/[^\w\s]/gi, ""),
                dob: getDob(splitText),
                panNo: getPan(splitText).replace(/[^\w\s]/gi, ""),
            };
            return {
                statusCode: 200,
                body: "PAN OCR Validation",
                data: data,
            };
        }
        else {
            return {
                statusCode: 404,
                body: "Invalid PAN Card Image",
            };
        }
    }
    catch (error) {
        console.log(error.message);
        return error.message;
    }
};
export { oldPanCard };
//# sourceMappingURL=panOCR.js.map