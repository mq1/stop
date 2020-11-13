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
        <div class="columns">
          <div class="column">
            <h2 class="title">Your favorite genres</h2>
            <genres time-range="long_term" />
          </div>
          <div class="column">
            <h2 class="title">Your recent genres</h2>
            <genres time-range="short_term" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Your favorite artists</h2>
        <artists time-range="long_term" />

        <h2 class="title">Your recent artists</h2>
        <artists time-range="short_term" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Your favorite tracks</h2>
        <tracks time-range="long_term" />

        <h2 class="title">Your recent tracks</h2>
        <tracks time-range="short_term" />
      </div>
    </section>
  </div>
</template>
