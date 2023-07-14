
const getPan = (text:string[]) => {
    for (let i = 0; i < text.length; i++) {
      if (containsInteger(text[i]) && containsCharacter(text[i])) return text[i];
    }
    return "not found!";
  };
  const getDob = (text:string[]) => {
    for (let i = 0; i < text.length; i++) {
      let text2 = text[i].replace(" ", "");
      if (isValidDateFormat(text2)) return text[i];
    }
    return "not found!";
  };
  
  const getGender = (text:string) => {
    for (let i = 0; i < text.length; i++) {
      if (isGender(text[i])) {
        let text2 = text[i].split(/\/|,/).pop();
        return text2;
      }
    }
    return "not found!";
  };
  
  /////////////////Adhar Card Get Functions///////////////////////////
  const getName = (text:string) => {
    for (let i = 0; i < text.length; i++) {
      if (isValidName(text[i])) return text[i];
    }
    return "not found!";
  };
  const getAdharno = (text:string) => {
    for (let i = 0; i < text.length; i++) {
      if (isValidAdharno(text[i])) return text[i];
    }
    return "not found!";
  };
  
  function containsInteger(str:string) {
    const regex = /\d+/;
    return regex.test(str);
  }
  function containsCharacter(str:string) {
    const regex = /[a-zA-Z]+/;
    return regex.test(str);
  }
  function isValidDateFormat(str:any) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(str);
  }
  function isGender(str:any) {
    const regex = /\b(?:FEMALE|Female|Male|MALE)\b/;
    return regex.test(str);
  }
  function isValidName(str:any) {
    const pattern = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
    return pattern.test(str);
  }
  function isValidAdharno(str:any) {
    const pattern = /^\d{4} \d{4} \d{4}$/;
    return pattern.test(str);
  }
  
  //DL Card Get Data Functions
  function getAddress(text:any) {
    let address;
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "Address:") {
        address = text.splice(i, i + 1);
      }
    }
    const arr = address.filter((item:any) => {
      return item.length > 10;
    });
    let str = "";
    for (let item of arr) str += item;
    return str;
  }
  
  function dlFatherName(text:any) {
    for (let i = 0; i < text.length; i++) {
      if (
        text[i].includes("Son") ||
        text[i].includes("Daughter") ||
        text[i].includes("Wifeof")
      ) {
        let str = text.splice(i, i);
        return str[0].split(":").pop();
      }
    }
  }
  function getDLNum(text:any) {
    const regex = /^[a-zA-Z0-9]{4}\s[0-9]{11}$/;
    const result = text.filter((str:any) => regex.test(str));
    return result[0];
  }
  function getDLname(text:any) {
    const pattern1 = /^[A-Z]+\s+[A-Z]+\s*$/i;
    const pattern2 = /^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/;
    const name = text.filter((str:any) => {
      if (pattern1.test(str) || pattern2.test(str)) return str;
    });
  
    return name[0];
  }
  function getDLValidity(text:any) {
    const pattern = /\d{2}-\d{2}-\d{4}\s+\d{2}-\d{2}-\d{4}/;
    const validity = text.filter((items:any) => pattern.test(items));
  
    return validity[0];
  }
  function getDLdob(text:any) {
    const pattern = /\d{2}-\d{2}-\d{4}/;
    const dob = text.filter((items:any) => {
      console.log(items);
      if (items.includes("Date of Birth")) {
        return items;
      }
    });
    const extractedDate = dob[0].match(pattern)[0];
    return extractedDate;
  }
  
  export {
    getPan,
    getDob,
    getGender,
    getName,
    getAdharno,
    getAddress,
    dlFatherName,
    getDLNum,
    getDLname,
    getDLValidity,
    getDLdob,
  };
  