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
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface Item {
  name: string;
  src: string;
}

@Component
export default class UserTop extends Vue {
  @Prop({ type: Object, required: true }) readonly items!: Item[];
}
</script>
