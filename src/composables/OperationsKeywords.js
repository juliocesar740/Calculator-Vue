class OperationsKeywords {

   constructor() { }

   /**
    * Returns the data with the sum.
    * 
    * @param {object} data 
    * @returns {object}
    */
   static sum(data) {

      return {
         ...data,
         firstNumber: String(Number(data.firstNumber) + Number(data.secondNumber)),
         secondNumber: "",
         operator: ""
      };
   }

   /**
    * Returns the data with the subtraction.
    * 
    * @param {object} data 
    * @returns {object}
    */
   static subtraction(data) {

      return {
         ...data,
         firstNumber: String(Number(data.firstNumber) - Number(data.secondNumber)),
         secondNumber: "",
         operator: ""
      };
   }

   /**
    * Returns the data with the multiplication.
    * 
    * @param {object} data 
    * @returns {object}
    */
   static multiplication(data) {

      return {
         ...data,
         firstNumber: String(Number(data.firstNumber) * Number(data.secondNumber)),
         secondNumber: "",
         operator: ""
      };
   }

   /**
    * Returns the data with the division.
    * 
    * @param {object} data 
    * @returns {object}
    */
   static division(data) {

      // Zero Division Error
      if (data.firstNumber !== "0" && data.secondNumber === "0") {
         return { ...data, firstNumber: "", secondNumber: "", operator: "", error: "Can not divide by zero" };
      }

      return {
         ...data,
         firstNumber:  String(Number(data.firstNumber) / Number(data.secondNumber)),
         secondNumber: "",
         operator: ""
      };
   }

   /**
    * Returns the data with the percentage.
    * 
    * @param {object} data 
    * @returns {object}
    */
   static percentage(data) {

      return {
         ...data,
         firstNumber: String((Number(data.firstNumber) * Number(data.secondNumber)) / 100),
         secondNumber: "",
         operator: ""
      };
   }

};

export default OperationsKeywords;