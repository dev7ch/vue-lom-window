<template>
  <lom-window-style-metal>

    <lom-window title="Window 1" :close-button="true" :isOpen.sync="isOpen">
      Parameters:
      <fieldset>
        <legend>&alpha;</legend>
        <input type="range" />
      </fieldset>
      <fieldset>
        <legend>&beta;</legend>
        <input type="range" />
      </fieldset>
    </lom-window>

    <button @click="isOpen = ! isOpen">Toggle Window 1</button>

  </lom-window-style-metal>
</template>


<script lang="ts">
export default <any>{
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>