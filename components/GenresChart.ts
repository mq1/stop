import Vue, { PropOptions } from "vue";
import { Doughnut } from "vue-chartjs";
import { Component, Prop } from 'vue-property-decorator';

const limit = 10;

const backgroundColor = [
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
]
const borderColor = [
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
]

@Component({
  extends: Doughnut,
})
export default class GenresChart extends Vue {
  @Prop({ type: String, required: true }) readonly type!: string

  public renderChart!: (chartData: any, options: any) => void;

  private async getGenres(url: string) {
    let genres: { name: string; score: number }[] = [];

    const tracks: { items: any[] } = await this.$axios.$get(url);
    for (let track of tracks.items) {
      if (track.track) track = track.track // recently-played fix (the track object comes inside a "track" object)
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

    // sort array
    genres.sort((a, b) => b.score - a.score);

    return genres
  }

  async mounted() {
    let genres = await this.getGenres("https://api.spotify.com/v1/me/top/tracks")

    // get only a few genres
    genres = genres.slice(0, limit);

    let labels: string[] = []
    let scores: number[] = []


    let formattedGenres = await this.getGenres(this.type === "top" ? "https://api.spotify.com/v1/me/top/tracks" : "https://api.spotify.com/v1/me/player/recently-played")
    formattedGenres.forEach((genre: { name: string, score: number }) => {
      labels.push(genre.name)
      scores.push(genre.score)
    })

    this.renderChart({
      labels: labels,
      datasets: [
        {
          label: this.type === "top" ? "Your favorite genres" : "Your recent genres",
          data: scores,
          backgroundColor: backgroundColor,
          borderColor: borderColor
        }
      ],
    }, {});
  }
}
