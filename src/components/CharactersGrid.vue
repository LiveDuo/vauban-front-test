<template>
  <div v-if="$store.state.filteredCharacters.length === 0" class="characters-grid">
    <div class="no-characters">No characters</div>
  </div>
  <div v-else-if="!$store.state.filteredCharacters" class="characters-grid">
    <div className="loading">Loading</div>
  </div>
  <div v-else class="characters-grid">
    <character v-for="(character, id) in $store.state.filteredCharacters" :key="id" :character="character" />
  </div>
</template>


<script>
import Character from './Character'

export default {
  components: {
    Character
  }
}
</script>

<style>
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
  margin-top: 100px;
  text-align: center;
}
</style>
