
<template>
  <div class="text-replacer">
    <div class="replacements pb-4"
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

      <button class="button"
              @click="removeReplacement(replacement)">Remove</button>
    </div>

    <div class="controls">
      <button class="button"
              @click="addReplacement">Add</button>
      <button class="button"
              @click="change">Apply</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

enum ReplacementType {
  Replace,
  Remove
}

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
    
    function removeReplacement (value: replacement) {
      replacements.value = replacements.value.filter(r => r !== value);
    }

    function change () {
      console.info("change ()");
      
      const mapped = 
        replacements.value.length === 0 ? 
          props.values :
          props.values.map(oldValue => 
            replacements.value.reduce((total, current) => {
              if (current.expression.length === 0)
                return total;

              return total.replace(new RegExp(current.expression, "g"), current.replacement);
            }, oldValue));

      emit("values-change", mapped);
    }

    return {
      newValue,
      replacements,
      addReplacement,
      removeReplacement,
      change,
    };
  },
});
</script>
