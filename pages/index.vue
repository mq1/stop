<template>
  <div>
    <v-card class="mt-4 mx-auto">
      <GenreChartContainer time-range="long_term" />
      <v-card-text>
        <div class="display-1 font-weight-thin">Your favorite genres</div>
      </v-card-text>
    </v-card>
    <v-card class="mt-4 mx-auto">
      <GenreChartContainer time-range="short_term" />
      <v-card-text>
        <div class="display-1 font-weight-thin">Your recent genres</div>
      </v-card-text>
    </v-card>
  </div>
</template>
