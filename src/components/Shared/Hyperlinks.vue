<template>
  <div v-if="urls.length > 0">
    <a v-for="(url, index) in urls" :key="index" :href="url" target="_blank">
      {{formatUrl(url)}}
    </a>
  </div>
  <div v-else>
    Empty
  </div>
</template>

<script>
export default {
  props: {
    urls: Array
  },
  methods: {
    formatUrl (url) {
      return url.replace('https://swapi.co/api/', '')
    }
  }
}
</script>
