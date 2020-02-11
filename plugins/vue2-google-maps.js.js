import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.googleApiKey,
    libraries: 'places'
  }
})
