<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="genre in genres" :key="genre.name">
        <v-card outlined>
          <v-rating v-model="genre.score" :length="length" />
          <v-card-title v-text="genre.name"></v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["timeRange"],
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