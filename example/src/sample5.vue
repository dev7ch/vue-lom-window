<template>
  <div>

    <lom-window-style-metal>
      <template v-for="i in [1, 2, 3, 4]" , :zGroup="0">
        <lom-window :key="i" :title="`Base Layer #${i}`">
          <fieldset>
            <legend>&alpha;</legend>
            <input type="range" />
          </fieldset>
        </lom-window>
      </template>
    </lom-window-style-metal>

    <lom-window-style-black>
      <template v-for="i in [1, 2, 3, 4]">
        <lom-window :key="i" :title="`Floating Layer #${i}`" :zGroup="1">
          <fieldset>
            <legend>&alpha;</legend>
            <input type="range" />
          </fieldset>
        </lom-window>
      </template>
    </lom-window-style-black>

    <p>
      Floating windows always appear in foreground of windows on base layer.
    </p>
  </div>
</template>