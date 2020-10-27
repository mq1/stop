<template>
  <div>
    <b-navbar>
      <template slot="brand" v-if="$auth.loggedIn">
        <b-navbar-item>
          <b-image :src="$auth.user.images[0].url" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="https://github.com/quarno/stop">
          <b-icon icon="github" />
        </b-navbar-item>
      </template>
    </b-navbar>

    <nuxt />

    <footer class="footer">
      <div class="content has-text-centered">
        <p>© 2020 Manuel Quarneti</p>
      </div>
    </footer>
  </div>
</template>
