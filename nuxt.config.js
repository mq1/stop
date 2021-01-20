export default {
    target: 'static',

    head: {
        title: 'top for Spotify',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'An unofficial Spotify stats viewer'
            }
        ]
    },

    // auto import components
    components: true,

    buildModules: [
        '@nuxt/typescript-build',
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        'nuxt-buefy'
    ],

    router: {
        base: '/stop/',
        middleware: ['auth']
    },

    auth: {
        strategies: {
            local: false,
            spotify: {
                _scheme: 'oauth2',
                authorization_endpoint: 'https://accounts.spotify.com/authorize',
                userinfo_endpoint: 'https://api.spotify.com/v1/me',
                scope: ['user-top-read'],
                redirect_uri: process.env.BASE_URL,
                client_id: process.env.SPOTIFY_CLIENT_ID,
            }
        }
    }
}