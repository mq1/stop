import Vue from "vue";
import { Doughnut, mixins } from "vue-chartjs";
import { Component } from 'vue-property-decorator';

const limit = 10;

@Component({
  extends: Doughnut,
})
export default class GenresChart extends Vue {
  public renderChart!: (chartData: any, options: any) => void;

  private async getGenres(url: string) {
    let genres: { name: string; score: number }[] = [];

    const tracks: { items: { artists: { id: string }[] }[] } = await this.$axios.$get(url);
    for (const track of tracks.items) {
      for (const artist of track.artists) {
        let artistData: { genres: string[] } = await this.$axios.$get(`https://api.spotify.com/v1/artists/${artist.id}`)
        for (const genre of artistData.genres) {
          // increment genre score if it exists, otherwise add it
          let item = genres.find((item) => item.name == genre);
          if (item) genres[genres.indexOf(item)].score++;
          else genres.push({ name: genre, score: 1 });
        }
      }
    }

    return genres
  }

  async mounted() {
    let genres: { name: string; score: number }[] = await this.getGenres("https://api.spotify.com/v1/me/top/tracks")

    // sort array
    genres.sort((a, b) => b.score - a.score);

    // get only a few genres
    let bestGenres = genres.slice(0, limit);

    let formattedData: { labels: string[]; data: number[] } = {
      labels: [],
      data: [],
    };

    // add the top genres to formattedData
    bestGenres.forEach((genre) => {
      formattedData.labels.push(genre.name);
      formattedData.data.push(genre.score);
    });

    // add the least favorite genres to the "other" category
    if (genres.length > limit) {
      let sum = 0;
      for (let i = limit; i < genres.length; i++) sum += genres[i].score;

      formattedData.labels.push("others");
      formattedData.data.push(sum);
    }

    this.renderChart({
      labels: formattedData.labels,
      datasets: [
        {
          label: "Your favorite genres",
          data: formattedData.data,
          backgroundColor: [
            "rgba(255, 221, 0, 0.8)",
            "rgba(255, 200, 0, 0.8)",
            "rgba(255,166,0, 0.8)",
            "rgba(255,124,67, 0.8)",
            "rgba(249,93,106, 0.8)",
            "rgba(212,80,135, 0.8)",
            "rgba(160,81,149, 0.8)",
            "rgba(102,81,145, 0.8)",
            "rgba(47,75,124, 0.8)",
            "rgba(29, 52, 130, 0.8)",
            "rgba(10, 36, 66, 0.8)",
          ],
          borderColor: [
            "rgba(255, 221, 0, 1)",
            "rgba(255, 200, 0, 1)",
            "rgba(255,166,0, 1)",
            "rgba(255,124,67, 1)",
            "rgba(249,93,106, 1)",
            "rgba(212,80,135, 1)",
            "rgba(160,81,149, 1)",
            "rgba(102,81,145, 1)",
            "rgba(47,75,124, 1)",
            "rgba(29, 52, 130, 1)",
            "rgba(10, 36, 66, 1)",
          ],
        },
      ],
    }, {});
  }
}
