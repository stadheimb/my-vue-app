import { reactive } from 'vue'

export const store = reactive({
  lines: [],
  addLine(line) {
    this.lines.push(line)
  }
})