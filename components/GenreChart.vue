<script>
import { Doughnut } from "vue-chartjs";
import 'chartjs-plugin-colorschemes';

export default {
  extends: Doughnut,
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
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
