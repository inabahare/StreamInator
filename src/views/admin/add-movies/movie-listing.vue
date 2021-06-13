<template>
  <section class="collection">
    <h3 class="heading-3">{{ listing.Name }}</h3>

    <div v-for="movie of listing.Movies"
         :key="movie.Name"
         class="movie">
      <p class="name"
         :class="{'underlined': movie.NewName}">{{ movie.Name }}</p>
      <p class="newName"
         v-if="movie.NewName">{{ movie.NewName }}</p>
    </div>

    <text-replacer :values="names"
                   v-on:values-change="changeNames" />

  </section>
</template>

<style lang="scss" scoped>
.movie {
  display: flex;
}

.name {
  margin-right: 20px;
}
</style>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { MovieCollectionDto } from "@/models";
import TextReplacer from "@/components/text-replacer.vue";

export default defineComponent({
  name: "Add movies",
  components: {
    TextReplacer,
  },
  props: {
    listing: {
      type: Object as PropType<MovieCollectionDto>,
      required: true,
    },
  },
  setup (props) {
    const names = props.listing.Movies.map(m => m.Name);

    function changeNames (names: string[]) {
      props.listing.Movies.map((movie, index) => {
        movie.NewName = names[index];
        return movie;
      });
    }

    return {
      names,
      changeNames,
    };
  },
});
</script>
