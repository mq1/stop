<template>
  <v-card>
    <v-container fluid>
      <v-card-title v-text="title"></v-card-title>
      <v-card
        v-for="(genre, i) in genres"
        :key="genre.name"
        class="mt-4 mx-auto"
        outlined
      >
        <v-card-title v-text="genre.name" />
        <v-card-subtitle v-text="i + 1" />
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["timeRange", "title"],
  data: () => ({
    genres: [],
    length: 0,
  }),
  async fetch() {
    let scores = {};

    const artists = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/artists?time_range=${this.timeRange}`
    );
    for (const artist of artists.items) {
      for (const genre of artist.genres) {
        // increment genre score if it exists, otherwise add it
        if (genre in scores) {
          scores[genre]++;
        } else {
          scores[genre] = 1;
        }
        this.length = Math.max(this.length, scores[genre]);
      }
    }

    // sort the scores
    let scoresArray = Object.keys(scores).map((key) => ({
      name: key,
      score: scores[key],
    }));
    scoresArray.sort((first, second) => second.score - first.score);

    // get only 10 items
    this.genres = scoresArray.slice(0, 10);
  },
};
</script>