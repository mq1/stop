<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title" v-text="$auth.user.display_name + '\'s stats'" />
      </div>
    </div>
  </section>
</template>
