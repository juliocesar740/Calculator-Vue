import Functions from "./Functions";

class Handlers {
   constructor() { }

   /**
    * Handles any number keyword input
    * 
    * @param {number} number 
    * @param {object} data 
    * @returns {object} object
    */
   static numberHandler(number, data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      //First Number
      if (!data.operator.length) {

         // If The first number is not defined yet.
         if (!data.firstNumber.length) { return { ...data, firstNumber: number }; }
         else {

            // Binds the digits to create the first number
            data.firstNumber += number; 

            if (Functions.checkZeroDigits(data.firstNumber)) { data.firstNumber = "0"; }

            // Cuts the first number if it's zero and the others are not
            if(Functions.checkNumber(data.firstNumber)){ data.firstNumber = data.firstNumber.split("").slice(1).join("");};

            // The limit of number is 15 digits
            if(data.firstNumber.length > 16){
               const lastIndex = data.firstNumber.split("").length - 1;
               data.firstNumber = data.firstNumber.split("").slice(0,lastIndex).join("");
            }

            return { ...data, firstNumber: data.firstNumber };
         }
      }

      // Second Number
      else {

         // If The second number is not defined yet.
         if (!data.secondNumber.length) { return { ...data, secondNumber: number }; }
         else {

            // Binds the digits to create the first number
            data.secondNumber += number; 

            if (Functions.checkZeroDigits(data.secondNumber)) { data.secondNumber = "0"; }

            // Cuts the first number if it is zero and the others are not
            if( Functions.checkNumber(data.secondNumber)){ data.secondNumber = data.secondNumber.split("").slice(1).join("");};

            // The limit of number is 15 digits
            if(data.secondNumber.length > 16){
               const lastIndex = data.secondNumber.split("").length - 1;
               data.secondNumber = data.secondNumber.split("").slice(0,lastIndex).join("");
            }

            return { ...data, secondNumber: data.secondNumber };
         }
      }

   };

   /**
    * Handles any operation keyword input
    * 
    * @param {string} operation 
    * @param {object} data 
    * @returns {object} object
    */
   static operatorHandler(operation, data) {

      // If there's some error, return the object with the same error
      if (data.error) { return data; }

      const operations = {
         percentage: "%",
         division: "/",
         multiplication: "*",
         subtraction: "-",
         sum: "+",
      };

      return { ...data, operator: operations[operation] };
   };

};

export default Handlers;