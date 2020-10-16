<template>
  <genre-chart v-if="loaded" :chartdata="chartdata" :options="options" />
</template>

<script>
import GenreChart from "./GenreChart.vue";

export default {
  name: "RecentGenresContainer",
  components: { GenreChart },
  data: () => ({
    loaded: false,
    chartdata: null,
  }),
  async mounted() {
    let labels = [];
    let data = [];

    const tracks = await this.$axios.$get(
      "https://api.spotify.com/v1/me/player/recently-played"
    );
    for (let track of tracks.items) {
      for (const artist of track.track.artists) {
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
          label: "Your recent genres",
          data: data,
        },
      ],
    };
    this.loaded = true;
  },
};
</script>
