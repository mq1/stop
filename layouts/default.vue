<template>
  <v-app dark>
    <v-app-bar app>
      <v-avatar v-if="$auth.loggedIn">
        <v-img :src="$auth.user.images[0].url" />
      </v-avatar>
      <v-spacer />
      <v-toolbar-title v-if="$auth.loggedIn" v-text="$auth.user.display_name" />
      <v-toolbar-title v-if="$auth.loggedIn" v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" app right>
      <v-list>
        <v-list-item :href="repo" target="_blank">
          <v-list-item-title>Repo</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "'s vibe",
    repo: "https://github.com/quarno/different-vibe",
    drawer: null,
  })
}
</script>
