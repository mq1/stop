<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-text="$auth.user.display_name + '\'s stats'" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <genres-tile title="Your favorite genres" time-range="long_term" />
          <genres-tile title="Your recent genres" time-range="short_term" />
        </div>
      </div>
    </section>
    <artists-section title="Your favorite artists" time-range="long_term" />
    <artists-section title="Your recent artists" time-range="short_term" />
  </div>
</template>
