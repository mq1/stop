<template>
  <genre-chart v-if="loaded" :chartdata="chartdata" :options="options" />
</template>

<script>
import GenreChart from "./GenreChart.vue";

export default {
  name: "TopGenres",
  components: { GenreChart },
  data: () => ({
    loaded: false,
    chartdata: null,
  }),
  async mounted() {
    let labels = [];
    let data = [];

    const tracks = await this.$axios.$get(
      "https://api.spotify.com/v1/me/top/tracks"
    );
    for (const track of tracks.items) {
      for (const artist of track.artists) {
        let artistData = await this.$axios.$get(
          `https://api.spotify.com/v1/artists/${artist.id}`
        );
        for (const genre of artistData.genres) {
          // increment genre score if it exists, otherwise add it
          if (labels.includes(genre)) {
            data[labels.indexOf(genre)]++;
          } else {
            labels.push(genre);
            data.push(1);
          }
        }
      }
    }

    this.chartdata = {
      labels: labels,
      datasets: [
        {
          label: "Your favorite genres",
          data: data,
        },
      ],
    };
    this.loaded = true;
  },
};
</script>
