<template>
  <user-top :items="tracks" />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Track {
  name: string;
  src: string;
}

export default Vue.extend({
  name: "Tracks",

  props: {
    timeRange: {
      type: String,
      required: true,
    } as PropOptions<String>,
  },

  data() {
    return {
      tracks: [] as Track[],
    };
  },

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
  },
});
</script>
