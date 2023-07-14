import sharp from "sharp";
import fs from "fs";
import fixImageRes from "../../middleware/fixImageRes.js";
const verify_PanCrop = async (image) => {
    try {
        fixImageRes(image).then((result) => {
            console.log("fixImageRes Completed", result);
            setTimeout(() => {
                const inputFile = result;
                const inputBuffer = fs.readFileSync(inputFile);
                sharp(inputBuffer)
                    .extract({ left: 10, top: 10, width: 500, height: 80 })
                    .normalize()
                    .sharpen()
                    .gamma(1.0)
                    .toFormat("png")
                    .toFile("/tmp/verify_PanCrop.png", (err) => {
                    if (err) {
                        console.log(err);
                        return false;
                    }
                    else {
                        return "/tmp/verify_PanCrop.png";
                    }
                });
            }, 200);
        });
    }
    catch (error) {
        throw new Error(error.message);
    }
};
const panCrop_Old = async (image) => {
    try {
        setTimeout(() => {
            const smallFile = image;
            const smallBuffer = fs.readFileSync(smallFile);
            sharp(smallBuffer)
                .extract({ left: 10, top: 85, width: 300, height: 220 })
                .normalize()
                .sharpen()
                .gamma(1.0)
                .toFormat("png")
                .toFile("/tmp/cropped_Pan.png", (err) => {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    return true;
                }
            });
        }, 100);
        return "/tmp/cropped_Pan.png";
    }
    catch (error) {
        throw new Error(error.message);
    }
};
export { verify_PanCrop, panCrop_Old };
//# sourceMappingURL=panCrop.js.map