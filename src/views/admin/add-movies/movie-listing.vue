<template>
  <section class="collection">
    <h3>{{ listing.Name }}</h3>

    <div v-for="movie of listing.Movies"
         :key="movie.Name">
      {{ movie.Name }}
    </div>

    <div class="name-changer">
      <input type="text"
             v-model="movieName">
    </div>

  </section>
</template>

<script lang="ts">
import { PropType, ref } from "vue";
import { MovieCollectionDto } from "@/models";

export default {
  name: "Add movies",
  props: {
    listing: {
      type: Object as PropType<MovieCollectionDto>,
      required: true,
    },
  },
  setup () {
    const movieName = ref("/.*/");

    return {
      movieName,
    };
  },
};
</script>
