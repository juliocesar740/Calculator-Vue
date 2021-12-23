import Handlers from './Handlers';
import SpecialKeywords from './SpecialKeywords';

/**
 * This function returns an object of a static method from one of theses classes(Handlers or SpecialKeywords).
 * The static method is choosen by the object func keyword name.
 * 
 * @param {object} func 
 * @param {object} data 
 * @returns {object} object
 */

function main(func, data) {

   // Object that returns the calculator keyword function

   const keywordsActions = {
      "percentage": () => Handlers.operatorHandler("percentage", data),
      "divide": () => Handlers.operatorHandler("division", data),
      "multiply": () => Handlers.operatorHandler("multiplication", data),
      "subtraction": () => Handlers.operatorHandler("subtraction", data),
      "sum": () => Handlers.operatorHandler("sum", data),
      "clear_entry": () => SpecialKeywords.clearEntry(data),
      "clear": () => SpecialKeywords.clearDisplay(data),
      "backspace": () => SpecialKeywords.backspace(data),
      "divide_by_x": () => SpecialKeywords.divideByX(data),
      "squared": () => SpecialKeywords.squared(data),
      "square_root": () => SpecialKeywords.squareRoot(data),
      "change_sign": () => SpecialKeywords.changeSign(data),
      "dot": () => SpecialKeywords.formatNumber(data),
      "equal": () => SpecialKeywords.calculate(data),
      "0": () => Handlers.numberHandler("0", data),
      "1": () => Handlers.numberHandler("1", data),
      "2": () => Handlers.numberHandler("2", data),
      "3": () => Handlers.numberHandler("3", data),
      "4": () => Handlers.numberHandler("4", data),
      "5": () => Handlers.numberHandler("5", data),
      "6": () => Handlers.numberHandler("6", data),
      "7": () => Handlers.numberHandler("7", data),
      "8": () => Handlers.numberHandler("8", data),
      "9": () => Handlers.numberHandler("9", data),
   };

   const keyword = func.keyword; // Get the keyword

   const result = keywordsActions[keyword](); // Get the result from the keyword function

   return result;

}

export default main;