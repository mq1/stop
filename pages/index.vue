<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <GenresCard title="Your favorite genres" time-range="long_term" />
      </v-col>
      <v-col>
        <GenresCard title="Your recent genres" time-range="short_term" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <ArtistsCard title="Your favorite artists" time-range="long_term" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <ArtistsCard title="Your recent artists" time-range="short_term" />
      </v-col>
    </v-row>
  </v-container>
</template>
