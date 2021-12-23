<template>
  <div class="calculator-container">
    <calculator-display :operation="operation"></calculator-display>
    <calculator-keywords @handle-keyword="handleKeyword"></calculator-keywords>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import CalculatorDisplay from "../components/CalculatorDisplay.vue";
import CalculatorKeywords from "../components/CalculatorKeywords.vue";
import main from "../composables/main";
export default {
  name: "CalculatorContainer",
  components: {
    "calculator-display": CalculatorDisplay,
    "calculator-keywords": CalculatorKeywords,
  },
  setup() {
    const operation = ref({
      firstNumber: "",
      secondNumber: "",
      operator: "",
      error: "",
    });

    const handleKeyword = (keyword) => operation.value = main( keyword, JSON.parse(JSON.stringify(operation.value)));

    return { operation, handleKeyword };
  },
};
</script>

<style scoped>
.calculator-container {
  border-radius: 13.5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  background-color: #3d3d3d;
  height: 480px;
  width: 100%;
}
</style>