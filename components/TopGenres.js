import { Doughnut } from "vue-chartjs";
import palette from "google-palette";

function hex2rgba(hex, alpha = 1) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
}

export default {
    extends: Doughnut,
    async mounted() {
        let labels = [];
        let data = [];

        const tracks = await this.$axios.$get(
            "https://api.spotify.com/v1/me/top/tracks?limit=50"
        );
        for (let track of tracks.items) {
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

        let backgroundColor = palette("tol-rainbow", data.length);
        for (let i = 0; i < backgroundColor.length; i++) {
            backgroundColor[i] = hex2rgba(backgroundColor[i])
        }

        this.renderChart({
            labels: labels,
            datasets: [{
                label: "Your favorite genres",
                data: data,
                backgroundColor: backgroundColor
            }]
        }, { legend: { display: false } })
    }
}
