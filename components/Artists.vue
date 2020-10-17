<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.name">
        <v-card max-width="400" class="mx-auto">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.name"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["timeRange"],
  data: () => ({
    cards: [],
  }),
  async fetch() {
    const artists = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/artists?limit=10&time_range=${this.timeRange}`
    );

    for (const artist of artists.items) {
      this.cards.push({
        name: artist.name,
        src: artist.images[0].url,
      });
    }
  },
};
</script>