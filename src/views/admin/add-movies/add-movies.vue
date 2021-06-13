<template>
  <div class="add-movies">
    <h1 class="heading-1">Listing all movies and their collections</h1>

    <div v-for="listing of collection"
         :key="listing.Name">
      <movie-listing :listing="listing"
                     @update:listing="listing = $event" />
    </div>
  </div>
</template>

<script lang="ts">
import { movieService } from "@/Services";
import { onMounted, ref } from "vue";
import { MovieCollectionDto } from "@/models";
import MovieListing from "./movie-listing.vue";

import movies from "@/assets/mock-movie-data.json";

export default {
  name: "Add movies",
  components: { MovieListing, },
  setup () {
    const collection = ref([] as MovieCollectionDto[]);

    async function fetchMovies () {
      const movieList = 
        movies;
        // await movieService.getAllCollections();
      
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
