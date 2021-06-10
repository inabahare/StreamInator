<template>
  <div class="add-movies">
    <h1>List of all movies</h1>

    <div v-for="movie of collection"
         :key="movie.Name">
      {{ movie.Name }}
    </div>
  </div>
</template>

<script lang="ts">
import { movieService } from "@/Services";
import { onMounted, ref } from "vue";
import { MovieCollectionDto } from "@/models";

export default {
  // name: "Add movies",
  setup () {
    const collection = ref([] as MovieCollectionDto[]);

    async function fetchMovies () {
      const movieList = await movieService.getAllCollections();
      collection.value = movieList;
    }

    onMounted(() => {
      console.log("OnMounted");
      
      fetchMovies();
    });

    return {
      collection,
    };
  },
};
</script>
