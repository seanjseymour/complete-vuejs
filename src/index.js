import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <div
    v-bind:class="getClass(number)"
    >
    {{ number }}
    </div>
  `,
  methods: {
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
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>

    <hello greeting="Hello!"/>

    <input
      type="checkbox"
      v-model="value"
      value="a"
    />
    <input
      type="checkbox"
      v-model="value"
      value="b"
    />

    {{ value }}

    <div class="red">
      {{ error }}
    </div>

    <num
      v-for="number in numbers"
      v-bind:number="number"
    />
  `,

  // Anything in data is reactive (automatically updates the DOM).
  data() {
    return {
      count: 0,
      value: ["a"],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  // Computed properties are functions with no arguments.
  // They depend on the contents to evaluate.
  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
    error() {
      if (this.value.length < 4) {
        return "Username must be greater than 4.";
      }
    },
  },

  // Methods can access anything returned in the data section using "this"
  methods: {
    // Example of two way binding, was replaced (along with v-bind & v-on in template) by v-model
    /*input($event) {
      this.value = $event.target.value;
    },*/
    increment() {
      this.count += 1;
    },
  },
});

app.mount("#app");
