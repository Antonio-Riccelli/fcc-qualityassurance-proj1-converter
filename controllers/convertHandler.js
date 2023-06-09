function ConvertHandler() {

  this.getNum = function (input) {
    const regex = /[a-zA-Z]/;
    const arrFromStr = input.split("");
    let num;
    for (let i = 0; i < arrFromStr.length; i++) {
      const isAMatch = regex.test(arrFromStr[i]);
      if (isAMatch) {
        num = +arrFromStr.slice(0, i).join("");
        unit = arrFromStr.slice(i).join("");
        break
      }
    }
    return num;
  };

  this.getUnit = function (input) {
    const regex = /[a-zA-Z]/;
    const arrFromStr = input.split("");
    let unit;
    for (let i = 0; i < arrFromStr.length; i++) {
      const isAMatch = regex.test(arrFromStr[i]);
      if (isAMatch) {
        unit = arrFromStr.slice(i).join("");
        break
      }
    }
    return unit.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    const lowerCaseInitUnit = initUnit.toLowerCase();
    let switchedUnit;

    if (lowerCaseInitUnit === "gal") {
      switchedUnit = "L";
    }
    if (lowerCaseInitUnit === "l") {
      switchedUnit = "gal";
    }
    if (lowerCaseInitUnit === "lbs") {
      switchedUnit = "kg";
    }
    if (lowerCaseInitUnit === "kg") {
      switchedUnit = "lbs";
    }
    if (lowerCaseInitUnit === "mi") {
      switchedUnit = "km";
    }
    if (lowerCaseInitUnit === "km") {
      switchedUnit = "mi";
    }
    if (lowerCaseInitUnit === "l") {
      switchedUnit = "L";
    }
    if (!switchedUnit) {
      return "invalid unit";
    }
    return switchedUnit;
  };

  this.spellOutUnit = function (unit) {
    let result;
    if (unit === "gal") {
      result = "gallons";
    }
    if (unit === "l") {
      result = "liters";
    }
    if (unit === "lbs") {
      result = "pounds";
    }
    if (unit === "kg") {
      result = "kilograms";
    }
    if (unit === "mi") {
      result = "miles";
    }
    if (unit === "km") {
      result = "kilometers";
    }
    if (unit === "L") {
      result = "liters";
    }
    if (!result) {
      return "invalid unit";
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    // You can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
    let result;
    if (initUnit === "gal") {
      result = initNum * galToL;
    }
    if (initUnit === "l") {
      result = initNum / galToL;
    }
    if (initUnit === "lbs") {
      result = initNum * lbsToKg;
    }
    if (initUnit === "kg") {
      result = initNum / lbsToKg;
    }
    if (initUnit === "mi") {
      result = initNum * miToKm;
    }
    if (initUnit === "km") {
      result = initNum / miToKm;
    }
    if (!result) {
      return "invalid number";
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    if (returnNum === "invalid number" && returnUnit === "invalid unit") {
      return "invalid number and unit";
    }  
    if (returnNum === "invalid number") {
      return "invalid number";
    }
    if (returnUnit === "invalid unit") {
      return "invalid unit";
    }
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };

}

module.exports = ConvertHandler;
