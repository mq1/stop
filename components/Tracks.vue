<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="track in tracks" :key="track.name">
      <div class="card">
        <div class="card-image">
          <b-image ratio="4by3" :src="track.src" />
        </div>
        <div class="card-content">
          <p class="subtitle" v-text="track.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface Track {
  name: string;
  src: string;
}

@Component
export default class Tracks extends Vue {
  @Prop({ type: String, required: true }) readonly timeRange!: String;

  tracks: Track[] = [];

  async fetch() {
    const tracks = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/tracks?limit=9&time_range=${this.timeRange}`
    );

    for (const track of tracks.items) {
      this.tracks.push({
        name: track.name,
        src: track.album.images[0].url,
      });
    }
  }
}
</script>
