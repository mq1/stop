<template>
  <v-app>
    <v-app-bar app>
      <v-avatar v-if="$auth.loggedIn">
        <v-img :src="$auth.user.images[0].url" />
      </v-avatar>
      <v-spacer />
      <v-toolbar-title
        v-if="$auth.loggedIn"
        v-text="$auth.user.display_name + '\'s vibe'"
      />
      <v-spacer />
      <v-btn href="https://github.com/quarno/different-vibe" target="_blank" icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app>
      <span>© 2020 Manuel Quarneti</span>
    </v-footer>
  </v-app>
</template>
