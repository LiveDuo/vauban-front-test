<template>
  <div id="app">
    <search-box-container/>
    <characters-grid/>
  </div>
</template>

<script>
import SearchBoxContainer from './components/SearchBoxContainer'
import CharactersGrid from './components/CharactersGrid'

export default {
  name: 'app',
  components: {
    SearchBoxContainer, CharactersGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:hover {
  cursor: pointer;
}
</style>
