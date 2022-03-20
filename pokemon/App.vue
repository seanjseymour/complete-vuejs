<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      >
      <template v-slot:title>
      {{ pokemon.name }}
      </template>

      <template v-slot:content>
      <img :src="pokemon.sprite" />
      </template>

      <template v-slot:description>
      <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>

    </card>
  </div>
</template>

<script>
import Card from './Card.vue'

const api = "https://pokeapi.co/api/v2/pokemon";
const ids = [1, 4, 7];

export default {
  components: {
    Card
  },

  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    this.fetchData();
  },

  mounted() {},

  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const json = await Promise.all(responses.map((data) => data.json()));

      this.pokemons = json.map((data) => ({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((type) => type.type.name),
      }));
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
}
img {
  width: 100%;
}

</style>
