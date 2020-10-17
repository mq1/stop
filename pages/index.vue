<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="6">
        <GenresCard title="Your favorite genres" time-range="long_term" />
      </v-col>
      <v-col cols="6">
        <GenresCard title="Your recent genres" time-range="short_term" />
      </v-col>
      <v-col cols="12">
        <ArtistsCard title="Your favorite artists" time-range="long_term" />
      </v-col>
      <v-col cols="12">
        <ArtistsCard title="Your recent artists" time-range="short_term" />
      </v-col>
    </v-row>
  </v-container>
</template>
