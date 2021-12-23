class Functions {
   constructor() { }

   /**
    * If the number has more than one digit and only zero digits the function, return true otherwise false.
    * 
    * @param {number} number 
    * @returns {boolean} boolean
    */
   static checkZeroDigits(number) {

      if (number.length > 1) {

         const countZeros = number.split("").reduce((acc, next) => {
            if (next === "0") {
               acc += 1;
            }

            return acc;
         }, 0);

         return countZeros === number.length ? true : false;
      }

      return false;
   };

   /**
   * If the first number is zero and the following numbers are not, cut the first
   */
   static checkNumber(number) {
      return (number.split("").length >= 2 && number.split("")[0] === "0" && number.split("")[1] !== ".") ? true : false;
   };

   /**
    * Returns the first or second number separated commas with decimal separator.
    * 
    * @param {number} number 
    */
   static formatNumber(number) {

      //  Just for numbers greater than 1000
      if (Number(number) >= 1000) {

         // Just in case the number has the e constant(Euler's number)
         if (number.split('').includes('e')) { return number; }

         // Just in case the number has the decimal operator
         if (number.split('').includes('.')) {

            // The first half of the number
            const mainPart = number.split('').reduce((prev, next, index) => {

               if (index < number.split('').indexOf('.')) { prev += next; }

               return prev;
            }, '');

            // The second half of the number
            const secondPart = number.split('').reduce((prev, next, index) => {

               if (index >= number.split('').indexOf('.')) { prev += next; }

               return prev;
            }, '');

            // Get the formatted Number
            const formattedNumber = this.getFormattedNumber(mainPart);

            return `${formattedNumber}${secondPart}`;
         }

         const formattedNumber = this.getFormattedNumber(number);

         return formattedNumber;
      }

      return number;

   }

   /**
    * Returns the constant that will add the comma in the right position.
    * @param {number} number 
    */
   static getConstant(number) {

      let constant = 0;
      let length = number.split('').length;

      // self-invoking function to get the constant
      (() => {
         number.split('').forEach(() => {

            length -= 3;

            if ([1, 2, 3].includes(length)) {
               constant = length;
               return;
            }
         })
      })();

      return constant;

   }

   /**
    * Returns the formatted number.
    * 
    * @param {number} number 
    */
   static getFormattedNumber(number) {

      let constant = this.getConstant(number);

      const formattedNumber = number.split('').reduce((prev, next, index) => {

         if (index === constant) {
            prev += `,${next}`;
            constant += 3;
         }
         else {
            prev += next;
         }

         return prev;

      }, '');

      return formattedNumber;
   }

};

export default Functions;