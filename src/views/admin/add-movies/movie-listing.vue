<template>
  <section class="collection">
    <h3>{{ listing.Name }}</h3>

    <div v-for="movie of listing.Movies"
         :key="movie.Name">
      <p>{{ movie.Name }}</p>
      <p>{{ movie.NewName }}</p>
    </div>

    <div class="name-changer">
      <input class="input"
             type="text"
             placeholder="/Replace/"
             v-model="movieNameRegex">

      <input class="input"
             type="text"
             placeholder="With"
             v-model="replacement">

      <button @click="changeName">Apply</button>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { MovieCollectionDto } from "@/models";

export default defineComponent({
  name: "Add movies",
  props: {
    listing: {
      type: Object as PropType<MovieCollectionDto>,
      required: true,
    },
  },
  emits: [
    "listing",
  ],
  setup (props, { emit, }) {
    const movieNameRegex = ref("");
    const replacement = ref("");

    function changeName () {
      const replacer = new RegExp(movieNameRegex.value, "g");
     
      for (const movie of props.listing.Movies) {
        movie.NewName = movie.Name.replace(replacer, replacement.value);
        console.log(replacer, replacement.value, movie.NewName);
      }

      emit("listing", props.listing.Movies);
    }

    return {
      movieNameRegex,
      replacement,
      changeName,
    };
  },
});
</script>
