<template>
  <div class="wrapper">
    <h1 id="title">Calculator</h1>
    <div class="calculator">
      <calculator-container></calculator-container>
    </div>
    <p id="github-profile">
      Developer By <a href="https://github.com/juliocesar740">Júlio César</a>
    </p>
  </div>
</template>
<script>
import CalculatorContaienr from "./components/CalculatorCointainer.vue";

export default {
  name: "App",
  components: {
    "calculator-container": CalculatorContaienr,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #e6e6e6;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

#app {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 100%;
}

#title {
  user-select: none;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 15px;
}

.calculator {
  width: 70%;
  margin: 0 auto;
}

#github-profile {
  user-select: none;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
}

#github-profile > a {
  text-decoration: none;
  font-weight: 500;
  color: #3093ac;
}

#github-profile > a:hover {
  color: rgb(38, 112, 131);
}

/* Media queries */

@media screen and (max-width: 1100px) {
  .calculator {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  .calculator {
    width: 95%;
  }
}

@media screen and (max-width: 390px) {
  .calculator {
    width: 100%;
  }
}
</style>
