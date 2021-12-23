import OperationsKeywords from "./OperationsKeywords";

class SpecialKeywords {
   constructor() { }

   /**
    * Returns the data with the first or second number's last digit.
    * 
    * @param {object} data 
    */
   static backspace(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return { ...data, error: "" }; }

      // First number
      if (!data.operator.length) {

         // If the the first number is not defined or has only one digit, return zero
         if (!data.firstNumber.length || data.firstNumber.length === 1) { return { ...data, firstNumber: "0" }; }

         // Cuts the last digit
         const lastIndex = data.firstNumber.split("").length - 1;
         return { ...data, firstNumber: data.firstNumber.split("").slice(0, lastIndex).join("") };
      }
      // Second number
      else {

         // If the the second number is not defined or has only one digit, return zero
         if (!data.secondNumber.length || data.secondNumber.length === 1) { return { ...data, secondNumber: "0" }; }

         // Cuts the last digit
         const lastIndex = data.secondNumber.split("").length - 1;
         return { ...data, secondNumber: data.secondNumber.split("").slice(0, lastIndex).join("") };
      }
   };

   /**
    * Returns the data with the result of the calculation.
    * 
    * @param {object} data 
    */
   static calculate(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      // If the operation does not have an operator, return the same object
      if (!data.operator) { return data; }

      const operations = {
         "%": () => OperationsKeywords.percentage(data),
         "/": () => OperationsKeywords.division(data),
         "*": () => OperationsKeywords.multiplication(data),
         "-": () => OperationsKeywords.subtraction(data),
         "+": () => OperationsKeywords.sum(data),
      };

      const result = operations[data.operator](); // Get the result

      return result.firstNumber === 'Infinity' ? { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Overflow" } : result;

   };

   /**
    * Changes the sign(positive or negative) of the first or second number.
    * 
    * @param {object} data 
    */
   static changeSign(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      return !data.operator.length ?
         { ...data, firstNumber: String(Number(data.firstNumber) * -1) } : /* First number */
         { ...data, secondNumber: String(Number(data.secondNumber) * -1) }; /* Second number */

   };

   /**
    * Clears all the calculator's display.
    * 
    * @param {object} data 
    */
   static clearDisplay(data) {
      return { ...data, firstNumber: "", secondNumber: "", operator: "", error: "" };
   };

   /**
    * Clears the first or second number.
    * 
    * @param {object} data 
    */
   static clearEntry(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return { ...data, error: "" }; }

      return !data.operator.length ? { ...data, firstNumber: "0" } : { ...data, secondNumber: "0" };
   };

   /**
    * Divides one by the first or second number.
    * 
    * @param {object} data 
    */
   static divideByX(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      // If the first number is not defined or is equal zero,return the data with an error
      if (data.firstNumber === "" || data.firstNumber === "0") {
         return { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Can not divide by zero" };
      }

      return !data.operator.length ?
         { ...data, firstNumber: String(1 / Number(data.firstNumber)), } : // first number
         { ...data, secondNumber: String(1 / Number(data.secondNumber)), }; // second number

   };

   /**
    * Returns the first or second number formatted with decimal separator.
    * 
    * @param {object} data 
    */
   static formatNumber(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      // First Number
      if (!data.operator.length) {
         return data.firstNumber.includes('.') ? data : { ...data, firstNumber: !data.firstNumber ? "0." : data.firstNumber + '.' };
      }
      // Second Number
      else {
         return data.secondNumber.includes('.') ? data : { ...data, secondNumber: !data.secondNumber ? "0." : data.secondNumber + '.' };
      }

   };

   /**
    * Returns the data with the square of first or second number.
    * 
    * @param {object} data 
    */
   static squared(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      // First number
      if (!data.operator) {

         return String(Number(data.firstNumber) ** 2) === 'Infinity' ?
            { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Overflow" } :
            { ...data, firstNumber: String(Number(data.firstNumber) ** 2)};

      }
      // Second number
      else {
         return String(Number(data.secondNumber) ** 2) === 'Infinity' ?
            { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Overflow" } :
            { ...data, secondNumber: String(Number(data.secondNumber) ** 2),};
      }

   };

   /**
 * Returns the data with the square root of first or second number.
 * 
 * @param {object} data 
 */
   static squareRoot(data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }
      
      // If the first or second number is negative, return the data with an error
      if (Number(data.firstNumber) < 0 || Number(data.secondNumber) < 0) {
         return { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Invalid input" };
      }

      return !data.operator.length ?
         { ...data, firstNumber: String(Math.sqrt(Number(data.firstNumber))) } : // first number
         { ...data, secondNumber: String(Math.sqrt(Number(data.secondNumber))) }; // second number
   };
};

export default SpecialKeywords;