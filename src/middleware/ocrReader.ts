import Tesseract from 'tesseract.js';

const ocrReader = async (image: string) => {
    const result = await Tesseract.recognize(image, 'eng');
  return result.data.text;
}

export default ocrReader;