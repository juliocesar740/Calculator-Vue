<template>
  <div class="calculator-display">
    <div class="digits-display">
      <div class="" v-if="operation.error">
        <span style="font-size: 1.7rem">{{ operation.error }}</span>
      </div>
      <div class="operation" v-else>
        <span>{{ !operation.firstNumber ? "0" : displayFirstNumber }}</span>
        <span>{{ operation.operator }}</span>
        <span>{{ displaySecondNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Functions from "../composables/Functions";

export default {
  name: "CalculatorDisplay",
  props: {
    operation: Object,
  },
  setup(props) {
    const displayFirstNumber = computed(() =>
      Functions.formatNumber(props.operation.firstNumber)
    );
    const displaySecondNumber = computed(() =>
      Functions.formatNumber(props.operation.secondNumber)
    );

    return { displayFirstNumber, displaySecondNumber };
  },
};
</script>

<style scoped>
.calculator-display {
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.digits-display {
  border-radius: 7.5px;
  background-color: #73e065;
  height: 70px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 6.5px;
}

.operation {
  word-break: break-all;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.operation > * {
  font-size: 25px;
}

</style>