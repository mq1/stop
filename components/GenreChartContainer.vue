<template>
  <genre-chart v-if="loaded" :chartdata="chartdata" :options="options" />
</template>

<script>
import GenreChart from "./GenreChart.vue";

export default {
  name: "GenreChartContainer",
  components: { GenreChart },
  props: ["timeRange"],
  data: () => ({
    loaded: false,
    chartdata: null,
  }),

  async mounted() {
    this.chartdata = {
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    };

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
      }
    }

    // sort the scores
    let scoresArray = Object.keys(scores).map((key) => [key, scores[key]]);
    scoresArray.sort((first, second) => second[1] - first[1]);

    // get only 10 items
    scoresArray = scoresArray.slice(0, 10);

    scoresArray.forEach((score) => {
      this.chartdata.labels.push(score[0]);
      this.chartdata.datasets[0].data.push(score[1]);
    });

    this.loaded = true;
  },
};
</script>
