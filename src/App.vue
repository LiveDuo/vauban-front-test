<template>
  <div id="app">
    <custom-header/>
    <characters-grid/>
    <modal v-if="$store.state.showModal && $store.state.selectedCharacter" @close="() => $store.dispatch('updateShowModal', false)">
      <div slot="body" >
        <character-modal :character="$store.state.selectedCharacter"/>
      </div>
      <div slot="footer">
      </div>
    </modal>
  </div>
</template>

<script>
import CustomHeader from './components/Header/Header'
import CharactersGrid from './components/Grid/CharactersGrid'

import Modal from './components/Shared/Modal'
import CharacterModal from './components/Grid/CharacterModal'

export default {
  name: 'app',
  components: {
    CustomHeader, CharactersGrid, Modal, CharacterModal
  }
}
</script>

<style lang="scss">
@import "./theme.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: $secondary-color;
  padding: 4px;
}

a:hover {
  cursor: pointer;
}

button {
  border: none;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  color: white;
  background: $secondary-color;
  border: none;
  border-radius: 4px;
}
</style>
