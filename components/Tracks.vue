<template>
  <user-top :items="tracks" />
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
