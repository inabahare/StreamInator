<template>
  <section class="collection">
    <h3>{{ listing.Name }}</h3>

    <div v-for="movie of listing.Movies"
         :key="movie.Name">
      {{ movie.Name }}
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { MovieCollectionDto } from "@/models";

export default {
  name: "Add movies",
  props: {
    listing: {
      type: Object as PropType<MovieCollectionDto>,
      required: true,
    },
  },
};
</script>
