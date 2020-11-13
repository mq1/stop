<template>
  <user-top :items="artists" />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Artist {
  name: string;
  src: string;
}

export default Vue.extend({
  name: "Artists",

  props: {
    timeRange: {
      type: String,
      required: true,
    } as PropOptions<String>,
  },

  data() {
    return {
      artists: [] as Artist[],
    };
  },

  async fetch() {
    const artists = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/artists?limit=9&time_range=${this.timeRange}`
    );

    for (const artist of artists.items) {
      this.artists.push({
        name: artist.name,
        src: artist.images[0].url,
      });
    }
  },
});
</script>
