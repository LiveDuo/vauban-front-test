<template>
  <div class="character">
    <h3>
      <span data-testid="txt-character-name">{{character.name}}</span>
      &nbsp;
      <a role="button" v-if="$store.state.favourites.includes(character)" @click="() => removeToFavourites(character)">
        <font-awesome-icon :icon="['fas', 'heart']"/>
      </a>
      <a role="button" v-else @click="() => saveToFavourites(character)">
        <font-awesome-icon :icon="['far', 'heart']"/>
      </a>
    </h3>

    <div data-testid="txt-character-gender-height-mass" style="margin-bottom: 10px;">{{character.gender}} {{character.height}}cm {{character.mass}}kg</div>
    <div data-testid="txt-character-birth-year" style="margin-bottom: auto">Born in {{character.birth_year}}</div>
    
    <div style="margin-bottom: 10px; margin-top: 20px; font-weight: bold;">Hair / Skin / Eyes:</div>
    <div data-testid="txt-character-hair-skin-eyes" style="margin-bottom: 20px;">{{character.hair_color}} - {{character.skin_color}} - {{character.eye_color}}</div>
    
    <button style="margin-bottom: 10px;" @click="() => showModal(character)">Details</button>
  </div>
</template>


<script>
export default {
  props: {
    character: Object
  },
  methods: {
    saveToFavourites (character) {
      this.$store.dispatch('addToFavourites', character)
    },
    removeToFavourites (character) {
      this.$store.dispatch('removeToFavourites', character)
    },
    showModal (character) {
      this.$store.dispatch('updateSelectedCharacter', character)
      this.$store.dispatch('updateShowModal', true)
    }
  }
}
</script>

<style lang="scss">
@import "../../theme.scss";

.character {
  box-shadow: 4px 4px $shadow-color;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>
