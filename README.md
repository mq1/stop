<center>
    <h1>stop - top for Spotify</h1>
    <p>An unofficial Spotify user stats viewer</p>
    <a href="https://app.netlify.com/sites/top-for-spotify/deploys">
        <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/51821054-4e7b-42e1-a924-e5168d4ae13d/deploy-status">
    </a>
</center>

Inspired by [Nicholas-Lin/vibe](https://github.com/Nicholas-Lin/vibe) and [Obscurify](https://github.com/alexolivero/Obscurify)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Required environment variables:

* `BASE_URL`: for example `https://stop.quarno.xyz`
* `SPOTIFY_CLIENT_ID`: for example `602adbe96b424384b1f72f8ffd867457`
