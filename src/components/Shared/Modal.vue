<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header>
        <slot name="header">
          <div class="modal-header" style="padding: 0px 20px;">
            <h1>Details</h1>
            <button type="button" style="height: 40px; width: 40px;" @click="close">X</button>
          </div>
        </slot>
      </header>
      <section>
        <slot name="body">
          <div class="modal-body" style="padding: 10px 20px;">
            I'm the default body!
          </div>
        </slot>
       </section>
       <footer>
          <slot name="footer">
            <div class="modal-footer" style="padding: 20px;">
              <button type="button" @click="close">DONE</button>
            </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../theme.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $backdrop-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $shadow-color;
  justify-content: space-between;
}

.modal-body {
  position: relative;
}

.modal-footer {
  display: flex;
  border-top: 1px solid $shadow-color;
  justify-content: flex-end;
  align-items: center;
}

</style>
