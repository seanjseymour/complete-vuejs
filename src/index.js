import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <button
    v-bind:class="getClass(number)"
    v-on:click="click"
    >
    {{ number }}
    </button>
  `,
  methods: {
    click(number) {
      this.$emit('chosen', this.number)
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
    isEven(number) {
      return number % 2 === 0;
    },
  },
};

// v-if, v-for, v-bind, v-model, etc are Vue "directives"
const app = Vue.createApp({
  components: {
    Num,
  },

  template: `
    <num
      v-for="number in numbers"
      v-bind:number="number"
      v-on:chosen="addNumber"
    />

    <hr />
    
    <num
      v-for="number in numberHistory"
      v-bind:number="number"
    />

    `,

  // Anything in data is reactive (automatically updates the DOM).
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: [],
    };
  },

  // Computed properties are functions with no arguments.
  // They depend on the contents to evaluate.
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },

  // Methods can access anything returned in the data section using "this"
  methods: {
    addNumber(number) {
      this.numberHistory.push(number);
    },
  },
});

app.mount("#app");
