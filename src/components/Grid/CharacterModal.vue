<template>
  <div style="display: flex; flex-direction: column; padding: 10px 20px; min-width: 300px;">
    <div style="margin-bottom: 2px; font-weight: bold;">Url</div>
    <div data-testid="txt-character-url" style="margin-bottom: 10px;"><hyperlinks :urls="[character.url]"/></div>
    <div style="margin-bottom: 2px; font-weight: bold;">Homeworld</div>
    <div data-testid="txt-character-homeworld" style="margin-bottom: 10px;"><hyperlinks :urls="[character.homeworld]"/></div>
    <div style="margin-bottom: 2px; font-weight: bold;">Films</div>
    <div data-testid="txt-character-films" style="margin-bottom: 10px;"><hyperlinks :urls="character.films"/></div>
    <div style="margin-bottom: 2px; font-weight: bold;">Species</div>
    <div data-testid="txt-character-species" style="margin-bottom: 10px;"><hyperlinks :urls="character.species"/></div>
    <div style="margin-bottom: 2px; font-weight: bold;">Vehicles</div>
    <div data-testid="txt-character-vehicles" style="margin-bottom: 10px;"><hyperlinks :urls="character.vehicles"/></div>
    <div style="margin-bottom: 2px; font-weight: bold;">Starships</div>
    <div data-testid="txt-character-starships" style="margin-bottom: 10px;"><hyperlinks :urls="character.starships"/></div>
  </div>
</template>

<script>
import Hyperlinks from '../Shared/Hyperlinks'

export default {
  props: {
    character: Object
  },
  components: {
    Hyperlinks
  }
}
</script>