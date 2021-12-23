<template>
  <div
    @mousedown="handleClick"  
    class="keyword"
    ref="calculatorKeyword"
    :data-keyword="keyword.keyword"
    v-html="keyword.html_output"
    :class="keyword.class ? keyword.class : ''"
  ></div>
</template>

<script>
export default {
  name: "Keyword",
  props: {
    keyword: Object,
  },
  methods: {
    handleClick() {
      this.$emit('handle-keyword');
      this.$refs.calculatorKeyword.classList.add("keyword-active");
    },
  },
};
</script>

<style scoped>
.keyword {
  user-select: none; 
  transform: translateY(-5px);
  border-radius: 7.5px;
  background-color: #e9eff0;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0px 2px 0px -4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3),
    inset 0px -9.5px 0px -3px rgba(0, 0, 0, 0.2);
  margin: 6px 0;
  margin-left: 9.75px;
  margin-right: 5.75px;
  height: 36.75px;
  padding: 22.75px 0;
  cursor: pointer;
  transition: 200ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.keyword:active {
  transform: translateY(0px);
  box-shadow: 0px 2px 0px -4px rgba(0, 0, 0, 0.4),
    0px 7px 13px -3px rgba(0, 0, 0, 0.3),
    inset 0px 0px 0px -3px rgba(0, 0, 0, 0.2);
}

.keyword:hover {
  background-color: #d6d6d6;
}

.equal-keyword {
  background-color: #f8a407f8;
}

.equal-keyword:hover {
  background-color: #f5a208e5;
}

</style>