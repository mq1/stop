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

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface Genre {
  name: string;
  score: number;
}

@Component
export default class GenresCard extends Vue {
  @Prop({ type: String, required: true }) readonly title!: String;
  @Prop({ type: String, required: true }) readonly timeRange!: String;

  genres: Genre[] = [];

  async fetch() {
    let genres: Genre[] = [];

    const artists = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/artists?time_range=${this.timeRange}`
    );
    for (const artist of artists.items) {
      for (const genre of artist.genres) {
        // increment genre score if it exists, otherwise add it
        let existing = genres.filter((element) => element.name == genre);
        if (existing.length == 1) {
          genres[genres.indexOf(existing[0])].score++;
        } else {
          let newGenre: Genre = {
            name: genre,
            score: 1,
          };
          genres.push(newGenre);
        }
      }
    }

    // sort the genres
    genres.sort((first, second) => second.score - first.score);

    // get only 10 items
    this.genres = genres.slice(0, 10);
  }
}
</script>