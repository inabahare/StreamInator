<template>
  <div class="add-movies">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { movieService } from "@/Services";

@Options({
  components: {},
})
export default class AddMovies extends Vue {
  async created () {
    const movieList = await movieService.getAllCollections();
    console.log(movieList);
  }
}
</script>
