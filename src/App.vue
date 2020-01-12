<template>
  <div id="app">
    <div class="search-box-container">
      <div class="search-box-container-inside">
        <input class="search-box" placeholder="Enter character name" v-model="searchTerm"/>
        <!-- <button @click="printFavourites">Favs</button> -->
        
        <input type="checkbox" v-model="showOnlyFavourites">
        <label>Only favourites</label>

        <span v-if="$store.state.favourites.length > 0">
          <font-awesome-icon :icon="['fas', 'heart']"/>
          <span>{{$store.state.favourites.length}} favourites</span>
        </span>
        <span v-else>
          No favourites
        </span>
      </div>
    </div>

    <div v-if="filteredCharacters.length === 0" class="characters-grid">
      <div class="no-characters">No characters</div>
    </div>
    <div v-if="!filteredCharacters" class="characters-grid">
      <div className="loading">Loading</div>
    </div>
    <div v-else class="characters-grid">
      <div class="character" v-for="(character, id) in filteredCharacters" :key="id">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>{{character.name}}</div>
        <!-- <button >Fav</button> -->
        <!-- <button >UnFav</button> -->
        <!-- <font-awesome-icon icon="heart" /> -->
        <a role="button" v-if="$store.state.favourites.includes(character)" @click="() => removeToFavourites(character)">
          <font-awesome-icon :icon="['fas', 'heart']"/>
        </a>
        <a role="button" v-else @click="() => saveToFavourites(character)">
          <font-awesome-icon :icon="['far', 'heart']"/>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import { characters } from './data/characters'

export default {
  name: 'app',
  data() {
    return {
      characters: characters,
      searchTerm: '',
      showOnlyFavourites: false
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    saveToFavourites (character) {
      this.$store.commit('addToFavourites', character)
    },
    removeToFavourites (character) {
      this.$store.commit('removeToFavourites', character)
    },
    printFavourites () {
      console.log(this.$store.state.favourites)
    }
  },
  computed: {
    filteredCharacters () {

      const characters = this.showOnlyFavourites ? this.$store.state.favourites : this.characters

      const filtered = characters.filter(character => {
        const name = character.name.toLowerCase()
        const term = this.searchTerm.toLowerCase()
        return name.includes(term)
      })
      return filtered
    }
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

@media only screen and (max-width: 480px) {
  .characters-grid {
    display: flex;
    flex-direction: column;
  }  
}

@media only screen and (min-width: 481px) {
  .characters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 228px);
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }  
}

.no-characters {
  margin-top: 100px;
  text-align: center;
}

.loading {
  /* color: white; */
  margin-top: 100px;
  text-align: center;
}

.character {
  box-shadow: 4px 4px #eeeeee80;
  margin: 10px;
  padding: 10px;
}

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

a:hover {
  cursor: pointer;
}
</style>
