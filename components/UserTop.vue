<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="item in items" :key="item.name">
      <div class="card">
        <div class="card-image">
          <b-image ratio="4by3" :src="item.src" />
        </div>
        <div class="card-content">
          <p class="subtitle" v-text="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Item {
  name: string;
  src: string;
}

export default Vue.extend({
  name: "UserTop",

  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<Item[]>,
  },
});
</script>
