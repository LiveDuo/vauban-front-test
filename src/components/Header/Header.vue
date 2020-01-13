<template>
  <div class="search-box-container">
    <div class="search-box-container-inside">
      <input class="search-box" placeholder="Enter character name" v-model="searchTerm"/>
      
      <span class="panel-item">
        <input type="checkbox" v-model="showOnlyFavourites">
        &nbsp;
        <label>Only favourites</label>
      </span>

      <span v-if="$store.state.favourites.length > 0" class="panel-item">
        <font-awesome-icon :icon="['fas', 'heart']"/>&nbsp;<span data-testid="txt-favourites-count">{{$store.state.favourites.length}} favourites</span>
      </span>
      <span v-else class="panel-item">
        <span data-testid="txt-favourites-count">No favourites</span>
      </span>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  methods: {
    updateFilteredCharacters: debounce(function() {
        this.$store.dispatch('updateFilteredCharacters')
    }, 250)
  },
  computed: {
    showOnlyFavourites: {
      get () {
        return this.$store.state.showOnlyFavourites
      },
      set (value) {
        this.$store.dispatch('updateShowOnlyFavourite', value)
      }
    },
    searchTerm: {
      get () {
        return this.$store.state.searchTerm
      },
      set (value) {
        this.$store.dispatch('updateSearchTerm', value)
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

.panel-item {
  margin-left: 4px;
  width: 100px;
}
</style>
