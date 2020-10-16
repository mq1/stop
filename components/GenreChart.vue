<script>
import { HorizontalBar } from "vue-chartjs";
import "chartjs-plugin-colorschemes";

export default {
  extends: HorizontalBar,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    options: {
      legend: { display: false },
      plugins: {
        colorschemes: {
          scheme: "brewer.Paired12",
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
