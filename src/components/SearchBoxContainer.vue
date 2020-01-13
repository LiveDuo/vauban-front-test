<template>
  <div class="search-box-container">
    <div class="search-box-container-inside">
      <input class="search-box" placeholder="Enter character name" v-model="searchTerm"/>
      
      <span style="margin-left: 4px;">
        <input type="checkbox" v-model="showOnlyFavourites">
        &nbsp;
        <label>Only favourites</label>
      </span>

      <span v-if="$store.state.favourites.length > 0" style="margin-left: 4px;">
        <font-awesome-icon :icon="['fas', 'heart']"/>&nbsp;<span>{{$store.state.favourites.length}} favourites</span>
      </span>
      <span v-else style="margin-left: 4px;">
        No favourites
      </span>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  methods: {
    updateFilteredCharacters: debounce(function() {
        this.$store.commit('updateFilteredCharacters', this.searchTerm)
    }, 250)
  },
  watch: {
    searchTerm () {
      this.updateFilteredCharacters()
    },
    showOnlyFavourites () {
      this.updateFilteredCharacters()
    }
  },
  computed: {
    showOnlyFavourites: {
      get () {
        return this.$store.state.showOnlyFavourites
      },
      set (value) {
        this.$store.commit('updateShowOnlyFavourite', value)
      }
    },
    searchTerm: {
      get () {
        return this.$store.state.searchTerm
      },
      set (value) {
        this.$store.commit('updateSearchTerm', value)
      }
    }
  }
}
</script>

<style>
.search-box {
  padding: 10px;
  border-radius: 4px;
  border-width: 1px;
  width: 100%;
}

.search-box-container {
  max-width: 1000px;
  margin: 0 auto;
}

.search-box-container-inside {
  display: flex;
  margin: 0 40px;
  margin-bottom: 20px;
}
</style>
