<template>
  <div>
    <lom-window-style-metal style="position: fixed; z-index: 1">
      <lom-window v-for="w of numberWindows" :key="w.id" :title="w.label" :closeButton="true" :isOpen.sync="w.isOpen">
        <table>
          <tr>
            <th>N</th>
            <th>N
              <sup>2</sup>
            </th>
            <th>N
              <sup>3</sup>
            </th>
          </tr>
          <tr>
            <td v-html="w.n"></td>
            <td v-html="Math.pow(w.n, 2)"></td>
            <td v-html="Math.pow(w.n, 3)"></td>
          </tr>
        </table>
      </lom-window>
    </lom-window-style-metal>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as _ from 'lodash'

export class NumberWindow {
  private static id = 0

  id = NumberWindow.id++
  isOpen = true

  constructor(readonly n = Math.floor(100 * Math.random())) { }

  get label() {
    return `Number - ${this.n}`
  }
}


@Component
export default class Sample6 extends Vue {
  numberWindows: NumberWindow[] = _.range(3).map(i => new NumberWindow())
  newRandomNumber() {
    this.numberWindows.push(new NumberWindow())
  }
}
</script>


<style lang="scss" scoped>
table {
  white-space: nowrap;
  border-spacing: 0.5em;
}

td,
th {
  text-align: center;
  padding: 1em;
  box-shadow: 0 0 4pt rgba(0, 0, 0, 0.25);
  background-color: #eee;
  border-radius: 4pt;
}
</style>
