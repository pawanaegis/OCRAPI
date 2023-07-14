const validate = (imgUrl, method, imgBuffer) => {
    if (imgUrl === "" || undefined || null) {
        const response = {
            statusCode: 404,
            body: "There is no image url present in request.",
        };
        return response;
    }
    else if (imgBuffer == undefined) {
        const response = {
            statusCode: 404,
            body: "Invalid image file type. Please upload in JPEG,JPG or PNG format.",
        };
        return response;
    }
    else if (method != 'POST') {
        const response = {
            statusCode: 404,
            body: "Invalid http method. Please use POST method.",
        };
        return response;
    }
    else {
        return true;
    }
};
export default validate;
//# sourceMappingURL=initialValidator.js.map