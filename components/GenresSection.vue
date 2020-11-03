<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-light">Your favorite genres</h2>
          <genres time-range="long_term" />
        </div>
        <div class="column">
          <h2 class="title has-text-light">Your recent genres</h2>
          <genres time-range="short_term" />
        </div>
      </div>
    </div>
  </section>
</template>
