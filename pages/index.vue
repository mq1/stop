<template>
  <div>
    <v-card class="mt-4">
      <GenreChartContainer time-range="long_term" />
      <v-card-title>Your favorite genres</v-card-title>
    </v-card>
    <v-card class="mt-4">
      <GenreChartContainer time-range="short_term" />
      <v-card-title>Your recent genres</v-card-title>
    </v-card>
    <v-card class="mt-4">
      <Artists time-range="long_term" />
      <v-card-title>Your top artists</v-card-title>
    </v-card>
    <v-card class="mt-4">
      <Artists time-range="short_term" />
      <v-card-title>Your recent artists</v-card-title>
    </v-card>
  </div>
</template>
