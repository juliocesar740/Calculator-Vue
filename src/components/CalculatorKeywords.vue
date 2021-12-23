<template>
  <div class="calculator-keywords">
    <keyword
      @handle-keyword="$emit('handle-keyword', keyword)"
      v-for="keyword in keywords"
      :key="keyword.id"
      :keyword="keyword"
    ></keyword>
  </div>
</template>

<script>
import keywordsList from "../json/keywords.json";
import Keyword from "../components/Keyword.vue";

export default {
  name: "CalculatorKeywords",
  components: {
    keyword: Keyword,
  },
  data() {
    return {
      keywords: keywordsList.keywords,
    };
  },
  emits: ["handle-keyword"],
};
</script>

<style scoped>
.calculator-keywords {
  width: 97.25%;
  margin: 1.5px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24.75%, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
}

</style>