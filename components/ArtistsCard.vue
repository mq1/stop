<template>
  <v-card class="mt-4 mx-auto">
    <v-card-title v-text="title"></v-card-title>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="artist in artists" :key="artist.name" cols="4">
          <v-card>
            <v-img
              :src="artist.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="artist.name"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["timeRange", "title"],
  data: () => ({
    artists: [],
  }),
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
};
</script>