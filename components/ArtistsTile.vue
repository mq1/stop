<template>
  <div class="tile is-parent is-vertical">
    <p class="title" v-text="title" />
    <div class="tile is-child" v-for="artist in artists" :key="artist.name">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <b-image ratio="4by3" :src="artist.src" />
          </figure>
        </div>
        <div class="card-content is-overlay">
          <span class="tag is-primary" v-text="artist.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface Artist {
  name: string;
  src: string;
}

@Component
export default class ArtistsSection extends Vue {
  @Prop({ type: String, required: true }) readonly title!: String;
  @Prop({ type: String, required: true }) readonly timeRange!: String;

  artists: Artist[] = [];

  async fetch() {
    const artists = await this.$axios.$get(
      `https://api.spotify.com/v1/me/top/artists?limit=9&time_range=${this.timeRange}`
    );

    for (const artist of artists.items) {
      this.artists.push({
        name: artist.name,
        src: artist.images[0].url,
      });
    }
  }
}
</script>
