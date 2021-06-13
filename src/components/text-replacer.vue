
<template>
  <div class="text-replacer">
    <div class="replacements"
         v-for="(replacement, index) in replacements"
         :key="index">
      <input class="input"
             type="text"
             placeholder="/Replace/"
             v-model="replacement.expression">

      <input class="input"
             type="text"
             placeholder="With"
             v-model="replacement.replacement">
    </div>

    <div class="controls">
      <button @click="addReplacement">Add</button>
      <button @click="change">Apply</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

type replacement = {
  expression: string;
  replacement: string;
}

export default defineComponent({
  name: "Text replacer",
  props: {
    values: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: [
    "values-change",
  ],
  setup (props, { emit, }) {
    const newValue = ref("");
    const replacements = ref([
      {
        expression: "",
        replacement: "",
      },
    ]);

    function addReplacement () {
      const newReplacement = {
        expression: "",
        replacement: "",
      } as replacement;

      replacements.value.push(newReplacement);
    }

    function change () {
      const mapped = 
        props.values.map(oldValue => 
          replacements.value.reduce((total, current) => total.replace(new RegExp(current.expression, "g"), current.replacement), oldValue));

      emit("values-change", mapped);
    }

    return {
      newValue,
      replacements,
      addReplacement,
      change,
    };
  },
});
</script>
