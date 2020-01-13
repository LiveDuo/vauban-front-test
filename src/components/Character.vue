<template>
  <div class="character">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{character.name}}</div>
    <a role="button" v-if="$store.state.favourites.includes(character)" @click="() => removeToFavourites(character)">
      <font-awesome-icon :icon="['fas', 'heart']"/>
    </a>
    <a role="button" v-else @click="() => saveToFavourites(character)">
      <font-awesome-icon :icon="['far', 'heart']"/>
    </a>
  </div>
</template>


<script>
export default {
  props: {
    character: Object
  },
  methods: {
    saveToFavourites (character) {
      this.$store.commit('addToFavourites', character)
    },
    removeToFavourites (character) {
      this.$store.commit('removeToFavourites', character)
    }
  }
}
</script>

<style>
.character {
  box-shadow: 4px 4px #eeeeee80;
  margin: 10px;
  padding: 10px;
}
</style>
